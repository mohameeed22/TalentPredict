import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },

  // ── AUTH (public) ──────────────────────────────────────────────
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./modules/auth/components/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./modules/auth/components/register/register.component').then(m => m.RegisterComponent)
      },
      {
        // TASK 3 — Forgot password (public)
        path: 'forgot-password',
        loadComponent: () =>
          import('./modules/auth/components/forgot-password/forgot-password.component')
            .then(m => m.ForgotPasswordComponent)
      },
      {
        // TASK 3 — Reset password with ?token= (public)
        path: 'reset-password',
        loadComponent: () =>
          import('./modules/auth/components/reset-password/reset-password.component')
            .then(m => m.ResetPasswordComponent)
      }
    ]
  },

  // ── EMPLOYEE ROUTES ────────────────────────────────────────────
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/dashboard/components/user-dashboard/user-dashboard.component')
        .then(m => m.UserDashboardComponent)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/dashboard/components/user-profile/user-profile.component')
        .then(m => m.UserProfileComponent)
  },

  // ── ADMIN ROUTES (requires ADMIN role) ─────────────────────────
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard(['ADMIN'])],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/dashboard/components/admin-dashboard/admin-dashboard.component')
            .then(m => m.AdminDashboardComponent)
      },
      {
        // TASK 2 — Admin profile page
        path: 'profile',
        loadComponent: () =>
          import('./modules/dashboard/components/admin-profile/admin-profile.component')
            .then(m => m.AdminProfileComponent)
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./modules/admin/components/user-management/user-management.component')
            .then(m => m.UserManagementComponent)
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./modules/admin/components/reports/reports.component')
            .then(m => m.ReportsComponent)
      }
    ]
  },

  // ── EVALUATION ─────────────────────────────────────────────────
  {
    path: 'evaluation',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'intro', pathMatch: 'full' },
      {
        path: 'intro',
        loadComponent: () =>
          import('./modules/evaluation/components/pcm-intro/pcm-intro.component')
            .then(m => m.PcmIntroComponent)
      },
      {
        path: 'test',
        loadComponent: () =>
          import('./modules/evaluation/components/pcm-test/pcm-test.component')
            .then(m => m.PcmTestComponent)
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./modules/evaluation/components/test-results/test-results.component')
            .then(m => m.TestResultsComponent)
      },
      {
        path: 'results/:id',
        loadComponent: () =>
          import('./modules/evaluation/components/test-results/test-results.component')
            .then(m => m.TestResultsComponent)
      }
    ]
  },

  // ── SKILLS ─────────────────────────────────────────────────────
  {
    path: 'skills',
    canActivate: [authGuard],
    children: [
      {
        path: 'github',
        loadComponent: () =>
          import('./modules/skills/components/github-analyzer/github-analyzer.component')
            .then(m => m.GithubAnalyzerComponent)
      },

    ]
  },

  // ── FORMATIONS ─────────────────────────────────────────────────
  {
    path: 'formations',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/formation/components/formation-list/formation-list.component')
        .then(m => m.FormationListComponent)
  },

  // ── JIRA — ADMIN ONLY (Task 1) ─────────────────────────────────
  {
    path: 'jira',
    canActivate: [authGuard, roleGuard(['ADMIN'])],
    loadComponent: () =>
      import('./modules/jira/components/jira-tickets/jira-tickets.component')
        .then(m => m.JiraTicketsComponent)
  },

  // ── FALLBACK ───────────────────────────────────────────────────
  { path: '**', redirectTo: '/' }
];
