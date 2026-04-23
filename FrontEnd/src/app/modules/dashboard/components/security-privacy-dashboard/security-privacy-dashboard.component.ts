import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import {
  PrivacySettingsResponse,
  SecurityDashboardResponse,
  SecurityPrivacyService
} from '../../../../core/services/security-privacy.service';

@Component({
  selector: 'app-security-privacy-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './security-privacy-dashboard.component.html',
  styleUrl: './security-privacy-dashboard.component.scss'
})
export class SecurityPrivacyDashboardComponent implements OnInit {
  private service = inject(SecurityPrivacyService);
  private notificationService = inject(NotificationService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loading = true;
  processing = false;
  pendingTwoFactorAction: 'ENABLE' | 'DISABLE' | null = null;

  dashboard: SecurityDashboardResponse | null = null;
  privacySettings: PrivacySettingsResponse | null = null;

  privacyForm = this.fb.nonNullable.group({
    marketingEmailsConsent: false,
    analyticsConsent: true,
    profileVisibilityConsent: true,
    dataProcessingConsent: true,
    dataRetentionDays: [365, [Validators.required, Validators.min(30), Validators.max(3650)]],
    consentVersion: 'v1'
  });

  twoFactorForm = this.fb.nonNullable.group({
    code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  deleteForm = this.fb.nonNullable.group({
    confirmPhrase: ['', Validators.required]
  });

  ngOnInit(): void {
    this.loadAll();
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }

  loadAll(): void {
    this.loading = true;

    forkJoin({
      dashboard: this.service.getSecurityDashboard(),
      privacy: this.service.getPrivacySettings()
    }).subscribe({
      next: ({ dashboard, privacy }) => {
        this.dashboard = dashboard;
        this.privacySettings = privacy;
        this.patchPrivacyForm(privacy);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible de charger les paramètres de sécurité.');
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  requestTwoFactorCode(action: 'ENABLE' | 'DISABLE'): void {
    this.processing = true;
    this.service.sendTwoFactorCode(action).subscribe({
      next: (response) => {
        this.pendingTwoFactorAction = action;
        this.twoFactorForm.reset();
        this.notificationService.info(response.message || 'Code de vérification envoyé.');
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible d\'envoyer le code de vérification.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  submitTwoFactorAction(): void {
    if (!this.pendingTwoFactorAction || this.twoFactorForm.invalid) {
      this.twoFactorForm.markAllAsTouched();
      return;
    }

    const code = this.twoFactorForm.get('code')?.value || '';
    const request$ = this.pendingTwoFactorAction === 'ENABLE'
      ? this.service.enableTwoFactor(code)
      : this.service.disableTwoFactor(code);

    this.processing = true;
    request$.subscribe({
      next: (response) => {
        this.notificationService.success(response.message || 'Paramètre 2FA mis à jour.');
        this.pendingTwoFactorAction = null;
        this.twoFactorForm.reset();
        this.reloadDashboard();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Code invalide ou expiré.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  revokeSession(sessionId: string): void {
    this.processing = true;
    this.service.revokeSession(sessionId).subscribe({
      next: (response) => {
        this.notificationService.success(response.message || 'Session révoquée.');
        this.reloadDashboard();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible de révoquer cette session.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  revokeAllSessions(): void {
    this.processing = true;
    this.service.revokeAllSessions().subscribe({
      next: (response) => {
        this.notificationService.success(response.message || 'Toutes les sessions ont été révoquées.');
        this.reloadDashboard();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible de révoquer les sessions.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  resendVerificationEmail(): void {
    const email = this.authService.getCurrentUser()?.email;
    if (!email) {
      this.notificationService.error('Adresse e-mail introuvable.');
      return;
    }

    this.processing = true;
    this.authService.resendVerificationEmail(email).subscribe({
      next: (response) => {
        this.notificationService.info(response.message || 'Lien de vérification renvoyé.');
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible de renvoyer le lien de vérification.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  savePrivacySettings(): void {
    if (this.privacyForm.invalid) {
      this.privacyForm.markAllAsTouched();
      return;
    }

    this.processing = true;
    this.service.updatePrivacySettings(this.privacyForm.getRawValue()).subscribe({
      next: (response) => {
        this.privacySettings = response;
        this.patchPrivacyForm(response);
        this.notificationService.success('Paramètres de confidentialité sauvegardés.');
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible de sauvegarder les paramètres.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  exportData(): void {
    this.processing = true;
    this.service.exportDataDownload().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'talentpredict-my-data.json';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        this.notificationService.success('Export de données téléchargé.');
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible d\'exporter les données.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  applyRetention(): void {
    this.processing = true;
    this.service.applyRetention().subscribe({
      next: (response) => {
        this.notificationService.info(response.message);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible d\'appliquer la rétention.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  requestDeletion(): void {
    this.processing = true;
    this.service.requestDeletion().subscribe({
      next: (response) => {
        this.notificationService.warning(response.message || 'Demande de suppression enregistrée.');
        this.loadAll();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible d\'enregistrer la demande de suppression.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  deleteAccount(): void {
    if (this.deleteForm.invalid) {
      this.deleteForm.markAllAsTouched();
      return;
    }

    this.processing = true;
    const phrase = this.deleteForm.get('confirmPhrase')?.value || '';
    this.service.deleteAccount(phrase).subscribe({
      next: (response) => {
        this.notificationService.warning(response.message || 'Compte anonymisé.');
        this.authService.clearSession();
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Suppression impossible. Vérifiez la phrase de confirmation.');
      },
      complete: () => {
        this.processing = false;
      }
    });
  }

  formatDate(value: string | null | undefined): string {
    if (!value) return '-';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '-';
    }

    return date.toLocaleString('fr-FR');
  }

  private reloadDashboard(): void {
    this.service.getSecurityDashboard().subscribe({
      next: dashboard => {
        this.dashboard = dashboard;
      }
    });
  }

  private patchPrivacyForm(settings: PrivacySettingsResponse): void {
    this.privacyForm.patchValue({
      marketingEmailsConsent: settings.marketingEmailsConsent,
      analyticsConsent: settings.analyticsConsent,
      profileVisibilityConsent: settings.profileVisibilityConsent,
      dataProcessingConsent: settings.dataProcessingConsent,
      dataRetentionDays: settings.dataRetentionDays,
      consentVersion: settings.consentVersion
    });
  }
}
