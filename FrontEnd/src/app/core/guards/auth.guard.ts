import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';

/**
 * Protects routes from unauthenticated access.
 * Checks for a valid (non-expired) JWT token.
 * Redirects to /auth/login with returnUrl on failure.
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Clear any stale session data
  authService.logout();

  // Redirect to login with return url
  router.navigate(['/auth/login'], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};
