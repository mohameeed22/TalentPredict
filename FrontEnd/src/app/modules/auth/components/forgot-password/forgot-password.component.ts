import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * TASK 3 — Forgot Password Component
 * Route: /auth/forgot-password — PUBLIC (no guard)
 */
@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    template: `
<div class="auth-page">
  <div class="auth-card">
    <div class="auth-logo">
      <svg viewBox="0 0 32 32" width="40" height="40" fill="none">
        <rect width="32" height="32" rx="8" fill="url(#grad2)"/>
        <path d="M10 22V12l6-4 6 4v10l-6 4-6-4z" stroke="white" stroke-width="2" fill="none"/>
        <circle cx="16" cy="16" r="3" fill="white"/>
        <defs><linearGradient id="grad2" x1="0" y1="0" x2="32" y2="32">
          <stop stop-color="#6366f1"/><stop offset="1" stop-color="#8b5cf6"/>
        </linearGradient></defs>
      </svg>
    </div>

    <h1>Mot de passe oublié</h1>
    <p class="subtitle">Choisissez Email ou SMS pour recevoir le lien de réinitialisation.</p>

    @if (sent()) {
      <div class="success-box">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p>{{ message() }}</p>
      </div>
    } @else {
      <form (ngSubmit)="onSubmit()">
        <div class="channel-toggle">
          <button type="button" [class.active]="channel === 'EMAIL'" (click)="channel = 'EMAIL'">Email</button>
          <button type="button" [class.active]="channel === 'SMS'" (click)="channel = 'SMS'">SMS</button>
        </div>

        @if (channel === 'EMAIL') {
          <div class="form-group">
            <label for="email">Adresse e-mail</label>
            <input
              id="email"
              type="email"
              [(ngModel)]="email"
              name="email"
              placeholder="votre@email.com"
              required
              [disabled]="loading()"
            />
          </div>
        }

        @if (channel === 'SMS') {
          <div class="form-group">
            <label for="phone">Téléphone (E.164)</label>
            <input
              id="phone"
              type="tel"
              [(ngModel)]="phoneNumber"
              name="phoneNumber"
              placeholder="+33612345678"
              required
              [disabled]="loading()"
            />
          </div>
        }

        @if (error()) {
          <div class="error-msg">{{ error() }}</div>
        }

        <button type="submit" class="btn-primary"
                [disabled]="loading() || (channel === 'EMAIL' && !email) || (channel === 'SMS' && !phoneNumber)">
          @if (loading()) { <span class="spinner-inline"></span> }
          {{ loading() ? 'Envoi en cours...' : 'Envoyer le lien' }}
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
    .subtitle { color: #6b7280; font-size: .9rem; line-height: 1.6; margin-bottom: 1.5rem; }
    .form-group { text-align: left; margin-bottom: 1.25rem; }
    .form-group label { display: block; font-size: .8rem; font-weight: 600; color: #374151; margin-bottom: .4rem; text-transform: uppercase; letter-spacing: .04em; }
    .form-group input { width: 100%; padding: .75rem 1rem; border: 1.5px solid #e5e7eb; border-radius: .75rem; font-size: .95rem; color: #111827; outline: none; transition: border-color .2s, box-shadow .2s; box-sizing: border-box; }
    .form-group input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.12); }
    .btn-primary { width: 100%; padding: .85rem; background: linear-gradient(135deg,#6366f1,#8b5cf6); color: white; border: none; border-radius: .75rem; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: .5rem; transition: opacity .2s; }
    .btn-primary:hover:not(:disabled) { opacity: .9; }
    .btn-primary:disabled { opacity: .6; cursor: not-allowed; }
    .spinner-inline { width: 18px; height: 18px; border: 2px solid rgba(255,255,255,.4); border-top-color: white; border-radius: 50%; animation: spin .7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .error-msg { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: .5rem; padding: .75rem 1rem; font-size: .875rem; margin-bottom: 1rem; text-align: left; }
    .success-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: .75rem; padding: 1.25rem; display: flex; flex-direction: column; align-items: center; gap: .75rem; color: #166534; font-size: .95rem; line-height: 1.6; }
    .channel-toggle { display: grid; grid-template-columns: repeat(2,1fr); gap: .5rem; margin-bottom: 1rem; }
    .channel-toggle button { border: 1.5px solid #e5e7eb; background: #f9fafb; padding: .6rem; border-radius: .75rem; font-weight: 600; color: #374151; cursor: pointer; }
    .channel-toggle button.active { border-color: #6366f1; color: #111827; box-shadow: 0 0 0 3px rgba(99,102,241,.12); }
    .auth-footer { margin-top: 1.5rem; font-size: .9rem; }
    .auth-footer a { color: #6366f1; text-decoration: none; font-weight: 600; }
    .auth-footer a:hover { text-decoration: underline; }
  `]
})
export class ForgotPasswordComponent {
  private auth = inject(AuthService);

  channel: 'EMAIL' | 'SMS' = 'EMAIL';
  email = '';
  phoneNumber = '';
  loading = signal(false);
  sent = signal(false);
  error = signal<string | null>(null);
  message = signal('');

  onSubmit(): void {
    this.error.set(null);
    if (this.channel === 'EMAIL' && !this.email) return;
    if (this.channel === 'SMS' && !this.phoneNumber) return;

    this.loading.set(true);
    const request$ = this.channel === 'SMS'
      ? this.auth.requestPasswordResetSms(this.phoneNumber)
      : this.auth.requestPasswordResetEmail(this.email);

    request$.subscribe({
      next: (res) => {
        this.loading.set(false);
        this.sent.set(true);
        this.message.set(res.message || 'Si votre compte est enregistré, vous recevrez un lien.');
      },
      error: () => {
        this.loading.set(false);
        this.sent.set(true);
        this.message.set('Si votre compte est enregistré, vous recevrez un lien de réinitialisation.');
      }
    });
  }
}
