import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  FraudCalibrationResponse,
  FraudCaseReviewRequest,
  FraudKpiResponse,
  RecruiterApiService,
  RecruiterCandidateRow,
  TopFraudFlag
} from '../../services/recruiter-api.service';
import { catchError, forkJoin, of } from 'rxjs';

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
  reviewSavingByCase: Record<string, boolean> = {};
  reviewDecisionByCase: Record<string, FraudCaseReviewRequest['decision']> = {};
  reviewNoteByCase: Record<string, string> = {};

  kpis: FraudKpiResponse | null = null;
  calibration: FraudCalibrationResponse | null = null;

  ngOnInit(): void {
    this.loadAlerts();
  }

  loadAlerts(): void {
    this.loading = true;
    this.error = null;

    forkJoin({
      alerts: this.api.fraudAlerts(),
      kpis: this.api.fraudKpis().pipe(catchError(() => of(null))),
      calibration: this.api.fraudCalibration().pipe(catchError(() => of(null)))
    }).subscribe({
      next: ({ alerts, kpis, calibration }) => {
        this.rows = alerts;
        this.kpis = kpis;
        this.calibration = calibration;
        this.seedReviewState(alerts);
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

  getReviewClass(reviewStatus: string | null | undefined): string {
    const normalized = (reviewStatus ?? '').toUpperCase();
    if (normalized === 'CONFIRMED_FRAUD') return 'high';
    if (normalized === 'FALSE_POSITIVE') return 'low';
    if (normalized === 'MONITORING') return 'medium';
    return 'unknown';
  }

  formatPercent(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    return `${Math.round(value * 100)}%`;
  }

  formatFlagLabel(flag: TopFraudFlag): string {
    const type = (flag.type ?? 'signal').replace(/_/g, ' ');
    const severity = flag.severity ? ` (${flag.severity})` : '';
    return `${type}${severity}`;
  }

  onReviewDecisionChange(caseId: string, value: FraudCaseReviewRequest['decision']): void {
    this.reviewDecisionByCase[caseId] = value;
  }

  submitReview(row: RecruiterCandidateRow): void {
    const caseId = row.latestFraudCaseId;
    if (!caseId) {
      this.statusByUser[row.userId] = 'Aucun dossier fraude associe.';
      return;
    }

    const decision = this.reviewDecisionByCase[caseId] ?? this.defaultDecisionFromStatus(row.fraudReviewStatus);
    const note = this.reviewNoteByCase[caseId]?.trim();
    this.reviewSavingByCase[caseId] = true;

    this.api.reviewFraudCase(caseId, {
      decision,
      note: note || undefined
    }).subscribe({
      next: (res) => {
        this.reviewSavingByCase[caseId] = false;
        row.fraudReviewStatus = res.reviewStatus;
        this.statusByUser[row.userId] = `Decision enregistree: ${res.reviewStatus}`;
      },
      error: (err) => {
        this.reviewSavingByCase[caseId] = false;
        this.statusByUser[row.userId] = err?.error?.message || 'Echec de la mise a jour de la revue fraude.';
      }
    });
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
        this.loadAlerts();
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

  private seedReviewState(rows: RecruiterCandidateRow[]): void {
    for (const row of rows) {
      const caseId = row.latestFraudCaseId;
      if (!caseId || this.reviewDecisionByCase[caseId]) {
        continue;
      }
      this.reviewDecisionByCase[caseId] = this.defaultDecisionFromStatus(row.fraudReviewStatus);
    }
  }

  private defaultDecisionFromStatus(status: string | null | undefined): FraudCaseReviewRequest['decision'] {
    const normalized = (status ?? '').toUpperCase();
    if (normalized === 'CONFIRMED_FRAUD') return 'CONFIRMED_FRAUD';
    if (normalized === 'FALSE_POSITIVE') return 'FALSE_POSITIVE';
    if (normalized === 'OPEN') return 'OPEN';
    return 'MONITORING';
  }
}
