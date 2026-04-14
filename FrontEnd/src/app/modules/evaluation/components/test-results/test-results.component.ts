import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { SoftSkillsService } from '../../services/soft-skills.service';
import { PieChartComponent, PieChartSlice } from '../../../../shared/components/pie-chart/pie-chart.component';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { SkillResponse, TypeSkill } from '../../../skills/models/skill.model';
import { BenchmarkService, CandidateProgressItem } from '../../../skill-test/services/benchmark.service';

@Component({
  selector: 'app-test-results',
  standalone: true,
  imports: [CommonModule, RouterModule, PieChartComponent],
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private softSkillsService = inject(SoftSkillsService);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);
  private skillsService = inject(SkillsService);
  private benchmarkService = inject(BenchmarkService);
  private notify = inject(NotificationService);

  result: any = null;
  loading = true;
  errorType: 'none' | 'no-data' | 'server' | 'timeout' = 'none';
  errorMessage = '';
  techSkills: SkillResponse[] = [];
  recentTechTests: CandidateProgressItem[] = [];
  loadingTechSkills = false;
  loadingTechTests = false;
  techSkillsError = '';
  techTestsError = '';
  exportingPdf = false;
  private sub?: Subscription;
  private techSkillsSub?: Subscription;
  private techTestsSub?: Subscription;
  private timeoutId?: any;

  readonly skillIcons: Record<string, string> = {
    communication: '💬', discipline: '⏰', curiosity: '🔍',
    collaboration: '🤝', ownership: '🎯', leadership: '👑',
    adaptability: '🌱', problem_solving: '🧩'
  };

  readonly skillLabels: Record<string, string> = {
    communication: 'Communication', discipline: 'Discipline',
    curiosity: 'Curiosité',        collaboration: 'Collaboration',
    ownership: 'Ownership',        leadership: 'Leadership',
    adaptability: 'Adaptabilité',  problem_solving: 'Résolution de problèmes'
  };

  readonly personalityCards = [
    {
      key: 'analyseur',
      label: 'Analyseur',
      icon: '🧠',
      desc: 'Logique, structure et decision basee sur les faits.'
    },
    {
      key: 'perseverant',
      label: 'Persévérant',
      icon: '🛡️',
      desc: 'Convictions fortes, engagement et sens des responsabilites.'
    },
    {
      key: 'empathique',
      label: 'Empathique',
      icon: '❤️',
      desc: 'Ecoute active, sensibilite relationnelle et cooperation.'
    },
    {
      key: 'energiseur',
      label: 'Énergiseur',
      icon: '⚡',
      desc: 'Spontaneite, energie sociale et communication vivante.'
    },
    {
      key: 'imagineur',
      label: 'Imagineur',
      icon: '🌙',
      desc: 'Reflexion profonde, calme et vision imaginative.'
    },
    {
      key: 'promoteur',
      label: 'Promoteur',
      icon: '🚀',
      desc: 'Orientation action, adaptation rapide et impact concret.'
    }
  ];

  private readonly piePalette: string[] = ['#6366f1', '#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#a855f7', '#14b8a6', '#f97316'];

  constructor() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;

    if (state?.['softSkillsError']) {
      this.loading = false;
      this.errorType = 'server';
      this.errorMessage = 'Analyse soft skills impossible. Vérifiez le backend et n8n.';
      return;
    }

    if (state?.['result']) {
      const normalized = this.normalize(state['result']);
      if (this.isLikelyInvalidAnalysis(normalized)) {
        this.result = null;
        this.loading = false;
        this.errorType = 'no-data';
        console.warn('[TestResults] Constructor: Ignoring invalid analysis payload from router state');
      } else {
        this.result = normalized;
        this.loading = false;
        console.log('[TestResults] Constructor: Got result from router state');
      }
    }
  }

  ngOnInit(): void {
    console.log('[TestResults] ngOnInit: loading =', this.loading);
    this.loadTechnicalResults();
    this.cdr.detectChanges();

    if (this.result) {
      console.log('[TestResults] ngOnInit: Already have result, skipping API call');
      return;
    }

    // Try sessionStorage
    const stored = sessionStorage.getItem('softSkillsResult');
    if (stored) {
      try {
        const cached = this.normalize(JSON.parse(stored));
        // Use cache only if personality type is already present.
        // Otherwise refresh from backend to avoid stale incomplete results.
        if (cached?.personalityType && !this.isLikelyInvalidAnalysis(cached)) {
          this.result = cached;
          this.loading = false;
          this.cdr.detectChanges();
          console.log('[TestResults] ngOnInit: Got result from sessionStorage');
          return;
        }
        console.log('[TestResults] ngOnInit: Cached result is incomplete/invalid, refreshing from API');
      } catch (e) {
        console.error('[TestResults] ngOnInit: Failed to parse sessionStorage:', e);
        sessionStorage.removeItem('softSkillsResult');
      }
    }

    // 30s timeout safety
    console.log('[TestResults] ngOnInit: Starting 30s timeout');
    this.timeoutId = setTimeout(() => {
      console.log('[TestResults] ngOnInit: Timeout fired, showing timeout state');
      if (this.loading) {
        this.loading = false;
        this.errorType = 'timeout';
        this.cdr.detectChanges();
      }
    }, 30000);

    // Call API
    console.log('[TestResults] ngOnInit: Calling softSkillsService.getLastAnalysis()');
    this.sub = this.softSkillsService.getLastAnalysis().subscribe({
      next: (data) => {
        console.log('[TestResults] ngOnInit: Got response:', data);
        clearTimeout(this.timeoutId);
        if (!data) {
          console.log('[TestResults] ngOnInit: Response is empty, showing no-data state');
          this.loading = false;
          this.errorType = 'no-data';
          this.cdr.detectChanges();
          return;
        }
        this.result = this.normalize(data);
        if (this.isLikelyInvalidAnalysis(this.result)) {
          console.warn('[TestResults] ngOnInit: Backend returned invalid/fallback analysis, showing no-data state');
          this.result = null;
          this.loading = false;
          this.errorType = 'no-data';
          sessionStorage.removeItem('softSkillsResult');
          this.cdr.detectChanges();
          return;
        }
        this.loading = false;
        this.errorType = 'none';
        console.log('[TestResults] ngOnInit: Normalized result:', this.result);
        this.cdr.detectChanges();
        sessionStorage.setItem('softSkillsResult',
          JSON.stringify(this.result));
      },
      error: (err: HttpErrorResponse) => {
        console.error('[TestResults] ngOnInit: Error:', err.status, err.message);
        clearTimeout(this.timeoutId);
        this.loading = false;
        this.errorType = err.status === 404 ? 'no-data' : 'server';
        this.errorMessage = `Erreur ${err.status}.`;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.cdr.detectChanges();
    this.sub?.unsubscribe();
    this.techSkillsSub?.unsubscribe();
    this.techTestsSub?.unsubscribe();
    clearTimeout(this.timeoutId);
  }

  private loadTechnicalResults(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id) {
      this.loadingTechSkills = false;
      this.loadingTechTests = false;
      this.techSkillsError = 'Utilisateur non authentifie.';
      this.techTestsError = 'Utilisateur non authentifie.';
      return;
    }

    const userId = String(user.id);

    this.loadingTechSkills = true;
    this.techSkillsError = '';
    this.techSkillsSub?.unsubscribe();
    this.techSkillsSub = this.skillsService.getUserSkills(userId).subscribe({
      next: (skills) => {
        this.techSkills = [...skills]
          .filter((skill) => skill.type === TypeSkill.TECH || String(skill.type) === 'TECH')
          .sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0));
        this.loadingTechSkills = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingTechSkills = false;
        this.techSkillsError = err?.error?.message ?? 'Impossible de charger les competences techniques.';
        this.cdr.detectChanges();
      }
    });

    this.loadingTechTests = true;
    this.techTestsError = '';
    this.techTestsSub?.unsubscribe();
    this.techTestsSub = this.benchmarkService.progress(userId).subscribe({
      next: (rows) => {
        this.recentTechTests = [...rows]
          .sort((a, b) => new Date(b.taken_at).getTime() - new Date(a.taken_at).getTime())
          .slice(0, 6);
        this.loadingTechTests = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingTechTests = false;
        this.techTestsError = err?.error?.message ?? 'Impossible de charger les resultats techniques recents.';
        this.cdr.detectChanges();
      }
    });
  }

  // Normalize handles both snake_case and camelCase from backend
  private normalize(raw: any): any {
    if (!raw) return null;

    const toTenScale = (value: any): number => {
      const n = Number(value ?? 0);
      if (!Number.isFinite(n)) return 0;
      return n > 10 ? Math.round((n / 10) * 10) / 10 : Math.round(n * 10) / 10;
    };

    const toKey = (key: string): string =>
      String(key || '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '_')
        .replace(/-/g, '_');

    const merged = raw.mergedSoftSkills
      || raw.merged_soft_skills
      || { communication:7, discipline:7, curiosity:7,
           collaboration:7, ownership:7, leadership:7 };

    const mergedScaled: Record<string, number> = Object.fromEntries(
      Object.entries(merged).map(([k, v]) => [toKey(k), toTenScale(v)])
    );

    const source = raw.sourceData || raw.source_data || {};
    const sourceMapped = {
      cv: {
        overall_score: toTenScale(
          source?.cv?.overall_score
          ?? source?.cv_score
          ?? raw?.cv_score
          ?? 0
        )
      },
      github: {
        overall_score: toTenScale(
          source?.github?.overall_score
          ?? source?.github_score
          ?? raw?.github_score
          ?? 0
        )
      },
      pcm: {
        overall_score: toTenScale(
          source?.pcm?.overall_score
          ?? source?.pcm_score
          ?? raw?.pcm_score
          ?? 0
        )
      }
    };

    const overall = raw.overallScore
      ?? raw.overall_score
      ?? this.avg(Object.values(mergedScaled) as number[]);

    const strengths = raw.top3Strengths
      || raw.top_3_strengths
      || Object.entries(merged)
           .sort((a:any, b:any) => b[1] - a[1])
           .slice(0, 3).map(([k]) => k);

    const weaknesses = raw.top3Weaknesses
      || raw.top_3_weaknesses
      || Object.entries(merged)
           .sort((a:any, b:any) => a[1] - b[1])
           .slice(0, 3).map(([k]) => k);

    return {
      userName:               raw.userName    || raw.user_name    || '',
      userEmail:              raw.userEmail   || raw.user_email   || '',
      overallScore:           toTenScale(overall),
      mergedSoftSkills:       mergedScaled,
      top3Strengths:          strengths,
      top3Weaknesses:         weaknesses,
      personalityType:        this.normalizeToPcmType(raw.personalityType || raw.personality_type || ''),
      summary:                raw.summary     || '',
      careerAdvice:           raw.careerAdvice || raw.career_advice || '',
      keyStrengths:           raw.keyStrengths || raw.key_strengths || [],
      keyWeaknesses:          raw.keyWeaknesses|| raw.key_weaknesses|| [],
      trainingRecommendations:
        typeof (raw.trainingRecommendations || raw.training_recommendations) === 'object'
          ? (raw.trainingRecommendations || raw.training_recommendations)
          : {},
      sourceData:             sourceMapped
    };
  }

  private avg(values: number[]): number {
    if (!values.length) return 0;
    return Math.round(
      values.reduce((s, v) => s + v, 0) / values.length * 10) / 10;
  }

  getSkillEntries(): [string, number][] {
    if (!this.result?.mergedSoftSkills) return [];
    return Object.entries(this.result.mergedSoftSkills)
      .sort((a: any, b: any) => b[1] - a[1]) as [string, number][];
  }

  get skillPieSlices(): PieChartSlice[] {
    return this.getSkillEntries().map(([key, score], index) => ({
      label: this.getSkillLabel(key),
      value: Number(score || 0),
      color: this.piePalette[index % this.piePalette.length]
    }));
  }

  getRecommendationEntries(): [string, string][] {
    if (!this.result?.trainingRecommendations) return [];
    return Object.entries(this.result.trainingRecommendations) as [string, string][];
  }

  getScoreColor(score: number): string {
    if (score >= 7.5) return '#2ecc71';
    if (score >= 5)   return '#f39c12';
    return '#e74c3c';
  }

  getScoreLabel(score: number): string {
    if (score >= 8)   return 'Excellent';
    if (score >= 6.5) return 'Bon';
    if (score >= 5)   return 'Moyen';
    return 'À améliorer';
  }

  getSourceScore(source: string): number {
    return this.result?.sourceData?.[source]?.overall_score ?? 0;
  }

  getSkillLabel(key: string): string {
    if (this.skillLabels[key]) return this.skillLabels[key];
    return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }

  getSkillIcon(key: string): string {
    return this.skillIcons[key] || '⭐';
  }

  get softSkillCount(): number {
    return Object.keys(this.result?.mergedSoftSkills || {}).length;
  }

  get techSkillCount(): number {
    return this.techSkills.length;
  }

  get latestTechTestScore(): number | null {
    if (!this.recentTechTests.length) {
      return null;
    }
    return this.toNumber(this.recentTechTests[0].overall_score);
  }

  getTechLevelPercent(level: number | null | undefined): number {
    const safe = this.toNumber(level);
    return Math.max(0, Math.min(100, Math.round((safe / 5) * 100)));
  }

  techTestSkillEntries(item: CandidateProgressItem): Array<{ skill: string; score: number }> {
    if (!item.skill_scores || typeof item.skill_scores !== 'object') {
      return [];
    }

    return Object.entries(item.skill_scores)
      .map(([skill, value]) => ({
        skill,
        score: this.toNumber(value)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }

  exportResultPdf(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id || this.exportingPdf) {
      return;
    }

    this.exportingPdf = true;
    this.benchmarkService.downloadReportResponse(String(user.id)).subscribe({
      next: (response: HttpResponse<Blob>) => {
        void this.handleReportResponse(response);
      },
      error: (error: unknown) => {
        void this.handleReportError(error);
      }
    });
  }

  private async handleReportResponse(response: HttpResponse<Blob>): Promise<void> {
    try {
      const fallbackName = `talentpredict-report-${new Date().toISOString().slice(0, 10)}.pdf`;
      const fileName = this.benchmarkService.resolveReportFileName(response, fallbackName);
      const payload = response.body;

      if (!payload || payload.size === 0) {
        this.notify.error('Le rapport genere est vide. Reessayez dans quelques instants.');
        return;
      }

      if (!this.benchmarkService.isPdfResponse(response, fileName)) {
        const message = await this.benchmarkService.extractBlobMessage(
          payload,
          'Impossible de telecharger le rapport PDF.'
        );
        this.notify.error(message);
        return;
      }

      this.downloadBlob(payload, fileName);
      this.notify.success('Rapport PDF telecharge.');
    } finally {
      this.exportingPdf = false;
    }
  }

  private async handleReportError(error: unknown): Promise<void> {
    this.exportingPdf = false;
    const message = await this.benchmarkService.extractErrorMessage(
      error,
      'Impossible de telecharger le rapport PDF.'
    );
    this.notify.error(message);
  }

  private downloadBlob(blob: Blob, fileName: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    const url = window.URL.createObjectURL(blob);
    const anchor = window.document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.style.display = 'none';
    window.document.body.appendChild(anchor);
    anchor.click();

    window.setTimeout(() => {
      window.URL.revokeObjectURL(url);
      anchor.remove();
    }, 1000);
  }

  getActivePersonalityKey(): string {
    return this.normalizePersonality(this.result?.personalityType || '');
  }

  private normalizeToPcmType(value: string): string {
    const key = this.normalizePersonality(value);
    if (!key) return '';

    if (key.includes('analyseur') || key.includes('travaillomane')) return 'Analyseur';
    if (key.includes('perseverant')) return 'Persévérant';
    if (key.includes('empathique')) return 'Empathique';
    if (key.includes('energiseur') || key.includes('rebelle')) return 'Énergiseur';
    if (key.includes('imagineur') || key.includes('reveur')) return 'Imagineur';
    if (key.includes('promoteur')) return 'Promoteur';

    const mbti = (value || '').trim().toUpperCase();
    const map: Record<string, string> = {
      INTJ: 'Analyseur', ISTJ: 'Analyseur', INTP: 'Analyseur', ISTP: 'Analyseur',
      INFJ: 'Persévérant', ISFJ: 'Persévérant',
      ENFJ: 'Empathique', ESFJ: 'Empathique',
      ENFP: 'Énergiseur', ESFP: 'Énergiseur',
      INFP: 'Imagineur', ISFP: 'Imagineur',
      ENTJ: 'Promoteur', ESTJ: 'Promoteur', ENTP: 'Promoteur', ESTP: 'Promoteur'
    };
    return map[mbti] || 'Analyseur';
  }

  private normalizePersonality(value: string): string {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  startEvaluation(): void {
    sessionStorage.removeItem('softSkillsResult');
    this.router.navigate(['/evaluation']);
  }

  retakeTechSkills(): void {
    this.router.navigate(['/skill-test']);
  }

  retry(): void {
    console.log('[TestResults] retry: Resetting state and reloading');
    sessionStorage.removeItem('softSkillsResult');
    this.result = null;
    this.loading = true;
    this.errorType = 'none';
    this.cdr.detectChanges();
    this.ngOnInit();
  }

  private isLikelyInvalidAnalysis(result: any): boolean {
    if (!result) return true;

    const overallZero = Number(result.overallScore ?? 0) <= 0;

    const merged = result.mergedSoftSkills || {};
    const mergedValues = Object.values(merged) as number[];
    const mergedZero = mergedValues.length === 0 || mergedValues.every((value) => Number(value ?? 0) <= 0);

    const cv = Number(result?.sourceData?.cv?.overall_score ?? 0);
    const github = Number(result?.sourceData?.github?.overall_score ?? 0);
    const pcm = Number(result?.sourceData?.pcm?.overall_score ?? 0);
    const sourceZero = cv <= 0 && github <= 0 && pcm <= 0;

    const summaryBlank = !String(result.summary || '').trim();
    const strengthsEmpty = !Array.isArray(result.top3Strengths) || result.top3Strengths.length === 0;

    return overallZero && mergedZero && sourceZero && summaryBlank && strengthsEmpty;
  }

  private toNumber(value: unknown): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
}