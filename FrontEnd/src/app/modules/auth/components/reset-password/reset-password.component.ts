import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

/**
 * TASK 3 — Reset Password Component
 * Route: /auth/reset-password?token=... — PUBLIC (no guard)
 */
@Component({
    selector: 'app-reset-password',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    template: `
<div class="auth-page">
  <div class="auth-card">
    <div class="auth-logo">
      <svg viewBox="0 0 32 32" width="40" height="40" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#grad3)"/>
        <path d="M10 22V12l6-4 6 4v10l-6 4-6-4z" stroke="white" stroke-width="2" fill="none"/>
        <circle cx="16" cy="16" r="3" fill="white"/>
        <defs><linearGradient id="grad3" x1="0" y1="0" x2="32" y2="32">
          <stop stop-color="#6366f1"/><stop offset="1" stop-color="#8b5cf6"/>
        </linearGradient></defs>
      </svg>
    </div>

    <h1>Nouveau mot de passe</h1>
    <p class="subtitle">Choisissez un nouveau mot de passe sécurisé (6 caractères min.).</p>

    @if (success()) {
      <div class="success-box">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p>Mot de passe mis à jour ! Redirection vers la connexion...</p>
      </div>
    } @else if (!token) {
      <div class="error-msg">Lien invalide ou expiré. <a routerLink="/auth/forgot-password">Refaire une demande</a>.</div>
    } @else {
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="newPassword">Nouveau mot de passe</label>
          <input
            id="newPassword"
            [type]="showPwd ? 'text' : 'password'"
            [(ngModel)]="newPassword"
            name="newPassword"
            placeholder="••••••••"
            required minlength="6"
            [disabled]="loading()"
          />
          <button type="button" class="toggle-pwd" (click)="showPwd = !showPwd">
            {{ showPwd ? 'Masquer' : 'Afficher' }}
          </button>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            [type]="showPwd ? 'text' : 'password'"
            [(ngModel)]="confirmPassword"
            name="confirmPassword"
            placeholder="••••••••"
            required
            [disabled]="loading()"
          />
        </div>

        @if (mismatch) {
          <div class="error-msg">Les mots de passe ne correspondent pas.</div>
        }

        @if (error()) {
          <div class="error-msg">{{ error() }}</div>
        }

        <button type="submit" class="btn-primary"
                [disabled]="loading() || !newPassword || !confirmPassword">
          @if (loading()) { <span class="spinner-inline"></span> }
          {{ loading() ? 'Mise à jour...' : '🔒 Mettre à jour' }}
        </button>
      </form>
    }

    <div class="auth-footer">
      <a routerLink="/auth/login">← Retour à la connexion</a>
    </div>
  </div>
</div>
  `,
    styles: [`
    .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg,#f0f4ff 0%,#faf5ff 100%); padding: 1rem; }
    .auth-card { background: white; border-radius: 1.5rem; padding: 2.5rem; width: 100%; max-width: 420px; box-shadow: 0 20px 60px rgba(99,102,241,.12); text-align: center; }
    .auth-logo { margin-bottom: 1.25rem; }
    h1 { font-size: 1.6rem; font-weight: 700; color: #111827; margin: 0 0 .5rem; }
    .subtitle { color: #6b7280; font-size: .9rem; margin-bottom: 1.5rem; }
    .form-group { text-align: left; margin-bottom: 1.25rem; position: relative; }
    .form-group label { display: block; font-size: .8rem; font-weight: 600; color: #374151; margin-bottom: .4rem; text-transform: uppercase; letter-spacing: .04em; }
    .form-group input { width: 100%; padding: .75rem 1rem; border: 1.5px solid #e5e7eb; border-radius: .75rem; font-size: .95rem; color: #111827; outline: none; transition: border-color .2s; box-sizing: border-box; }
    .form-group input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.12); }
    .toggle-pwd { position: absolute; right: .75rem; bottom: .75rem; background: none; border: none; color: #6366f1; font-size: .8rem; cursor: pointer; font-weight: 600; }
    .btn-primary { width: 100%; padding: .85rem; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: white; border: none; border-radius: .75rem; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: .5rem; transition: opacity .2s; }
    .btn-primary:hover:not(:disabled) { opacity: .9; }
    .btn-primary:disabled { opacity: .6; cursor: not-allowed; }
    .spinner-inline { width: 18px; height: 18px; border: 2px solid rgba(255,255,255,.4); border-top-color: white; border-radius: 50%; animation: spin .7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .error-msg { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: .5rem; padding: .75rem 1rem; font-size: .875rem; margin-bottom: 1rem; text-align: left; }
    .error-msg a { color: #6366f1; font-weight: 600; }
    .success-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: .75rem; padding: 1.25rem; display: flex; flex-direction: column; align-items: center; gap: .75rem; color: #166534; font-size: .95rem; }
    .auth-footer { margin-top: 1.5rem; font-size: .9rem; }
    .auth-footer a { color: #6366f1; text-decoration: none; font-weight: 600; }
    .auth-footer a:hover { text-decoration: underline; }
  `]
})
export class ResetPasswordComponent implements OnInit {
    private http = inject(HttpClient);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    token: string | null = null;
    newPassword = '';
    confirmPassword = '';
    showPwd = false;
    mismatch = false;

    loading = signal(false);
    success = signal(false);
    error = signal<string | null>(null);

    ngOnInit(): void {
        this.token = this.route.snapshot.queryParams['token'] || null;
    }

    onSubmit(): void {
        this.mismatch = false;
        this.error.set(null);

        if (this.newPassword !== this.confirmPassword) {
            this.mismatch = true;
            return;
        }
        if (this.newPassword.length < 6) {
            this.error.set('Le mot de passe doit comporter au moins 6 caractères.');
            return;
        }

        this.loading.set(true);
        this.http.post<{ message: string }>(
            `${environment.apiUrl}/auth/reset-password`,
            { token: this.token, newPassword: this.newPassword }
        ).subscribe({
            next: () => {
                this.loading.set(false);
                this.success.set(true);
                // Auto-redirect to login after 2 seconds
                setTimeout(() => this.router.navigateByUrl('/auth/login'), 2000);
            },
            error: (err) => {
                this.loading.set(false);
                this.error.set(err?.error?.message || 'Lien invalide ou expiré. Veuillez refaire une demande.');
            }
        });
    }
}
