import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './recruiter-shell.component.html',
  styleUrl: './recruiter-shell.component.scss'
})
export class RecruiterShellComponent implements OnInit {
  private api = inject(RecruiterApiService);

  loadingOverview = true;
  totalCandidates = 0;
  flaggedCandidates = 0;
  highRiskCandidates = 0;

  readonly tabs: RecruiterTab[] = [
    {
      path: '/recruiter/candidates',
      label: 'Candidats',
      description: 'Pipeline et actions IA'
    },
    {
      path: '/recruiter/fraud',
      label: 'Alertes fraude',
      description: 'Detection et verification'
    },
    {
      path: '/recruiter/interview',
      label: 'Entretien',
      description: 'Questions ciblees'
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
