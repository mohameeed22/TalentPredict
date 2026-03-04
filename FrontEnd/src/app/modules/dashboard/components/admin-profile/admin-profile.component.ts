import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { ProfileResponse, ProfileUpdateRequest } from '../../../auth/models/user.model';

/**
 * TASK 2 — Admin Profile Component
 * Reuses the same profile logic as UserProfileComponent but is scoped to /admin/profile
 */
@Component({
    selector: 'app-admin-profile',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
<div class="profile-page">

  <!-- Header -->
  <div class="profile-hero">
    <div class="hero-avatar">{{ initials }}</div>
    <div class="hero-info">
      <h1 class="hero-name">{{ currentUser?.prenom }} {{ currentUser?.nom }}</h1>
      <p class="hero-role-badge">🏢 RH / Manager</p>
      <p class="hero-email">{{ currentUser?.email }}</p>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Chargement du profil...</p>
    </div>
  }

  @if (error) {
    <div class="alert alert-error">{{ error }}</div>
  }

  @if (success) {
    <div class="alert alert-success">✅ Profil mis à jour avec succès !</div>
  }

  @if (profile && !loading) {
    <form class="profile-form" (ngSubmit)="onSave()" #profileForm="ngForm">
      <div class="form-section">
        <h2>Informations professionnelles</h2>
        <div class="form-grid">
          <div class="form-group">
            <label>Titre professionnel</label>
            <input type="text" [(ngModel)]="form.titreProfessionnel" name="titreProfessionnel"
                   placeholder="Ex: Directeur RH, Manager RH...">
          </div>
          <div class="form-group">
            <label>Années d'expérience</label>
            <input type="number" [(ngModel)]="form.experienceAns" name="experienceAns" min="0" max="60">
          </div>
          <div class="form-group">
            <label>Niveau d'études</label>
            <input type="text" [(ngModel)]="form.niveauEtudes" name="niveauEtudes"
                   placeholder="Ex: Master RH, MBA...">
          </div>
        </div>
        <div class="form-group full-width">
          <label>Description / Bio</label>
          <textarea [(ngModel)]="form.description" name="description" rows="4"
                    placeholder="Parlez de votre parcours RH..."></textarea>
        </div>
      </div>

      <div class="form-section">
        <h2>Liens & Réseaux</h2>
        <div class="form-grid">
          <div class="form-group">
            <label>LinkedIn</label>
            <input type="url" [(ngModel)]="form.lienLinkedin" name="lienLinkedin"
                   placeholder="https://linkedin.com/in/...">
          </div>
          <div class="form-group">
            <label>GitHub</label>
            <input type="url" [(ngModel)]="form.githubUrl" name="githubUrl"
                   placeholder="https://github.com/...">
          </div>
          <div class="form-group">
            <label>CV (URL)</label>
            <input type="url" [(ngModel)]="form.cvUrl" name="cvUrl"
                   placeholder="https://drive.google.com/...">
          </div>
          <div class="form-group">
            <label>Photo de profil (URL)</label>
            <input type="url" [(ngModel)]="form.urlPhoto" name="urlPhoto"
                   placeholder="https://...">
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save" [disabled]="saving">
          {{ saving ? 'Enregistrement...' : '💾 Enregistrer' }}
        </button>
      </div>
    </form>
  }

</div>
  `,
    styles: [`
    .profile-page { max-width: 860px; margin: 0 auto; padding: 2rem; }
    .profile-hero { display: flex; align-items: center; gap: 1.5rem; background: linear-gradient(135deg,#6366f1,#8b5cf6); border-radius: 1rem; padding: 2rem; color: white; margin-bottom: 2rem; }
    .hero-avatar { width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.25); display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; flex-shrink: 0; }
    .hero-name { font-size: 1.5rem; font-weight: 700; margin: 0; }
    .hero-role-badge { background: rgba(255,255,255,0.2); border-radius: 999px; padding: .25rem .75rem; font-size: .8rem; display: inline-block; margin: .25rem 0; }
    .hero-email { margin: 0; opacity: .85; font-size: .9rem; }
    .loading-state { display: flex; align-items: center; gap: 1rem; padding: 2rem; }
    .spinner { width: 28px; height: 28px; border: 3px solid #e5e7eb; border-top-color: #6366f1; border-radius: 50%; animation: spin .7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .alert { padding: 1rem 1.25rem; border-radius: .75rem; margin-bottom: 1.5rem; font-weight: 500; }
    .alert-error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
    .alert-success { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
    .profile-form { display: flex; flex-direction: column; gap: 1.5rem; }
    .form-section { background: white; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 1.5rem; }
    .form-section h2 { font-size: 1rem; font-weight: 700; color: #374151; margin: 0 0 1.25rem; padding-bottom: .75rem; border-bottom: 1px solid #f3f4f6; }
    .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: .4rem; }
    .form-group.full-width { grid-column: 1 / -1; }
    .form-group label { font-size: .8rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: .04em; }
    .form-group input, .form-group textarea { padding: .65rem .9rem; border: 1px solid #e5e7eb; border-radius: .5rem; font-size: .95rem; color: #111827; transition: border-color .2s; outline: none; font-family: inherit; resize: vertical; }
    .form-group input:focus, .form-group textarea:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.1); }
    .form-actions { display: flex; justify-content: flex-end; }
    .btn-save { background: linear-gradient(135deg,#6366f1,#8b5cf6); color: white; border: none; padding: .75rem 2rem; border-radius: .75rem; font-size: .95rem; font-weight: 600; cursor: pointer; transition: opacity .2s; }
    .btn-save:hover:not(:disabled) { opacity: .9; }
    .btn-save:disabled { opacity: .6; cursor: not-allowed; }
  `]
})
export class AdminProfileComponent implements OnInit {
    private authService = inject(AuthService);
    private notificationService = inject(NotificationService);

    currentUser = this.authService.getCurrentUser();
    profile: ProfileResponse | null = null;
    loading = false;
    saving = false;
    error: string | null = null;
    success = false;

    form: ProfileUpdateRequest = {
        titreProfessionnel: '',
        description: '',
        experienceAns: undefined,
        niveauEtudes: '',
        lienLinkedin: '',
        githubUrl: '',
        cvUrl: '',
        urlPhoto: ''
    };

    get initials(): string {
        const u = this.currentUser;
        return `${u?.prenom?.charAt(0) || ''}${u?.nom?.charAt(0) || ''}`.toUpperCase() || '?';
    }

    ngOnInit(): void {
        if (!this.currentUser?.id) return;
        this.loading = true;
        this.authService.getProfile(this.currentUser.id).subscribe({
            next: (p) => {
                this.profile = p;
                this.form = {
                    titreProfessionnel: p.titreProfessionnel || '',
                    description: p.description || '',
                    experienceAns: p.experienceAns ?? undefined,
                    niveauEtudes: p.niveauEtudes || '',
                    lienLinkedin: p.lienLinkedin || '',
                    githubUrl: p.githubUrl || '',
                    cvUrl: p.cvUrl || '',
                    urlPhoto: p.urlPhoto || ''
                };
                this.loading = false;
            },
            error: () => {
                // Profile might not exist yet — show empty form
                this.profile = {} as ProfileResponse;
                this.loading = false;
            }
        });
    }

    onSave(): void {
        if (!this.currentUser?.id || this.saving) return;
        this.saving = true;
        this.error = null;
        this.success = false;

        this.authService.updateProfile(this.currentUser.id, this.form).subscribe({
            next: (updated) => {
                this.profile = updated;
                this.saving = false;
                this.success = true;
                this.notificationService.success('Profil mis à jour !');
                setTimeout(() => this.success = false, 4000);
            },
            error: (err) => {
                this.saving = false;
                this.error = 'Erreur lors de la mise à jour du profil.';
                this.notificationService.error('Erreur lors de la mise à jour.');
            }
        });
    }
}
