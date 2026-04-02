import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recruiter-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="shell">
      <nav>
        <a routerLink="/recruiter/candidates" routerLinkActive="active">Candidats</a>
        <a routerLink="/recruiter/fraud" routerLinkActive="active">Alertes fraude</a>
        <a routerLink="/recruiter/interview" routerLinkActive="active">Entretien</a>
      </nav>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [
    `
      .shell {
        max-width: 960px;
        margin: 0 auto;
        padding: 1rem;
      }
      nav {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      nav a {
        color: #2563eb;
      }
      nav a.active {
        font-weight: 700;
      }
    `
  ]
})
export class RecruiterShellComponent {}
