import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ProfileResponse } from '../../../auth/models/user.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  profile: ProfileResponse | null = null;
  loading = true;
  saving = false;
  error: string | null = null;

  profileForm!: FormGroup;

  ngOnInit(): void {
    // TASK 3: Full editable profile form with all fields
    this.profileForm = this.fb.group({
      titreProfessionnel: [''],
      description: [''],
      urlPhoto: [''],
      experienceAns: [null],
      niveauEtudes: [''],
      lienLinkedin: [''],
      githubUrl: [''],
      cvUrl: ['']
    });

    this.loadProfile();
  }

  private loadProfile(): void {
    this.loading = true;
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'Utilisateur non connecté.';
      this.loading = false;
      return;
    }

    // TASK 3: Use GET /api/profiles/accounts/{accountId}
    this.authService.getProfile(user.id as string).subscribe({
      next: (profile) => {
        this.profile = profile;
        this.patchForm(profile);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossible de charger le profil.';
        this.loading = false;
        console.error('Error loading profile:', err);
      }
    });
  }

  private patchForm(profile: ProfileResponse): void {
    this.profileForm.patchValue({
      titreProfessionnel: profile.titreProfessionnel || '',
      description: profile.description || '',
      urlPhoto: profile.urlPhoto || '',
      experienceAns: profile.experienceAns || null,
      niveauEtudes: profile.niveauEtudes || '',
      lienLinkedin: profile.lienLinkedin || '',
      githubUrl: profile.githubUrl || '',
      cvUrl: profile.cvUrl || ''
    });
  }

  saveProfile(): void {
    const user = this.authService.getCurrentUser();
    if (!user) return;

    this.saving = true;
    const formValue = this.profileForm.value;

    // TASK 3: Use PUT /api/profiles/accounts/{accountId}
    this.authService.updateProfile(user.id as string, formValue).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.saving = false;
        this.notificationService.success('Profil mis à jour avec succès ! ✅');
      },
      error: (err) => {
        this.saving = false;
        this.notificationService.error(
          err.error?.message || 'Erreur lors de la mise à jour du profil.'
        );
      }
    });
  }

  get initials(): string {
    const user = this.authService.getCurrentUser();
    if (!user) return '?';
    return `${user.prenom?.charAt(0) || ''}${user.nom?.charAt(0) || ''}`.toUpperCase();
  }

  goBack(): void {
    this.router.navigate([this.authService.isAdmin() ? '/admin/dashboard' : '/dashboard']);
  }
}
