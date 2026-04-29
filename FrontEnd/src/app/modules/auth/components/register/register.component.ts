import { Component, inject, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private appRef = inject(ApplicationRef);

  /** Password policy must match backend: 8+ chars with uppercase, lowercase, digit, special char */
  private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  registerForm: FormGroup = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.pattern(/^\+?[0-9]{7,15}$/)]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordPattern)
    ]]
  });

  loading = false;
  socialLoading = false;
  showPassword = false;

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      const formValue = {
        ...this.registerForm.value,
        role: 'USER'
      };
      this.authService.register(formValue).subscribe({
        next: (response) => {
          this.notificationService.success('Bienvenue ! Votre compte a été créé avec succès.');
          // Redirect using backend's URL or default to dashboard
          const redirectUrl = response.redirectUrl || '/dashboard';
          this.router.navigateByUrl(redirectUrl).then(() => this.appRef.tick());
        },
        error: (error) => {
          if (error.status === 409) {
            const msg = error.error?.message || 'Cet email ou numéro de téléphone est déjà utilisé.';
            this.notificationService.error(msg);
            return;
          } else if (error.status === 400) {
            const msg = error.error?.message || error.error?.error || 'Données invalides. Vérifiez le formulaire.';
            this.notificationService.error(msg);
          } else {
            const msg = error?.error?.message || 'Erreur lors de l\'inscription. Réessayez.';
            this.notificationService.error(msg);
          }
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
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
