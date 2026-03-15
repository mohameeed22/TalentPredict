import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../modules/auth/services/auth.service';
import { NotificationService } from '../services/notification.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notificationService = inject(NotificationService);
  const appRef = inject(ApplicationRef);
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
      // Skip interceptor error handling for auth endpoints (login/register)
      const isAuthRequest = req.url.includes('/api/auth/');
      if (isAuthRequest) {
        return throwError(() => error);
      }

      switch (error.status) {
        case 401:
          // Only force logout if the token is genuinely valid (not expired client-side)
          // This prevents false logouts caused by race conditions or backend hiccups
          if (authService.isAuthenticated()) {
            authService.logout();
            notificationService.error('Session expirée. Veuillez vous reconnecter.');
            router.navigateByUrl('/auth/login').then(() => appRef.tick());
          }
          break;

        case 403:
          notificationService.error('Accès refusé. Vous n\'avez pas les permissions nécessaires.');
          router.navigateByUrl('/dashboard').then(() => appRef.tick());
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
