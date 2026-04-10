import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService, AdminOverviewResponse, EmployeeDashboardResponse, EmployeeSummary } from '../../services/dashboard.service';
import { PieChartComponent, PieChartSlice } from '../../../../shared/components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, PieChartComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private readonly piePalette: string[] = ['#6366f1', '#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#a855f7', '#14b8a6', '#f97316'];

  overview: AdminOverviewResponse | null = null;
  loading = true;
  error: string | null = null;
  pieOwner = '';
  pieLastTestOverallScore: number | null = null;
  pieSoftSkillsScores: { [key: string]: number } = {};

  ngOnInit(): void {
    this.loadOverview();
  }

  private loadOverview(): void {
    this.loading = true;
    // TASK 2: Uses GET /api/dashboard/admin/overview
    this.dashboardService.getAdminOverview().subscribe({
      next: (data) => {
        this.overview = data;
        this.loadLastTestDistribution();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossible de charger le tableau de bord RH.';
        this.loading = false;
        console.error('Error loading admin dashboard:', err);
      }
    });
  }

  get employees(): EmployeeSummary[] {
    return this.overview?.employees ?? [];
  }

  trackByEmployeeId(_: number, emp: EmployeeSummary): string {
    return emp.id;
  }

  get overviewPieSlices(): PieChartSlice[] {
    const entries = Object.entries(this.pieSoftSkillsScores)
      .filter(([, value]) => typeof value === 'number' && value > 0)
      .sort((a, b) => b[1] - a[1]);

    if (!entries.length) {
      return [];
    }

    return entries.map(([key, value], index) => ({
      label: this.formatSkillLabel(key),
      value,
      color: this.piePalette[index % this.piePalette.length]
    }));
  }

  private loadLastTestDistribution(): void {
    const candidate = this.employees
      .filter((employee) => employee.testCount > 0)
      .sort((a, b) => b.testCount - a.testCount)[0];

    if (!candidate) {
      this.pieOwner = '';
      this.pieLastTestOverallScore = null;
      this.pieSoftSkillsScores = {};
      return;
    }

    this.pieOwner = `${candidate.firstName} ${candidate.lastName}`;
    this.dashboardService.getEmployeeDashboard(candidate.id).subscribe({
      next: (dashboard: EmployeeDashboardResponse) => {
        const latestTest = [...(dashboard.testsRecents ?? [])]
          .sort((a, b) => new Date(b.dateTest).getTime() - new Date(a.dateTest).getTime())[0];

        if (!latestTest?.softSkillsScores) {
          this.pieLastTestOverallScore = null;
          this.pieSoftSkillsScores = {};
          return;
        }

        this.pieLastTestOverallScore = typeof latestTest.overallScore === 'number' ? latestTest.overallScore : null;
        this.pieSoftSkillsScores = latestTest.softSkillsScores;
      },
      error: () => {
        this.pieLastTestOverallScore = null;
        this.pieSoftSkillsScores = {};
      }
    });
  }

  private formatSkillLabel(key: string): string {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
