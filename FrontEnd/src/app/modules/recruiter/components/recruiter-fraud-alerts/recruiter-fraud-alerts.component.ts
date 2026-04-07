import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterApiService, RecruiterCandidateRow } from '../../services/recruiter-api.service';

@Component({
  selector: 'app-recruiter-fraud-alerts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-fraud-alerts.component.html',
  styleUrl: './recruiter-fraud-alerts.component.scss'
})
export class RecruiterFraudAlertsComponent implements OnInit {
  private api = inject(RecruiterApiService);
  rows: RecruiterCandidateRow[] = [];
  loading = false;
  error: string | null = null;
  riskFilter = 'ALL';
  runningByUser: Record<string, boolean> = {};
  statusByUser: Record<string, string> = {};

  ngOnInit(): void {
    this.loadAlerts();
  }

  loadAlerts(): void {
    this.loading = true;
    this.error = null;

    this.api.fraudAlerts().subscribe({
      next: r => {
        this.rows = r;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Impossible de charger les alertes fraude.';
      }
    });
  }

  get filteredRows(): RecruiterCandidateRow[] {
    if (this.riskFilter === 'ALL') {
      return this.rows;
    }
    return this.rows.filter(row => this.normalizeRisk(row.fraudRisk) === this.riskFilter);
  }

  getRiskClass(risk: string | null): string {
    return this.normalizeRisk(risk).toLowerCase();
  }

  runFraudCheck(row: RecruiterCandidateRow): void {
    const userId = row.userId;
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = 'Verification fraude en cours...';

    this.api.fraudCheck({ candidate_id: userId }).subscribe({
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
