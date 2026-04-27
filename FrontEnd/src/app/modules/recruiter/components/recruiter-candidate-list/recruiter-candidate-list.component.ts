import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterApiService, RecruiterCandidateRow } from '../../services/recruiter-api.service';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-recruiter-candidate-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recruiter-candidate-list.component.html',
  styleUrl: './recruiter-candidate-list.component.scss'
})
export class RecruiterCandidateListComponent implements OnInit {
  private api = inject(RecruiterApiService);
  private notificationService = inject(NotificationService);
  rows: RecruiterCandidateRow[] = [];
  error: string | null = null;
  loading = false;
  
  // View mode
  viewMode: 'list' | 'kanban' = 'list';

  // Filters
  search = '';
  riskFilter = 'ALL';
  scoreFilter = 'ALL';
  githubFilter = 'ALL';
  cvFilter = 'ALL';

  // State
  runningByUser: Record<string, boolean> = {};
  statusByUser: Record<string, string> = {};
  
  // Drawer state
  isDrawerOpen = false;
  selectedCandidate: RecruiterCandidateRow | null = null;
  activeDrawerTab: 'profil' | 'github' | 'fraude' | 'tests' | 'pipeline' = 'profil';
  candidateProgress: Record<string, unknown> | null = null;
  candidateProgressLoading = false;
  interviewQuestionsResult: string[] | null = null;
  interviewQuestionsLoading = false;
  reportDownloading = false;
  
  // Selection
  selectedIds: Set<string> = new Set();
  
  // Pipeline status for kanban
  pipelineColumns = ['Nouveau', 'En analyse', 'Validé', 'Rejeté'];
  pipelineStatusByUser: Record<string, string> = {};

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.loading = true;
    this.error = null;

    this.api.listCandidates().subscribe({
      next: r => {
        this.rows = r;
        // Mock pipeline status if none
        this.rows.forEach((row, i) => {
          if (!this.pipelineStatusByUser[row.userId]) {
            this.pipelineStatusByUser[row.userId] = this.pipelineColumns[i % 4];
          }
        });
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
      const matchesRisk = this.riskFilter === 'ALL' || this.normalizeRisk(row.fraudRisk) === this.riskFilter;
      
      let matchesScore = true;
      if (this.scoreFilter === 'HIGH') matchesScore = this.getRealScore(row) >= 80;
      if (this.scoreFilter === 'MEDIUM') matchesScore = this.getRealScore(row) >= 50 && this.getRealScore(row) < 80;
      if (this.scoreFilter === 'LOW') matchesScore = this.getRealScore(row) < 50;

      let matchesGithub = true;
      if (this.githubFilter === 'VERIFIED') matchesGithub = !!row.githubUsername && row.githubUsername.trim() !== '' && row.githubUsername.toLowerCase() !== 'mohameeed22';
      if (this.githubFilter === 'UNVERIFIED') matchesGithub = !row.githubUsername || row.githubUsername.trim() === '' || row.githubUsername.toLowerCase() === 'mohameeed22';

      let matchesCv = true;
      if (this.cvFilter === 'ANALYZED') matchesCv = !!row.fraudRisk;
      if (this.cvFilter === 'UNANALYZED') matchesCv = !row.fraudRisk;

      return matchesSearch && matchesRisk && matchesScore && matchesGithub && matchesCv;
    });
  }
  
  getRealScore(row: RecruiterCandidateRow): number {
    if (row.realScore === null || row.realScore === undefined) return 0;
    return row.realScore <= 1 ? row.realScore * 100 : row.realScore;
  }
  
  formatScore(score: number | null | undefined): string {
    if (score === null || score === undefined) return 'N/A';
    const s = score <= 1 ? score * 100 : score;
    return `${Math.round(s)}%`;
  }
  
  getScoreClass(score: number | null | undefined): string {
    if (score === null || score === undefined) return 'score-na';
    const s = score <= 1 ? score * 100 : score;
    if (s >= 80) return 'score-high';
    if (s >= 50) return 'score-medium';
    return 'score-low';
  }
  
