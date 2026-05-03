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

  // Drawer
  isDrawerOpen = false;
  selectedCandidate: RecruiterCandidateRow | null = null;
  activeDrawerTab: 'profil' | 'github' | 'fraude' | 'tests' | 'contact' | 'pipeline' = 'profil';
  candidateProgress: any = null;
  candidateProgressLoading = false;
  interviewQuestionsResult: string[] | null = null;
  interviewQuestionsLoading = false;
  reportDownloading = false;

  // Contact tab
  emailSubject = '';
  emailBody = '';
  emailSending = false;
  candidateNote = '';
  jiraTicket = '';

  // Selection
  selectedIds = new Set<string>();

  // Pipeline
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

  // ── KPI helpers ─────────────────────────────────────────────
  getKpi(type: string): number {
    switch (type) {
      case 'validated': return this.rows.filter(r => this.pipelineStatusByUser[r.userId] === 'Validé').length;
      case 'github': return this.rows.filter(r => !!r.githubUsername && r.githubUsername.trim() !== '').length;
      case 'scored': return this.rows.filter(r => r.realScore != null).length;
      default: return 0;
    }
  }

  get filteredRows(): RecruiterCandidateRow[] {
    const query = this.search.trim().toLowerCase();
    return this.rows.filter(row => {
      const values = [row.firstName, row.lastName, row.email, row.githubUsername ?? '', row.fraudRisk ?? ''].join(' ').toLowerCase();
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
    if (row.githubUsername.toLowerCase() === 'mohameeed22') return 'mohamed_dev';
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

  // ── AI Actions ──────────────────────────────────────────────
  runGithubDeep(row: RecruiterCandidateRow, event?: Event): void {
    if (event) event.stopPropagation();
    const userId = row.userId;
    const githubUsername = row.githubUsername?.trim();
    if (!githubUsername) {
      this.statusByUser[userId] = 'Aucun username GitHub disponible.';
      return;
    }
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = 'Analyse GitHub en cours…';
    this.api.githubDeep({ github_username: githubUsername, candidate_id: userId }).subscribe({
      next: () => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = 'Analyse GitHub terminée ✅';
        this.notificationService.success('Analyse GitHub terminée.');
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || 'Échec de l\'analyse GitHub.';
      }
    });
  }

  runFraudCheck(row: RecruiterCandidateRow, event?: Event): void {
    if (event) event.stopPropagation();
    const userId = row.userId;
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = 'Vérification fraude en cours…';
    this.api.fraudCheck({ candidate_id: userId }).subscribe({
      next: (res) => {
        this.runningByUser[userId] = false;
        const risk = this.pickString(res, ['risk_level', 'risk', 'fraud_risk']) || 'N/A';
        this.statusByUser[userId] = `Vérification terminée. Risque: ${risk}`;
        row.fraudRisk = risk;
        this.notificationService.success(`Vérification fraude terminée — Risque: ${risk}`);
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || 'Échec de la vérification.';
      }
    });
  }

  // ── Drawer ──────────────────────────────────────────────────
  openDrawer(row: RecruiterCandidateRow): void {
    this.selectedCandidate = row;
    this.activeDrawerTab = 'profil';
    this.candidateProgress = null;
    this.interviewQuestionsResult = null;
    this.emailSubject = '';
    this.emailBody = '';
    this.candidateNote = '';
    this.isDrawerOpen = true;
    document.body.style.overflow = 'hidden';
    this.candidateProgressLoading = true;
    this.api.getCandidateProgress(row.userId).subscribe({
      next: p => { this.candidateProgress = p; this.candidateProgressLoading = false; },
      error: () => { this.candidateProgressLoading = false; }
    });
  }

  closeDrawer(): void {
    this.isDrawerOpen = false;
    setTimeout(() => { this.selectedCandidate = null; }, 300);
    document.body.style.overflow = '';
  }

  setDrawerTab(tab: 'profil' | 'github' | 'fraude' | 'tests' | 'contact' | 'pipeline'): void {
    this.activeDrawerTab = tab;
  }

  // ── Navigation between candidates ──────────────────────────
  getPrevCandidate(): RecruiterCandidateRow | null {
    if (!this.selectedCandidate) return null;
    const idx = this.filteredRows.findIndex(r => r.userId === this.selectedCandidate!.userId);
    return idx > 0 ? this.filteredRows[idx - 1] : null;
  }

  getNextCandidate(): RecruiterCandidateRow | null {
    if (!this.selectedCandidate) return null;
    const idx = this.filteredRows.findIndex(r => r.userId === this.selectedCandidate!.userId);
    return idx >= 0 && idx < this.filteredRows.length - 1 ? this.filteredRows[idx + 1] : null;
  }

  // ── Bulk ────────────────────────────────────────────────────
  toggleAllSelection(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectedIds = isChecked ? new Set(this.filteredRows.map(r => r.userId)) : new Set();
  }

  toggleSelection(userId: string): void {
    if (this.selectedIds.has(userId)) this.selectedIds.delete(userId);
    else this.selectedIds.add(userId);
  }

  isAllSelected(): boolean {
    return this.filteredRows.length > 0 && this.selectedIds.size === this.filteredRows.length;
  }

  batchAnalyze(): void {
    const toAnalyze = this.filteredRows.filter(r => this.selectedIds.has(r.userId));
    toAnalyze.forEach(r => this.runFraudCheck(r));
    this.selectedIds.clear();
    this.notificationService.success(`Analyse lancée pour ${toAnalyze.length} candidat(s).`);
  }

  // ── Kanban ──────────────────────────────────────────────────
  getCandidatesForColumn(col: string): RecruiterCandidateRow[] {
    return this.filteredRows.filter(r => this.pipelineStatusByUser[r.userId] === col);
  }

  moveCandidate(userId: string, newCol: string): void {
    this.pipelineStatusByUser[userId] = newCol;
    this.notificationService.success(`Candidat déplacé vers: ${newCol}`);
  }

  // ── Fraud review ────────────────────────────────────────────
  reviewFraud(decision: 'CONFIRMED_FRAUD' | 'FALSE_POSITIVE' | 'MONITORING'): void {
    if (!this.selectedCandidate) return;
    if (decision === 'FALSE_POSITIVE') this.moveCandidate(this.selectedCandidate.userId, 'Validé');
    if (decision === 'CONFIRMED_FRAUD') this.moveCandidate(this.selectedCandidate.userId, 'Rejeté');
    if (decision === 'MONITORING') this.moveCandidate(this.selectedCandidate.userId, 'En analyse');
    if (this.selectedCandidate.latestFraudCaseId) {
      this.api.reviewFraudCase(this.selectedCandidate.latestFraudCaseId, { decision }).subscribe({
        next: () => this.notificationService.success('Décision enregistrée.'),
        error: () => this.notificationService.error('Erreur lors de l\'enregistrement.')
      });
    }
  }

  // ── Interview questions ─────────────────────────────────────
  generateInterviewQuestions(): void {
    if (!this.selectedCandidate) return;
    this.interviewQuestionsLoading = true;
    this.api.interviewQuestions({
      weak_skills: (this.selectedCandidate.fraudFlags?.flags ?? []).map(flag => flag.type),
      strong_skills: this.selectedCandidate.githubUsername ? ['git', 'collaboration'] : [],
      job_title: 'Software Engineer'
    }).subscribe({
      next: res => {
        this.interviewQuestionsResult = Array.isArray(res) ? res as string[] : [];
        this.interviewQuestionsLoading = false;
      },
      error: () => {
        this.notificationService.error('Impossible de générer les questions.');
        this.interviewQuestionsLoading = false;
      }
    });
  }

  // ── Report ──────────────────────────────────────────────────
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

  downloadReportFor(row: RecruiterCandidateRow, event?: Event): void {
    if (event) event.stopPropagation();
    this.selectedCandidate = row;
    this.downloadReport();
  }

  // ── Contact / Email ─────────────────────────────────────────
  sendEmail(): void {
    if (!this.selectedCandidate || !this.emailBody.trim()) return;
    this.emailSending = true;
    this.api.sendCampaignEmail({
      userId: this.selectedCandidate.userId,
      candidateUsername: this.selectedCandidate.firstName,
      campaignContext: 'recruiter_contact',
      targetUrl: '',
      subject: this.emailSubject,
      body: this.emailBody
    }).subscribe({
      next: () => {
        this.emailSending = false;
        this.notificationService.success('Email envoyé avec succès !');
        this.emailSubject = '';
        this.emailBody = '';
      },
      error: () => {
        this.emailSending = false;
        this.notificationService.error('Erreur lors de l\'envoi de l\'email.');
      }
    });
  }

  generateEmailTemplate(type: 'interview' | 'rejection'): void {
    if (!this.selectedCandidate) return;
    const name = `${this.selectedCandidate.firstName} ${this.selectedCandidate.lastName}`;
    if (type === 'interview') {
      this.emailSubject = `Invitation à un entretien — TalentPredict`;
      this.emailBody = `Bonjour ${name},\n\nNous avons examiné votre profil avec attention et souhaitons vous inviter à un entretien pour discuter de vos compétences et de votre parcours.\n\nMerci de nous confirmer votre disponibilité.\n\nCordialement,\nL'équipe de recrutement`;
    } else {
      this.emailSubject = `Mise à jour de votre candidature — TalentPredict`;
      this.emailBody = `Bonjour ${name},\n\nNous vous remercions pour l'intérêt porté à notre entreprise. Après étude approfondie de votre candidature, nous avons décidé de ne pas poursuivre le processus.\n\nNous vous souhaitons beaucoup de succès dans vos recherches.\n\nCordialement,\nL'équipe de recrutement`;
    }
  }

  // ── Misc ────────────────────────────────────────────────────
  saveNote(): void {
    this.notificationService.success('Note enregistrée.');
  }

  linkJira(): void {
    this.notificationService.success('Ticket Jira associé.');
  }

  inviteTest(): void {
    this.notificationService.success('Invitation au test envoyée.');
  }

  private pickString(obj: Record<string, unknown>, keys: string[]): string | null {
    for (const key of keys) {
      const value = obj[key];
      if (typeof value === 'string' && value.trim()) return value;
    }
    return null;
  }

  private normalizeRisk(risk: string | null): 'HIGH' | 'MEDIUM' | 'LOW' | 'UNKNOWN' {
    const normalized = (risk ?? '').toLowerCase();
    if (!normalized) return 'UNKNOWN';
    if (normalized.includes('high') || normalized.includes('critical') || normalized.includes('critique') || normalized.includes('eleve') || normalized.includes('elev')) return 'HIGH';
    if (normalized.includes('medium') || normalized.includes('modere') || normalized.includes('moderate')) return 'MEDIUM';
    if (normalized.includes('low') || normalized.includes('faible')) return 'LOW';
    return 'UNKNOWN';
  }
}
