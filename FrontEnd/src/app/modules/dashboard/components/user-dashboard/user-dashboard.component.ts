import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { DashboardService, EmployeeDashboardResponse } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { BenchmarkService, CandidateProgressItem } from '../../../skill-test/services/benchmark.service';
import { PieChartComponent, PieChartSlice } from '../../../../shared/components/pie-chart/pie-chart.component';
import { SkillsRadarChartComponent } from '../skills-radar-chart/skills-radar-chart.component';
import { PredictionResponse } from '../../models/prediction.model';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, PieChartComponent, SkillsRadarChartComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);
  private benchmarkService = inject(BenchmarkService);
  private notify = inject(NotificationService);
  private readonly piePalette: string[] = ['#6366f1', '#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#a855f7', '#14b8a6', '#f97316'];

  dashboardData: EmployeeDashboardResponse | null = null;
  recentSkillTests: CandidateProgressItem[] = [];
  loading = true;
  error: string | null = null;
  loadingSkillTests = true;
  exportingPdf = false;
  predictionLoading = false;
  generatingPrediction = false;
  predictionError: string | null = null;
  lastPrediction: PredictionResponse | null = null;

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      const userId = String(currentUser.id);
      // TASK 2: Uses correct endpoint GET /api/dashboard/users/{userId}
      this.dashboardService.getEmployeeDashboard(userId).pipe(
        timeout(15000)
      ).subscribe({
        next: (data) => {
          this.dashboardData = data;
          this.lastPrediction = data.dernierePrediction ?? null;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Impossible de charger les données du tableau de bord.';
          this.loading = false;
          console.error('Error loading dashboard:', err);
        }
      });

      this.benchmarkService.progress(userId).subscribe({
        next: (rows: CandidateProgressItem[]) => {
          this.recentSkillTests = [...rows]
            .sort((a, b) => new Date(b.taken_at).getTime() - new Date(a.taken_at).getTime())
            .slice(0, 6);
          this.loadingSkillTests = false;
        },
        error: () => {
          this.loadingSkillTests = false;
        }
      });

      this.loadLatestPrediction(userId);
    } else {
      this.error = 'Utilisateur non authentifié.';
      this.loading = false;
      this.loadingSkillTests = false;
    }
  }

  generatePrediction(): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id || this.generatingPrediction) {
      return;
    }

    this.generatingPrediction = true;
    this.predictionError = null;

    this.dashboardService.generatePrediction(String(currentUser.id)).subscribe({
      next: (prediction) => {
        this.lastPrediction = prediction;
        this.generatingPrediction = false;
        this.notify.success('Prediction IA generee avec succes.');
      },
      error: (err) => {
        this.generatingPrediction = false;
        this.predictionError = 'Impossible de generer la prediction IA pour le moment.';
        console.error('Error generating prediction:', err);
        this.notify.error('Generation de prediction impossible.');
      }
    });
  }

  exportSkillReport(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id || this.exportingPdf) {
      return;
    }

    this.exportingPdf = true;
    this.benchmarkService.downloadReportResponse(String(user.id)).subscribe({
      next: (response: HttpResponse<Blob>) => {
        void this.handleReportResponse(response);
      },
      error: (error: unknown) => {
        void this.handleReportError(error);
      }
    });
  }

  private async handleReportResponse(response: HttpResponse<Blob>): Promise<void> {
    try {
      const fallbackName = `talentpredict-report-${new Date().toISOString().slice(0, 10)}.pdf`;
      const fileName = this.benchmarkService.resolveReportFileName(response, fallbackName);
      const payload = response.body;

      if (!payload || payload.size === 0) {
        this.notify.error('Le rapport genere est vide. Reessayez dans quelques instants.');
        return;
      }

      if (!this.benchmarkService.isPdfResponse(response, fileName)) {
        const message = await this.benchmarkService.extractBlobMessage(
          payload,
          'Impossible de telecharger le rapport PDF.'
        );
        this.notify.error(message);
        return;
      }

      this.downloadBlob(payload, fileName);
      this.notify.success('Rapport PDF telecharge.');
    } finally {
      this.exportingPdf = false;
    }
  }

  private async handleReportError(error: unknown): Promise<void> {
    this.exportingPdf = false;
    const message = await this.benchmarkService.extractErrorMessage(
      error,
      'Impossible de telecharger le rapport PDF.'
    );
    this.notify.error(message);
  }

  private downloadBlob(blob: Blob, fileName: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    const url = window.URL.createObjectURL(blob);
    const anchor = window.document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.style.display = 'none';
    window.document.body.appendChild(anchor);
    anchor.click();

    window.setTimeout(() => {
      window.URL.revokeObjectURL(url);
      anchor.remove();
    }, 1000);
  }

  get displayName(): string {
    if (this.dashboardData) {
      return `${this.dashboardData.firstName} ${this.dashboardData.lastName}`;
    }
    const user = this.authService.getCurrentUser();
    return user ? `${user.prenom} ${user.nom}` : '';
  }

  get nombreTests(): number {
    return this.dashboardData?.nombreTests ?? 0;
  }

  get skillTestCount(): number {
    return this.recentSkillTests.length;
  }

  get totalCompletedTests(): number {
    return this.nombreTests + this.skillTestCount;
  }

  get latestSkillTestScore(): number | null {
    if (this.recentSkillTests.length === 0) {
      return null;
    }
    return this.recentSkillTests[0].overall_score;
  }

  get nombreSkills(): number {
    return (this.dashboardData?.nombreSkillsSoft ?? 0) + (this.dashboardData?.nombreSkillsTech ?? 0);
  }

  get nombreFormationsTotal(): number {
    return this.dashboardData?.nombreFormationsTotal ?? 0;
  }

  get nombreFormationsEnCours(): number {
    return this.dashboardData?.nombreFormationsEnCours ?? 0;
  }

  get scoreEvaluationMoyen(): number {
    return this.dashboardData?.scoreEvaluationMoyen ?? 0;
  }

  get lastTestOverallScore(): number | null {
    const test = this.getLatestTest();
    return typeof test?.overallScore === 'number' ? test.overallScore : null;
  }

  get lastTestDate(): Date | null {
    const test = this.getLatestTest();
    return test?.dateTest ? new Date(test.dateTest) : null;
  }

  get scorePieSlices(): PieChartSlice[] {
    const test = this.getLatestTest();
    const scores = test?.softSkillsScores;
    if (!scores) {
      return [];
    }

    const entries = Object.entries(scores)
      .filter(([, value]) => typeof value === 'number' && value > 0)
      .sort((a, b) => b[1] - a[1]);

    return entries.map(([key, value], index) => ({
      label: this.formatSkillLabel(key),
      value,
      color: this.piePalette[index % this.piePalette.length]
    }));
  }

  get predictionScorePercent(): number | null {
    if (typeof this.lastPrediction?.scoreConfiance !== 'number') {
      return null;
    }
    return Math.round(this.lastPrediction.scoreConfiance * 100);
  }

  get predictionDate(): Date | null {
    if (!this.lastPrediction?.datePrediction) {
      return null;
    }
    return new Date(this.lastPrediction.datePrediction);
  }

  private loadLatestPrediction(userId: string): void {
    this.predictionLoading = true;
    this.predictionError = null;

    this.dashboardService.getLatestPrediction(userId).subscribe({
      next: (prediction) => {
        this.lastPrediction = prediction;
        this.predictionLoading = false;
      },
      error: (err) => {
        this.predictionLoading = false;
        if (err?.status === 204 || err?.status === 404) {
          this.lastPrediction = null;
          return;
        }
        this.predictionError = 'Impossible de charger la derniere prediction IA.';
        console.error('Error loading latest prediction:', err);
      }
    });
  }

  private getLatestTest() {
    const tests = this.dashboardData?.testsRecents ?? [];
    if (!tests.length) {
      return null;
    }

    return [...tests].sort((a, b) => new Date(b.dateTest).getTime() - new Date(a.dateTest).getTime())[0];
  }

  private formatSkillLabel(key: string): string {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
