import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { DashboardResponse } from '../../models/stats.model';
import { User } from '../../../auth/models/user.model';

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

  dashboardData: DashboardResponse | null = null;
  userProfile: User | null = null;
  loading = true;
  profileLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      this.loadDashboardStats(currentUser.id);
      this.loadUserProfile();
    } else {
      this.error = 'Utilisateur non authentifié';
      this.loading = false;
      this.profileLoading = false;
    }
  }

  /**
   * Fetch the authenticated user's full profile.
   */
  private loadUserProfile(): void {
    this.profileLoading = true;
    this.authService.fetchMyProfile().subscribe({
      next: (profile) => {
        this.userProfile = profile;
        this.profileLoading = false;
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
        this.profileLoading = false;
      }
    });
  }

  private loadDashboardStats(userId: number): void {
    this.loading = true;
    this.dashboardService.getDashboardStats(userId).subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossible de charger les données du dashboard';
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

  get displayName(): string {
    if (this.userProfile) {
      return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
    }
    const user = this.authService.getCurrentUser();
    return user ? `${user.prenom} ${user.nom}` : '';
  }
}
