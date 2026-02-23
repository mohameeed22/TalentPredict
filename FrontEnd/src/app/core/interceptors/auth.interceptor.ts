import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../modules/auth/services/auth.service';
import { NotificationService } from '../services/notification.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notificationService = inject(NotificationService);
  const token = authService.getToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          // Token expired or invalid — force logout
          authService.logout();
          router.navigate(['/auth/login'], {
            queryParams: { returnUrl: router.url, reason: 'session_expired' }
          });
          notificationService.error('Session expirée. Veuillez vous reconnecter.');
          break;

        case 403:
          notificationService.error('Accès refusé. Vous n\'avez pas les permissions nécessaires.');
          router.navigate(['/dashboard']);
          break;

        case 404:
          notificationService.error('Ressource introuvable.');
          break;

        case 0:
          notificationService.error('Impossible de contacter le serveur. Vérifiez votre connexion.');
          break;

        case 500:
        case 502:
        case 503:
          notificationService.error('Erreur serveur. Veuillez réessayer plus tard.');
          break;
      }

      return throwError(() => error);
    })
  );
};
