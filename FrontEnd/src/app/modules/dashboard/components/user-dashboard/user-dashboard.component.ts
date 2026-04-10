import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService, EmployeeDashboardResponse } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PieChartComponent, PieChartSlice } from '../../../../shared/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, PieChartComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);
  private readonly piePalette: string[] = ['#6366f1', '#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#a855f7', '#14b8a6', '#f97316'];

  dashboardData: EmployeeDashboardResponse | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      // TASK 2: Uses correct endpoint GET /api/dashboard/users/{userId}
      this.dashboardService.getEmployeeDashboard(currentUser.id as string).subscribe({
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
    } else {
      this.error = 'Utilisateur non authentifié.';
      this.loading = false;
    }
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
