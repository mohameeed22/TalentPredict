import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';

export interface CandidateProgressItem {
  id?: string;
  candidate_id?: string;
  test_type?: string;
  overall_score?: number;
  skill_scores?: Record<string, number>;
  taken_at: string;
  passed?: boolean;
}

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

  formatTestType(testType: string | null | undefined): string {
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
    this.notify.warning("L'exportation PDF est momentanément indisponible.");
  }

  private loadProgress(): void {
    this.loadingProgress = false;
    this.progressError = 'Données de progression momentanément indisponibles.';
  }

  private loadBenchmark(): void {
    this.loadingBenchmark = false;
    this.benchmarkError = 'Benchmark indisponible pour le moment.';
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
}
