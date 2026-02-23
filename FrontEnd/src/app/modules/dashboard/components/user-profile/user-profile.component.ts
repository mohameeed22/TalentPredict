import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../../../core/services/user.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { User } from '../../../auth/models/user.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private notificationService = inject(NotificationService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  user: User | null = null;
  loading = true;
  saving = false;
  editing = false;
  error: string | null = null;

  profileForm!: FormGroup;

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [{ value: '', disabled: true }],
      department: [''],
      position: [''],
      profilePictureUrl: ['']
    });

    this.loadProfile();
  }

  private loadProfile(): void {
    this.loading = true;
    this.authService.fetchMyProfile().subscribe({
      next: (user) => {
        this.user = user;
        this.patchForm(user);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossible de charger le profil.';
        this.loading = false;
        console.error('Error loading profile:', err);
      }
    });
  }

  private patchForm(user: User): void {
    this.profileForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      department: user.department || '',
      position: user.position || '',
      profilePictureUrl: user.profilePictureUrl || ''
    });
  }

  toggleEdit(): void {
    this.editing = !this.editing;
    if (!this.editing && this.user) {
      this.patchForm(this.user);
    }
  }

  saveProfile(): void {
    if (!this.user || this.profileForm.invalid) return;

    this.saving = true;
    const formValue = this.profileForm.getRawValue();

    this.userService.update(this.user.id, {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      department: formValue.department,
      position: formValue.position,
      profilePictureUrl: formValue.profilePictureUrl,
      username: this.user.username,
      email: this.user.email
    }).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.editing = false;
        this.saving = false;
        this.notificationService.success('Profil mis à jour avec succès.');
      },
      error: (err) => {
        this.saving = false;
        this.notificationService.error(
          err.error?.message || 'Erreur lors de la mise à jour du profil.'
        );
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
