import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { DashboardResponse } from '../../models/stats.model';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);

  dashboardData: DashboardResponse | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      this.loadDashboardStats(currentUser.id);
    } else {
      this.error = 'User not authenticated';
      this.loading = false;
    }
  }

  private loadDashboardStats(userId: number): void {
    this.loading = true;
    this.dashboardService.getDashboardStats(userId).subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load dashboard data';
        this.loading = false;
        console.error('Error loading dashboard:', err);
      }
    });
  }

  get testsCount(): number {
    return this.dashboardData?.testsCount ?? 0;
  }

  get skillsCount(): number {
    return this.dashboardData?.skillsCount ?? 0;
  }

  get formationsCount(): number {
    return this.dashboardData?.formationsCount ?? 0;
  }

  get formationsEnCours(): number {
    return this.dashboardData?.formationsEnCours ?? 0;
  }

  get progressionMoyenne(): number {
    return this.dashboardData?.progressionMoyenne ?? 0;
  }
}
