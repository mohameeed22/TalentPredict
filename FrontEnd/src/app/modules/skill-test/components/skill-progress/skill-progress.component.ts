import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { BenchmarkService, CandidateProgressItem } from '../../services/benchmark.service';
import { NotificationService } from '../../../../core/services/notification.service';

interface BenchmarkSkillRow {
  skill: string;
  percentile: number;
  top_10_percent_score: number;
  candidate_score: number;
  avg_score: number;
}

interface BenchmarkOverview {
  overall_percentile: number;
  benchmarks: BenchmarkSkillRow[];
}

@Component({
  selector: 'app-skill-progress',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-progress.component.html',
  styleUrl: './skill-progress.component.scss'
})
export class SkillProgressComponent implements OnInit {
  private auth = inject(AuthService);
  private benchmarkService = inject(BenchmarkService);
  private notify = inject(NotificationService);

  progress: CandidateProgressItem[] = [];
  benchmark: BenchmarkOverview | null = null;
  loadingProgress = true;
  loadingBenchmark = true;
  progressError = '';
  benchmarkError = '';
  exportingPdf = false;
  private userId = '';

  ngOnInit(): void {
    const u = this.auth.getCurrentUser();
    if (!u?.id) {
      this.loadingProgress = false;
      this.loadingBenchmark = false;
      this.progressError = 'Utilisateur non authentifie.';
      this.benchmarkError = 'Utilisateur non authentifie.';
      return;
    }

    this.userId = String(u.id);
    this.loadProgress();
    this.loadBenchmark();
  }

  get averageScore(): number {
    if (this.progress.length === 0) {
      return 0;
    }
    const total = this.progress.reduce((sum, item) => sum + this.toNumber(item.overall_score), 0);
    return Math.round(total / this.progress.length);
  }

  get passRate(): number {
    if (this.progress.length === 0) {
      return 0;
    }
    const passedCount = this.progress.filter(item => !!item.passed).length;
    return Math.round((passedCount / this.progress.length) * 100);
  }

  get overallPercentile(): number {
    return this.benchmark?.overall_percentile ?? 0;
  }

  get benchmarkRows(): BenchmarkSkillRow[] {
    return this.benchmark?.benchmarks ?? [];
  }

  trackByTakenAt(index: number, item: CandidateProgressItem): string {
    return `${item.taken_at}-${index}`;
  }

  trackBySkill(index: number, item: BenchmarkSkillRow): string {
    return `${item.skill}-${index}`;
  }

  formatTestType(testType: string | null): string {
    if (!testType) {
      return 'Evaluation generale';
    }

    const normalized = testType.toLowerCase();
    if (normalized === 'mcq') {
      return 'QCM + code challenge';
    }

    return testType.replace(/_/g, ' ');
  }

  percentileLabel(percentile: number): string {
    if (percentile >= 80) {
      return 'Excellent positionnement';
    }
    if (percentile >= 60) {
      return 'Niveau superieur a la moyenne';
    }
    if (percentile >= 40) {
      return 'Niveau en progression';
    }
    return 'Renforcement recommande';
  }

  skillEntries(item: CandidateProgressItem): Array<{ skill: string; score: number }> {
    if (!item.skill_scores || typeof item.skill_scores !== 'object') {
      return [];
    }

    return Object.entries(item.skill_scores)
      .map(([skill, value]) => ({
        skill,
        score: Math.round(this.toNumber(value))
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }

  benchmarkRatio(score: number, topScore: number): number {
    const max = Math.max(1, this.toNumber(topScore));
    return Math.max(0, Math.min(100, Math.round((this.toNumber(score) / max) * 100)));
  }

  exportPdf(): void {
    if (!this.userId || this.exportingPdf) {
      return;
    }

    this.exportingPdf = true;
    this.benchmarkService.downloadReportResponse(this.userId).subscribe({
      next: response => {
        void this.handleReportResponse(response);
      },
      error: error => {
        void this.handleReportError(error);
      }
    });
  }

  private loadProgress(): void {
    this.loadingProgress = true;
    this.progressError = '';

    this.benchmarkService.progress(this.userId).subscribe({
      next: p => {
        this.progress = [...p].sort(
          (a, b) => new Date(b.taken_at).getTime() - new Date(a.taken_at).getTime()
        );
        this.loadingProgress = false;
      },
      error: err => {
        this.loadingProgress = false;
        this.progressError = err?.error?.message ?? 'Impossible de charger les sessions de test.';
      }
    });
  }

  private loadBenchmark(): void {
    this.loadingBenchmark = true;
    this.benchmarkError = '';

    this.benchmarkService.benchmark(this.userId, ['JavaScript', 'React']).subscribe({
      next: rawBenchmark => {
        this.benchmark = this.normalizeBenchmark(rawBenchmark);
        this.loadingBenchmark = false;
      },
      error: err => {
        this.loadingBenchmark = false;
        this.benchmarkError = err?.error?.message ?? 'Benchmark indisponible pour le moment.';
      }
    });
  }

  private normalizeBenchmark(raw: unknown): BenchmarkOverview | null {
    if (!raw || typeof raw !== 'object') {
      return null;
    }

    const data = raw as Record<string, unknown>;
    const rows = Array.isArray(data['benchmarks']) ? data['benchmarks'] : [];

    const normalizedRows: BenchmarkSkillRow[] = rows
      .filter((item): item is Record<string, unknown> => !!item && typeof item === 'object')
      .map((row) => ({
        skill: String(row['skill'] ?? 'N/A'),
        percentile: Math.round(this.toNumber(row['percentile'])),
        top_10_percent_score: Math.round(this.toNumber(row['top_10_percent_score'])),
        candidate_score: Math.round(this.toNumber(row['candidate_score'])),
        avg_score: Math.round(this.toNumber(row['avg_score']))
      }));

    return {
      overall_percentile: Math.round(this.toNumber(data['overall_percentile'])),
      benchmarks: normalizedRows
    };
  }

  private toNumber(value: unknown): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
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
          'Impossible de telecharger le PDF pour le moment.'
        );
        this.notify.error(message);
        return;
      }

      this.triggerDownload(payload, fileName);
      this.notify.success('Rapport PDF telecharge.');
    } finally {
      this.exportingPdf = false;
    }
  }

  private async handleReportError(error: unknown): Promise<void> {
    this.exportingPdf = false;
    const message = await this.benchmarkService.extractErrorMessage(
      error,
      'Impossible de telecharger le PDF.'
    );
    this.notify.error(message);
  }

  private triggerDownload(blob: Blob, fileName: string): void {
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
}
