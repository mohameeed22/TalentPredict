import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { DashboardService, AdminOverviewResponse, EmployeeSummary } from '../../services/dashboard.service';
import { RecruiterApiService, RecruiterCandidateRow } from '../../../recruiter/services/recruiter-api.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private recruiterApiService = inject(RecruiterApiService);
  private notificationService = inject(NotificationService);
  private candidateIndex = new Map<string, RecruiterCandidateRow>();

  overview: AdminOverviewResponse | null = null;
  loading = true;
  error: string | null = null;
  lastSync = '--';
  searchTerm = '';

  ngOnInit(): void {
    this.loadOverview();
  }

  refreshData(): void {
    if (this.loading) {
      return;
    }
    this.loadOverview(true);
  }

  private loadOverview(showToast = false): void {
    this.loading = true;
    this.error = null;

    forkJoin({
      overview: this.dashboardService.getAdminOverview(),
      candidates: this.recruiterApiService.listCandidates().pipe(
        catchError(() => of([] as RecruiterCandidateRow[]))
      )
    })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: ({ overview, candidates }) => {
          this.overview = overview;
          this.candidateIndex = new Map(candidates.map(candidate => [candidate.userId, candidate]));
          this.lastSync = this.getNowLabel();
          if (showToast) {
            this.notificationService.success('Workforce data refreshed from live backend context.');
          }
        },
        error: (err) => {
          this.error = 'Impossible de charger le tableau de bord RH.';
          console.error('Error loading admin dashboard:', err);
        }
      });
  }

  get employees(): EmployeeSummary[] {
    return this.overview?.employees ?? [];
  }

  get filteredEmployees(): EmployeeSummary[] {
    const query = this.searchTerm.trim().toLowerCase();
    if (!query) {
      return this.employees;
    }

    return this.employees.filter(emp => {
      const fullName = `${emp.firstName ?? ''} ${emp.lastName ?? ''}`.toLowerCase();
      return (
        fullName.includes(query) ||
        (emp.email ?? '').toLowerCase().includes(query) ||
        (emp.department ?? '').toLowerCase().includes(query) ||
        (emp.position ?? '').toLowerCase().includes(query)
      );
    });
  }

  get readyEmployeesCount(): number {
    return this.employees.filter(emp => emp.active && emp.testCount > 0 && emp.formationCount > 0).length;
  }

  get atRiskEmployeesCount(): number {
    return this.employees.filter(emp => {
      const risk = this.getRiskLevel(emp.id);
      return risk === 'high' || risk === 'medium';
    }).length;
  }

  get assessmentCoverage(): number {
    if (this.employees.length === 0) {
      return 0;
    }
    const assessed = this.employees.filter(emp => emp.testCount > 0).length;
    return Math.round((assessed / this.employees.length) * 100);
  }

  getRiskLabel(userId: string): string {
    const risk = this.getRiskLevel(userId);
    if (risk === 'high') {
      return 'High';
    }
    if (risk === 'medium') {
      return 'Medium';
    }
    return 'Low';
  }

  getRiskClass(userId: string): string {
    const risk = this.getRiskLevel(userId);
    return `risk-${risk}`;
  }

  getReadinessLabel(emp: EmployeeSummary): string {
    if (!emp.active) {
      return 'Inactive';
    }
    if (emp.testCount > 0 && emp.formationCount > 0) {
      return 'Ready';
    }
    if (emp.testCount > 0) {
      return 'Assessed';
    }
    if (emp.formationCount > 0) {
      return 'In Training';
    }
    return 'Onboarding';
  }

  getReadinessClass(emp: EmployeeSummary): string {
    if (!emp.active) {
      return 'readiness-inactive';
    }
    if (emp.testCount > 0 && emp.formationCount > 0) {
      return 'readiness-ready';
    }
    if (emp.testCount > 0) {
      return 'readiness-assessed';
    }
    if (emp.formationCount > 0) {
      return 'readiness-training';
    }
    return 'readiness-onboarding';
  }

  trackByEmployeeId(_: number, emp: EmployeeSummary): string {
    return emp.id;
  }

  private getRiskLevel(userId: string): 'high' | 'medium' | 'low' {
    const candidate = this.candidateIndex.get(userId);
    const normalized = (candidate?.fraudRisk ?? '').toLowerCase();
    if (normalized === 'high') {
      return 'high';
    }
    if (normalized === 'medium') {
      return 'medium';
    }
    return 'low';
  }

  private getNowLabel(): string {
    return new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
