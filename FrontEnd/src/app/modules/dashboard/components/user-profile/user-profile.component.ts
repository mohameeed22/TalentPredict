import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ProfileResponse } from '../../../auth/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  profile: ProfileResponse | null = null;
  loading = true;
  saving = false;
  error: string | null = null;

  profileForm!: FormGroup;
  private profileSubscription?: Subscription;

  ngOnInit(): void {
    console.log('[PROFILE DEBUG] ===== COMPONENT INITIALIZED =====');
    
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

    console.log('[PROFILE DEBUG] Form initialized:', this.profileForm);

    // Failsafe: force loading=false after 5 seconds
    setTimeout(() => {
      if (this.loading) {
        console.error('[PROFILE TIMEOUT] Loading still true after 5 seconds, forcing false');
        this.loading = false;
        this.error = 'Délai d\'attente dépassé. Veuillez réessayer.';          this.cdr.detectChanges();      }
    }, 5000);

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

    console.log('[PROFILE DEBUG] Loading profile for user:', user.id);

    // Cleanup previous subscription if any
    if (this.profileSubscription) {
      console.log('[PROFILE DEBUG] Cancelling previous subscription');
      this.profileSubscription.unsubscribe();
    }

    // TASK 3: Use GET /api/profiles/users/{userId}
    this.profileSubscription = this.authService.getProfile(user.id as string).subscribe({
      next: (profile) => {
        try {
          console.log('[PROFILE DEBUG] Received profile:', profile);
          const safeProfile = profile ?? {} as ProfileResponse;
          this.profile = safeProfile;
          console.log('[PROFILE DEBUG] Patching form with:', safeProfile);
          this.patchForm(safeProfile);
          console.log('[PROFILE DEBUG] Form patched successfully');
          this.loading = false;
          console.log('[PROFILE DEBUG] Loading set to false');            this.cdr.detectChanges();
            console.log('[PROFILE DEBUG] Change detection triggered');        } catch (e) {
          console.error('[PROFILE ERROR] Error in next handler:', e);
          this.error = 'Erreur lors du traitement du profil.';
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('[PROFILE ERROR] HTTP error:', err);
        this.error = 'Impossible de charger le profil.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private patchForm(profile: ProfileResponse | any): void {
    console.log('[PROFILE DEBUG] patchForm called with:', profile);
    
    if (!profile) {
      console.warn('[PROFILE DEBUG] Profile is null/undefined, using empty values');
      profile = {};
    }

    try {
      this.profileForm.patchValue({
        titreProfessionnel: profile.titreProfessionnel ?? '',
        description: profile.description ?? '',
        urlPhoto: profile.urlPhoto ?? '',
        experienceAns: profile.experienceAns ?? null,
        niveauEtudes: profile.niveauEtudes ?? '',
        lienLinkedin: profile.lienLinkedin ?? '',
        githubUrl: profile.githubUrl ?? '',
        cvUrl: profile.cvUrl ?? ''
      });
      console.log('[PROFILE DEBUG] Form patched successfully, values:', this.profileForm.value);
    } catch (e) {
      console.error('[PROFILE DEBUG] Error patching form:', e);
      throw e; // Re-throw to be caught by loadProfile
    }
  }

  saveProfile(): void {
    const user = this.authService.getCurrentUser();
    if (!user) return;

    this.saving = true;
    const formValue = this.profileForm.value;

    // TASK 3: Use PUT /api/profiles/users/{userId}
    this.authService.updateProfile(user.id as string, formValue).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.saving = false;
        this.cdr.detectChanges();
        this.notificationService.success('Profil mis à jour avec succès ! ✅');
      },
      error: (err) => {
        this.saving = false;
        this.cdr.detectChanges();
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

  ngOnDestroy(): void {
    console.log('[PROFILE DEBUG] Component destroyed, cleaning up subscriptions');
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
}