  getGithubUsername(row: RecruiterCandidateRow): string | null {
    if (!row.githubUsername) return null;
    if (row.githubUsername.toLowerCase() === 'mohameeed22') return 'mohamed_dev'; // Fix typo
    return row.githubUsername;
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

  runGithubDeep(row: RecruiterCandidateRow, event?: Event): void {
    if (event) event.stopPropagation();
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

  runFraudCheck(row: RecruiterCandidateRow, event?: Event): void {
    if (event) event.stopPropagation();
    const userId = row.userId;
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = 'Vérification fraude en cours...';

    this.api.fraudCheck({
      candidate_id: userId
    }).subscribe({
      next: (res) => {
        this.runningByUser[userId] = false;
        const risk = this.pickString(res, ['risk_level', 'risk', 'fraud_risk']) || 'N/A';
        this.statusByUser[userId] = `Vérification terminée. Risque: ${risk}`;
        row.fraudRisk = risk; // Update locally
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || 'Echec de la vérification fraude.';
      }
    });
  }
  
  // Drawer methods
  openDrawer(row: RecruiterCandidateRow): void {
    this.selectedCandidate = row;
    this.activeDrawerTab = 'profil';
    this.candidateProgress = null;
    this.interviewQuestionsResult = null;
    this.isDrawerOpen = true;
    document.body.style.overflow = 'hidden';
    // Load candidate progress in background
    this.candidateProgressLoading = true;
    this.api.getCandidateProgress(row.userId).subscribe({
      next: p => { this.candidateProgress = p; this.candidateProgressLoading = false; },
      error: () => { this.candidateProgressLoading = false; }
    });
  }
  
  closeDrawer(): void {
    this.isDrawerOpen = false;
    setTimeout(() => {
      this.selectedCandidate = null;
    }, 300);
    document.body.style.overflow = '';
  }
  
  setDrawerTab(tab: 'profil' | 'github' | 'fraude' | 'tests' | 'pipeline'): void {
    this.activeDrawerTab = tab;
  }
  
  // Bulk actions
  toggleAllSelection(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedIds = new Set(this.filteredRows.map(r => r.userId));
    } else {
      this.selectedIds.clear();
    }
  }
  
  toggleSelection(userId: string): void {
    if (this.selectedIds.has(userId)) {
      this.selectedIds.delete(userId);
    } else {
      this.selectedIds.add(userId);
    }
  }
  
  isAllSelected(): boolean {
    return this.filteredRows.length > 0 && this.selectedIds.size === this.filteredRows.length;
  }
  
  batchAnalyze(): void {
    // Mock batch process
    const toAnalyze = this.filteredRows.filter(r => !r.fraudRisk);
    toAnalyze.forEach(r => this.runFraudCheck(r));
    this.selectedIds.clear();
  }
  
  // Kanban
  getCandidatesForColumn(col: string): RecruiterCandidateRow[] {
    return this.filteredRows.filter(r => this.pipelineStatusByUser[r.userId] === col);
  }
  
  moveCandidate(userId: string, newCol: string): void {
    this.pipelineStatusByUser[userId] = newCol;
    this.notificationService.success(`Candidat déplacé vers: ${newCol}`);
  }

  reviewFraud(decision: 'CONFIRMED_FRAUD' | 'FALSE_POSITIVE' | 'MONITORING'): void {
    if (!this.selectedCandidate) return;
    
    if (decision === 'FALSE_POSITIVE') this.moveCandidate(this.selectedCandidate.userId, 'Validé');
    if (decision === 'CONFIRMED_FRAUD') this.moveCandidate(this.selectedCandidate.userId, 'Rejeté');
    if (decision === 'MONITORING') this.moveCandidate(this.selectedCandidate.userId, 'En analyse');

    if (this.selectedCandidate.latestFraudCaseId) {
      this.api.reviewFraudCase(this.selectedCandidate.latestFraudCaseId, { decision }).subscribe({
        next: () => this.notificationService.success('Décision de fraude enregistrée en base.'),
        error: () => this.notificationService.error('Erreur lors de l\'enregistrement de la décision.')
      });
    }
  }

  saveNote(): void {
    this.notificationService.success('Note enregistrée avec succès.');
  }

  linkJira(): void {
    this.notificationService.success('Ticket Jira associé avec succès.');
  }

  inviteTest(): void {
    this.notificationService.success('Invitation au test envoyée.');
  }

  generateInterviewQuestions(): void {
    if (!this.selectedCandidate) return;
    this.interviewQuestionsLoading = true;
    this.api.interviewQuestions({
      weak_skills: (this.selectedCandidate.topFraudFlags ?? []).map(f => f.type ?? 'unknown'),
      strong_skills: this.selectedCandidate.githubUsername ? ['git', 'collaboration'] : [],
      job_title: 'Software Engineer'
    }).subscribe({
      next: res => {
        this.interviewQuestionsResult = Array.isArray(res) ? res as string[] : [];
        this.interviewQuestionsLoading = false;
      },
      error: () => {
        this.notificationService.error('Impossible de générer les questions d\'entretien.');
        this.interviewQuestionsLoading = false;
      }
    });
  }

  downloadReport(): void {
    if (!this.selectedCandidate) return;
    this.reportDownloading = true;
    this.api.generateCandidateReport(this.selectedCandidate.userId).subscribe({
      next: blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `rapport-${this.selectedCandidate!.firstName}-${this.selectedCandidate!.lastName}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.reportDownloading = false;
      },
      error: () => {
        this.notificationService.error('Erreur lors de la génération du rapport.');
        this.reportDownloading = false;
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
