import { Component, inject, OnInit, ApplicationRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private notificationService = inject(NotificationService);
  private appRef = inject(ApplicationRef);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    twoFactorCode: ['']
  });

  loading = false;
  socialLoading = false;
  showPassword = false;
  requiresTwoFactor = false;

  ngOnInit(): void {
    // If already authenticated, redirect to appropriate dashboard
    if (this.authService.isAuthenticated()) {
      const url = this.authService.getRedirectUrl();
      this.router.navigateByUrl(url).then(() => this.appRef.tick());
      return;
    }

    // Show session expired message if redirected from interceptor
    const reason = this.route.snapshot.queryParams['reason'];
    if (reason === 'session_expired') {
      this.notificationService.warning('Votre session a expiré. Veuillez vous reconnecter.');
    }
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    if (this.requiresTwoFactor && this.loginForm.get('twoFactorCode')?.invalid) {
      this.notificationService.warning('Veuillez renseigner le code de vérification à 6 chiffres.');
      this.loginForm.get('twoFactorCode')?.markAsTouched();
      return;
    }

    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.requiresTwoFactor = false;
          this.disableTwoFactorField();
          this.notificationService.success('Connexion réussie !');
          // TASK 1: Role-based redirect using backend's redirectUrl
          const redirectUrl = response.redirectUrl || this.authService.getRedirectUrl();
          this.router.navigateByUrl(redirectUrl).then(() => this.appRef.tick());
        },
        error: (error: HttpErrorResponse) => {
          this.loading = false;
          const message = error.error?.message || error.error?.error || '';
          const normalizedMessage = String(message).toLowerCase();

          if (error.status === 428 || normalizedMessage.includes('2fa') || normalizedMessage.includes('verification code')) {
            this.requiresTwoFactor = true;
            this.enableTwoFactorField();
            this.notificationService.info(message || 'Un code de sécurité a été envoyé à votre adresse e-mail.');
            return;
          }

          if (error.status === 403 && normalizedMessage.includes('verify your email')) {
            this.notificationService.warning('Veuillez vérifier votre e-mail avant de vous connecter.');
            this.router.navigate(['/auth/verify-email'], {
              queryParams: {
                email: this.loginForm.get('email')?.value || ''
              }
            }).then(() => this.appRef.tick());
            return;
          }

          if (error.status === 401) {
            this.notificationService.error('Email ou mot de passe incorrect.');
          } else if (error.status === 0) {
            this.notificationService.error('Impossible de contacter le serveur.');
          } else {
            this.notificationService.error(
              message || 'Une erreur est survenue. Veuillez réessayer.'
            );
          }
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }

  private enableTwoFactorField(): void {
    const control = this.loginForm.get('twoFactorCode');
    if (!control) return;

    control.setValidators([Validators.required, Validators.pattern(/^\d{6}$/)]);
    control.updateValueAndValidity();
  }

  private disableTwoFactorField(): void {
    const control = this.loginForm.get('twoFactorCode');
    if (!control) return;

    control.clearValidators();
    control.setValue('');
    control.updateValueAndValidity();
  }

  startGoogle(): void {
    this.socialLoading = true;
    if (!environment.googleClientId) {
      this.notificationService.error('ID client Google manquant.');
      this.socialLoading = false;
      return;
    }
    const redirectUri = this.authService.getOAuthRedirectUri('google');
    const params = new URLSearchParams({
      client_id: environment.googleClientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid profile email',
      access_type: 'online',
      prompt: 'consent'
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  startGithub(): void {
    this.socialLoading = true;
    if (!environment.githubClientId) {
      this.notificationService.error('ID client GitHub manquant.');
      this.socialLoading = false;
      return;
    }
    const redirectUri = this.authService.getOAuthRedirectUri('github');
    const params = new URLSearchParams({
      client_id: environment.githubClientId,
      redirect_uri: redirectUri,
      scope: 'read:user user:email'
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  }
}
