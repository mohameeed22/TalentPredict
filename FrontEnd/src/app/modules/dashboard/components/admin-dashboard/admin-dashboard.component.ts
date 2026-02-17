import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardResponse } from '../../models/stats.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);

  systemStats: DashboardResponse | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadSystemStats();
  }

  private loadSystemStats(): void {
    this.loading = true;
    // For admin dashboard, we might need a different endpoint
    // Using user id 1 as placeholder for system-wide stats
    this.dashboardService.getDashboardStats(1).subscribe({
      next: (data) => {
        this.systemStats = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load system statistics';
        this.loading = false;
        console.error('Error loading admin dashboard:', err);
      }
    });
  }

  get totalTests(): number {
    return this.systemStats?.testsCount ?? 0;
  }

  get totalSkills(): number {
    return this.systemStats?.skillsCount ?? 0;
  }

  get totalFormations(): number {
    return this.systemStats?.formationsCount ?? 0;
  }

  get activeFormations(): number {
    return this.systemStats?.formationsEnCours ?? 0;
  }

  get completedFormations(): number {
    return this.systemStats?.formationsTerminees ?? 0;
  }

  get averageProgress(): number {
    return this.systemStats?.progressionMoyenne ?? 0;
  }
}
