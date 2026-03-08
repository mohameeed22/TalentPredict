import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService, EmployeeDashboardResponse } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);

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
}
