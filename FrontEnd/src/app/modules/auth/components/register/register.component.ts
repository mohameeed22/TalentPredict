import { Component, inject, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

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

  /** TASK 1: Default role is USER (Employee) */
  selectedRole: string = 'USER';

  registerForm: FormGroup = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  loading = false;

  /** TASK 1: Select role card */
  selectRole(role: string): void {
    this.selectedRole = role;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      const formValue = {
        ...this.registerForm.value,
        role: this.selectedRole  // TASK 1: include selected role
      };
      this.authService.register(formValue).subscribe({
        next: (response) => {
          this.notificationService.success('Compte créé avec succès !');
          // TASK 1: Role-based redirect using backend's redirectUrl
          const redirectUrl = response.redirectUrl || this.authService.getRedirectUrl();
          this.router.navigateByUrl(redirectUrl).then(() => this.appRef.tick());
        },
        error: (error) => {
          if (error.status === 409) {
            this.notificationService.error('Un compte avec cet email existe déjà. Veuillez vous connecter.');
          } else if (error.status === 400) {
            this.notificationService.error('Données invalides. Vérifiez le formulaire.');
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
}
