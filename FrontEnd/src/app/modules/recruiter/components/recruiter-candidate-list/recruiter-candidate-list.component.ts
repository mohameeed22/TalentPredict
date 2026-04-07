import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterApiService, RecruiterCandidateRow } from '../../services/recruiter-api.service';

@Component({
  selector: 'app-recruiter-candidate-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-candidate-list.component.html',
  styleUrl: './recruiter-candidate-list.component.scss'
})
export class RecruiterCandidateListComponent implements OnInit {
  private api = inject(RecruiterApiService);
  rows: RecruiterCandidateRow[] = [];
  error: string | null = null;
  loading = false;
  search = '';
  riskFilter = 'ALL';
  runningByUser: Record<string, boolean> = {};
  statusByUser: Record<string, string> = {};

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.loading = true;
    this.error = null;

    this.api.listCandidates().subscribe({
      next: r => {
        this.rows = r;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Impossible de charger les candidats.';
      }
    });
  }

  get filteredRows(): RecruiterCandidateRow[] {
    const query = this.search.trim().toLowerCase();

    return this.rows.filter(row => {
      const values = [
        row.firstName,
        row.lastName,
        row.email,
        row.githubUsername ?? '',
        row.fraudRisk ?? ''
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !query || values.includes(query);
      const matchesRisk = this.riskFilter === 'ALL'
        || this.normalizeRisk(row.fraudRisk) === this.riskFilter;

      return matchesSearch && matchesRisk;
    });
  }

  get highRiskCount(): number {
    return this.rows.filter(row => this.normalizeRisk(row.fraudRisk) === 'HIGH').length;
  }

  get mediumRiskCount(): number {
    return this.rows.filter(row => this.normalizeRisk(row.fraudRisk) === 'MEDIUM').length;
  }

  getRiskClass(risk: string | null): string {
    return this.normalizeRisk(risk).toLowerCase();
  }

  runGithubDeep(row: RecruiterCandidateRow): void {
    const userId = row.userId;
    const githubUsername = row.githubUsername?.trim();
    if (!githubUsername) {
      this.statusByUser[userId] = 'Aucun username GitHub disponible sur le profil.';
      return;
    }

    this.runningByUser[userId] = true;
    this.statusByUser[userId] = 'Analyse GitHub avancée en cours...';

    this.api.githubDeep({
      github_username: githubUsername,
      candidate_id: userId
    }).subscribe({
      next: () => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = 'Analyse GitHub avancée terminée.';
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || 'Echec de l\'analyse GitHub avancée.';
      }
    });
  }

  runFraudCheck(row: RecruiterCandidateRow): void {
    const userId = row.userId;
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = 'Verification fraude en cours...';

    this.api.fraudCheck({
      candidate_id: userId
    }).subscribe({
      next: (res) => {
        this.runningByUser[userId] = false;
        const risk = this.pickString(res, ['risk_level', 'risk', 'fraud_risk']) || 'N/A';
        this.statusByUser[userId] = `Verification terminee. Risque: ${risk}`;
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || 'Echec de la verification fraude.';
      }
    });
  }

  private pickString(obj: Record<string, unknown>, keys: string[]): string | null {
    for (const key of keys) {
      const value = obj[key];
      if (typeof value === 'string' && value.trim()) {
        return value;
      }
    }
    return null;
  }

  private normalizeRisk(risk: string | null): 'HIGH' | 'MEDIUM' | 'LOW' | 'UNKNOWN' {
    const normalized = (risk ?? '').toLowerCase();
    if (!normalized) return 'UNKNOWN';
    if (normalized.includes('high') || normalized.includes('critical') || normalized.includes('critique') || normalized.includes('eleve') || normalized.includes('elev')) {
      return 'HIGH';
    }
    if (normalized.includes('medium') || normalized.includes('modere') || normalized.includes('moderate')) {
      return 'MEDIUM';
    }
    if (normalized.includes('low') || normalized.includes('faible')) {
      return 'LOW';
    }
    return 'UNKNOWN';
  }
}
