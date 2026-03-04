import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService, AdminOverviewResponse, EmployeeSummary } from '../../services/dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  overview: AdminOverviewResponse | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadOverview();
  }

  private loadOverview(): void {
    this.loading = true;
    // TASK 2: Uses GET /api/dashboard/admin/overview
    this.dashboardService.getAdminOverview().subscribe({
      next: (data) => {
        this.overview = data;
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
}
