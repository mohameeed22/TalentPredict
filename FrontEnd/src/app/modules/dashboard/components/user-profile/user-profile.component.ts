import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ProfileCompletenessComponent } from '../../../../shared/components/profile-completeness/profile-completeness.component';
import { ProfileResponse } from '../../../auth/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ProfileCompletenessComponent],
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

  // File upload state
  photoFile: File | null = null;
  photoPreview: string | null = null;
  cvFile: File | null = null;
  cvFileName: string | null = null;

  profileForm!: FormGroup;
  private profileSubscription?: Subscription;

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      titreProfessionnel: [''],
      description: [''],
      experienceAns: [null],
      niveauEtudes: [''],
      lienLinkedin: [''],
      githubUrl: [''],
      portfolioUrl: ['']
    });

    setTimeout(() => {
      if (this.loading) {
        this.loading = false;
        this.error = 'Délai d\'attente dépassé. Vérifiez que le backend est démarré.';
        this.cdr.detectChanges();
      }
    }, 8000);

    this.loadProfile();
  }

  loadProfile(): void {
    this.loading = true;
    this.error = null;
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'Utilisateur non connecté.';
      this.loading = false;
      return;
    }

    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }

    const userId = user.id != null ? String(user.id).trim() : '';
    if (!userId) {
      this.error = 'Session invalide (identifiant manquant). Reconnectez-vous.';
      this.loading = false;
      return;
    }

    this.profileSubscription = this.authService.getProfile(userId).subscribe({
      next: (profile) => {
        try {
          this.profile = profile ?? ({} as ProfileResponse);
          this.patchForm(this.profile);
          this.loading = false;
          this.error = null;
          this.cdr.detectChanges();
        } catch {
          this.error = 'Erreur lors du traitement du profil.';
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        const msg = err?.error?.message ?? err?.error?.error ?? err?.message;
        this.error = msg && typeof msg === 'string' ? msg : 'Impossible de charger le profil. Vérifiez que le backend est démarré (port 8081).';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private patchForm(profile: ProfileResponse | any): void {
    if (!profile) profile = {};
    this.profileForm.patchValue({
      titreProfessionnel: profile.titreProfessionnel ?? '',
      description: profile.description ?? '',
      experienceAns: profile.experienceAns ?? null,
      niveauEtudes: profile.niveauEtudes ?? '',
      lienLinkedin: profile.lienLinkedin ?? '',
      githubUrl: profile.githubUrl ?? '',
      portfolioUrl: profile.portfolioUrl ?? ''
    });
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.notificationService.error('Seules les images sont acceptées (JPG, PNG, WebP…)');
      return;
    }
    this.photoFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.photoPreview = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  onCvSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      this.notificationService.error('Seuls les fichiers PDF sont acceptés pour le CV.');
      return;
    }
    this.cvFile = file;
    this.cvFileName = file.name;
    this.cdr.detectChanges();
  }

  getPhotoUrl(): string {
    if (this.photoPreview) return this.photoPreview;
    if (!this.profile?.urlPhoto) return '';
    return this.authService.getAssetUrl(this.profile.urlPhoto);
  }

  getCvUrl(): string {
    if (!this.profile?.cvUrl) return '';
    return this.authService.getAssetUrl(this.profile.cvUrl);
  }

  resetForm(): void {
    if (!this.profile) {
      return;
    }

    this.patchForm(this.profile);
    this.photoFile = null;
    this.photoPreview = null;
    this.cvFile = null;
    this.cvFileName = null;
    this.cdr.detectChanges();
  }

  saveProfile(): void {
    const user = this.authService.getCurrentUser();
    if (!user) return;
    this.saving = true;
    const userId = String(user.id).trim();

    this.authService.updateProfile(userId, this.profileForm.value).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.doFileUploads(userId);
      },
      error: (err) => {
        this.saving = false;
        this.notificationService.error(err?.error?.message || 'Erreur lors de la mise à jour du profil.');
        this.cdr.detectChanges();
      }
    });
  }

  private doFileUploads(userId: string): void {
    const uploadPhoto = (next: () => void) => {
      if (this.photoFile) {
        this.authService.uploadProfilePhoto(userId, this.photoFile).subscribe({
          next: (p) => { this.profile = p; this.photoFile = null; this.photoPreview = null; next(); },
          error: () => next()
        });
      } else {
        next();
      }
    };

    const uploadCv = (next: () => void) => {
      if (this.cvFile) {
        this.authService.uploadCv(userId, this.cvFile!).subscribe({
          next: (res) => {
            this.cvFile = null;
            this.cvFileName = null;
            this.notificationService.success(res.message || 'CV analysé avec succès !');
            next();
          },
          error: () => next()
        });
      } else {
        next();
      }
    };

    uploadPhoto(() => {
      uploadCv(() => {
        // Reload profile so hero card shows updated photo/CV URLs immediately
        this.authService.getProfile(userId).subscribe({
          next: (p) => {
            this.profile = p;
            this.patchForm(p);
            this.saving = false;
            this.notificationService.success('Profil mis à jour avec succès !');
            this.cdr.detectChanges();
          },
          error: () => {
            this.saving = false;
            this.notificationService.success('Profil mis à jour avec succès !');
            this.cdr.detectChanges();
          }
        });
      });
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

  goToCompetences(): void {
    this.router.navigate(['/skills/github']);
  }

  ngOnDestroy(): void {
    this.profileSubscription?.unsubscribe();
  }
}
