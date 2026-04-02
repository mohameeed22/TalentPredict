import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { DashboardService, EmployeeDashboardResponse } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { SkillsRadarChartComponent } from '../skills-radar-chart/skills-radar-chart.component';
import { BenchmarkService, CandidateProgressItem } from '../../../skill-test/services/benchmark.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SkillsRadarChartComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);
  private benchmarkService = inject(BenchmarkService);
  private notify = inject(NotificationService);

  dashboardData: EmployeeDashboardResponse | null = null;
  recentSkillTests: CandidateProgressItem[] = [];
  loading = true;
  error: string | null = null;
  loadingSkillTests = true;
  exportingPdf = false;

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
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Impossible de charger les données du tableau de bord.';
          this.loading = false;
          console.error('Error loading dashboard:', err);
        }
      });

      this.benchmarkService.progress(userId).subscribe({
        next: (rows) => {
          this.recentSkillTests = [...rows]
            .sort((a, b) => new Date(b.taken_at).getTime() - new Date(a.taken_at).getTime())
            .slice(0, 6);
          this.loadingSkillTests = false;
        },
        error: () => {
          this.loadingSkillTests = false;
        }
      });
    } else {
      this.error = 'Utilisateur non authentifié.';
      this.loading = false;
      this.loadingSkillTests = false;
    }
  }

  exportSkillReport(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id || this.exportingPdf) {
      return;
    }

    this.exportingPdf = true;
    this.benchmarkService.downloadReportResponse(String(user.id)).subscribe({
      next: response => {
        void this.handleReportResponse(response);
      },
      error: error => {
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
}
