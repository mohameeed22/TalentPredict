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
  {
    path: 'auth',
    children: [
      { path: 'login', loadComponent: () => import('./modules/auth/components/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./modules/auth/components/register/register.component').then(m => m.RegisterComponent) },
      { path: 'forgot-password', loadComponent: () => import('./modules/auth/components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
      { path: 'reset-password', loadComponent: () => import('./modules/auth/components/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) }
    ]
  },
  { path: 'dashboard', canActivate: [authGuard], loadComponent: () => import('./modules/dashboard/components/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent) },
  { path: 'profile', canActivate: [authGuard], loadComponent: () => import('./modules/dashboard/components/user-profile/user-profile.component').then(m => m.UserProfileComponent) },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard(['ADMIN'])],
    children: [
      { path: 'dashboard', loadComponent: () => import('./modules/dashboard/components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
      { path: 'profile', loadComponent: () => import('./modules/dashboard/components/admin-profile/admin-profile.component').then(m => m.AdminProfileComponent) },
      { path: 'users', loadComponent: () => import('./modules/admin/components/user-management/user-management.component').then(m => m.UserManagementComponent) },
      { path: 'reports', loadComponent: () => import('./modules/admin/components/reports/reports.component').then(m => m.ReportsComponent) }
    ]
  },
  {
    path: 'evaluation',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'intro', pathMatch: 'full' },
      { path: 'intro', loadComponent: () => import('./modules/evaluation/components/pcm-intro/pcm-intro.component').then(m => m.PcmIntroComponent) },
      { path: 'test', loadComponent: () => import('./modules/evaluation/components/pcm-test/pcm-test.component').then(m => m.PcmTestComponent) },
      { path: 'results', loadComponent: () => import('./modules/evaluation/components/test-results/test-results.component').then(m => m.TestResultsComponent) },
      { path: 'results/:id', loadComponent: () => import('./modules/evaluation/components/test-results/test-results.component').then(m => m.TestResultsComponent) },
      { path: 'soft-skills', loadComponent: () => import('./modules/evaluation/components/soft-skills-test/soft-skills-test.component').then(m => m.SoftSkillsTestComponent) },
      { path: 'soft-skills-results', loadComponent: () => import('./modules/evaluation/components/soft-skills-results/soft-skills-results.component').then(m => m.SoftSkillsResultsComponent) }
    ]
  },
  {
    path: 'skills',
    canActivate: [authGuard],
    children: [
      { path: 'github', loadComponent: () => import('./modules/skills/components/github-analyzer/github-analyzer.component').then(m => m.GithubAnalyzerComponent) }
    ]
  },
  {
    path: 'skill-test',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/skill-test/components/skill-test-launcher/skill-test-launcher.component').then(
            m => m.SkillTestLauncherComponent
          )
      },
      {
        path: 'quiz',
        loadComponent: () =>
          import('./modules/skill-test/components/skill-test-quiz/skill-test-quiz.component').then(
            m => m.SkillTestQuizComponent
          )
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./modules/skill-test/components/skill-progress/skill-progress.component').then(
            m => m.SkillProgressComponent
          )
      },
      {
        path: 'code-challenge',
        loadComponent: () =>
          import('./modules/skill-test/components/skill-code-challenge/skill-code-challenge.component').then(
            m => m.SkillCodeChallengeComponent
          )
      }
    ]
  },
  {
    path: 'career',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./modules/career/components/career-hub/career-hub.component').then(
        m => m.CareerHubComponent
      )
  },
  {
    path: 'recruiter',
    canActivate: [authGuard, roleGuard(['RECRUITER', 'ADMIN'])],
    loadComponent: () =>
      import('./modules/recruiter/components/recruiter-shell/recruiter-shell.component').then(
        m => m.RecruiterShellComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'candidates'
      },
      {
        path: 'candidates',
        loadComponent: () =>
          import(
            './modules/recruiter/components/recruiter-candidate-list/recruiter-candidate-list.component'
          ).then(m => m.RecruiterCandidateListComponent)
      },
      {
        path: 'fraud',
        loadComponent: () =>
          import(
            './modules/recruiter/components/recruiter-fraud-alerts/recruiter-fraud-alerts.component'
          ).then(m => m.RecruiterFraudAlertsComponent)
      },
      {
        path: 'interview',
        loadComponent: () =>
          import(
            './modules/recruiter/components/recruiter-interview/recruiter-interview.component'
          ).then(m => m.RecruiterInterviewComponent)
      }
    ]
  },
  { path: 'formations', canActivate: [authGuard], loadComponent: () => import('./modules/formation/components/formation-list/formation-list.component').then(m => m.FormationListComponent) },
  { path: 'jira', canActivate: [authGuard, roleGuard(['ADMIN'])], loadComponent: () => import('./modules/jira/components/jira-tickets/jira-tickets.component').then(m => m.JiraTicketsComponent) },
  { path: '**', redirectTo: '/' }
];
