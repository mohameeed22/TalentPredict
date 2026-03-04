import { Component, inject, OnInit, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
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
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  loading = false;

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
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.notificationService.success('Connexion réussie !');
          // TASK 1: Role-based redirect using backend's redirectUrl
          const redirectUrl = response.redirectUrl || this.authService.getRedirectUrl();
          this.router.navigateByUrl(redirectUrl).then(() => this.appRef.tick());
        },
        error: (error: HttpErrorResponse) => {
          this.loading = false;
          if (error.status === 401) {
            this.notificationService.error('Email ou mot de passe incorrect.');
          } else if (error.status === 0) {
            this.notificationService.error('Impossible de contacter le serveur.');
          } else {
            this.notificationService.error(
              error.error?.message || 'Une erreur est survenue. Veuillez réessayer.'
            );
          }
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
}
