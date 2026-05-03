import { Component, OnInit, inject } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecruiterApiService } from '../../services/recruiter-api.service';

interface RecruiterTab {
  path: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-recruiter-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './recruiter-shell.component.html',
  styleUrl: './recruiter-shell.component.scss'
})
export class RecruiterShellComponent implements OnInit {
  private api = inject(RecruiterApiService);

  loadingOverview = true;
  totalCandidates = 0;
  flaggedCandidates = 0;
  highRiskCandidates = 0;
  
  averageScore = 0;
  githubVerifiedCount = 0;
  cvAnalyzedCount = 0;

  readonly tabs: RecruiterTab[] = [
    {
      path: '/recruiter/candidates',
      label: 'Candidats',
      description: 'Pipeline et actions IA'
    },
    {
      path: '/recruiter/fraud',
      label: 'Alertes fraude',
      description: 'Détection et vérification'
    }
  ];

  ngOnInit(): void {
    this.refreshOverview();
  }

  refreshOverview(): void {
    this.loadingOverview = true;

    forkJoin({
      candidates: this.api.listCandidates().pipe(catchError(() => of([]))),
      alerts: this.api.fraudAlerts().pipe(catchError(() => of([])))
    }).subscribe(({ candidates, alerts }) => {
      const candidateRows = Array.isArray(candidates) ? candidates : [];
      const alertRows = Array.isArray(alerts) ? alerts : [];

      this.totalCandidates = candidateRows.length;
      this.flaggedCandidates = alertRows.length;
      this.highRiskCandidates = alertRows.filter(row => this.isHighRisk(row.fraudRisk)).length;
      
      const scoredCandidates = candidateRows.filter(c => c.realScore !== null && c.realScore !== undefined);
      if (scoredCandidates.length > 0) {
        const sum = scoredCandidates.reduce((acc, c) => {
           const s = c.realScore!;
           return acc + (s <= 1 ? s * 100 : s);
        }, 0);
        this.averageScore = Math.round(sum / scoredCandidates.length);
      } else {
        this.averageScore = 0;
      }
      
      this.githubVerifiedCount = candidateRows.filter(c => !!c.githubUsername && c.githubUsername.trim() !== '' && c.githubUsername.toLowerCase() !== 'mohameeed22').length;
      this.cvAnalyzedCount = candidateRows.filter(c => !!c.fraudRisk || !!c.latestFraudCaseId).length;

      this.loadingOverview = false;
    });
  }

  private isHighRisk(risk: string | null): boolean {
    const normalized = (risk ?? '').toLowerCase();
    return normalized.includes('high')
      || normalized.includes('critical')
      || normalized.includes('critique')
      || normalized.includes('eleve')
      || normalized.includes('elev');
  }
}
