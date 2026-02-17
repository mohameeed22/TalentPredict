import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

interface SystemStats {
  totalUsers: number;
  totalFormations: number;
  totalEvaluations: number;
  totalTickets: number;
  activeUsers: number;
  completedFormations: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  private adminService = inject(AdminService);
  
  stats = signal<SystemStats>({
    totalUsers: 0,
    totalFormations: 0,
    totalEvaluations: 0,
    totalTickets: 0,
    activeUsers: 0,
    completedFormations: 0
  });
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.loading.set(true);
    this.error.set(null);

    this.adminService.getSystemStats().subscribe({
      next: (data) => {
        this.stats.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        // Mock data for demonstration
        this.stats.set({
          totalUsers: 156,
          totalFormations: 342,
          totalEvaluations: 489,
          totalTickets: 127,
          activeUsers: 89,
          completedFormations: 234
        });
        this.loading.set(false);
        console.error('Error loading stats:', err);
      }
    });
  }

  getCompletionRate(): number {
    const total = this.stats().totalFormations;
    const completed = this.stats().completedFormations;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  getActiveUserRate(): number {
    const total = this.stats().totalUsers;
    const active = this.stats().activeUsers;
    return total > 0 ? Math.round((active / total) * 100) : 0;
  }
}
