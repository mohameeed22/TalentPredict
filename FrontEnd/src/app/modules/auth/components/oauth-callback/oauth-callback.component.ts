import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="auth-page">
  <div class="auth-card">
    <div class="spinner" aria-label="Connexion en cours"></div>
    <p class="status">{{ status() }}</p>
  </div>
</div>
  `,
  styles: [`
    .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg,#f0f4ff 0%,#faf5ff 100%); padding: 1rem; }
    .auth-card { background: white; border-radius: 1.25rem; padding: 2rem 2.5rem; box-shadow: 0 20px 60px rgba(99,102,241,.12); text-align: center; }
    .spinner { width: 36px; height: 36px; border: 3px solid #e5e7eb; border-top-color: #6366f1; border-radius: 50%; margin: 0 auto 1rem; animation: spin .8s linear infinite; }
    .status { color: #374151; font-weight: 600; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class OauthCallbackComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
  private notification = inject(NotificationService);

  status = signal('Connexion via fournisseur...');

  ngOnInit(): void {
    const provider = (this.route.snapshot.paramMap.get('provider') || '').toLowerCase();
    const code = this.route.snapshot.queryParamMap.get('code');
    const providerError = this.route.snapshot.queryParamMap.get('error');
    const providerErrorDescription = this.route.snapshot.queryParamMap.get('error_description');

    if (providerError) {
      const detail = providerErrorDescription ? ` (${providerErrorDescription})` : '';
      this.notification.error(`Connexion sociale refusée: ${providerError}${detail}`);
      this.router.navigateByUrl('/auth/login');
      return;
    }

    if (!code || !provider) {
      this.notification.error('Code de connexion manquant ou fournisseur inconnu.');
      this.router.navigateByUrl('/auth/login');
      return;
    }

    const redirectUri = provider === 'google' || provider === 'github'
      ? this.authService.getOAuthRedirectUri(provider)
      : '';

    const request$ = provider === 'google'
      ? this.authService.loginWithGoogle(code, redirectUri)
      : provider === 'github'
        ? this.authService.loginWithGithub(code, redirectUri)
        : null;

    if (!request$) {
      this.notification.error('Fournisseur non supporté.');
      this.router.navigateByUrl('/auth/login');
      return;
    }

    request$.subscribe({
      next: (response) => {
        const redirectUrl = response.redirectUrl || this.authService.getRedirectUrl();
        this.status.set('Connexion réussie, redirection...');
        this.router.navigateByUrl(redirectUrl);
      },
      error: (err) => {
        const message = err?.error?.message || err?.error?.error || err?.message || 'Échec de la connexion sociale.';
        this.notification.error(message);
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
