import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { BenchmarkService } from '../../../skill-test/services/benchmark.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-tech-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tech-results.component.html',
  styleUrl: './tech-results.component.scss'
})
export class TechResultsComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private skillsService = inject(SkillsService);
  private benchmarkService = inject(BenchmarkService);
  private notify = inject(NotificationService);

  quizResult: any = null;
  githubResult: any = null;
  detectedSkills: string[] = [];
  techSkills: any[] = [];
  recentTests: any[] = [];
  loading = true;
  exportingPdf = false;
  activeTab: 'overview' | 'skills' | 'github' | 'gaps' = 'overview';

  ngOnInit(): void {
    // Load quiz result from router state or sessionStorage
    const nav = this.router.getCurrentNavigation();
    this.quizResult = nav?.extras?.state?.['result'] ?? null;

    // Load context from intake
    const ctx = sessionStorage.getItem('techIntakeContext');
    if (ctx) {
      try {
        const parsed = JSON.parse(ctx);
        this.githubResult = parsed.githubResult ?? null;
        this.detectedSkills = parsed.detectedSkills ?? [];
      } catch {}
    }

    this.loadUserData();
  }

  private loadUserData(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id) { this.loading = false; return; }
    const userId = String(user.id);

    this.skillsService.getUserSkills(userId).subscribe({
      next: (skills) => {
        this.techSkills = skills
          .filter(s => s.type === 'TECH' || (s.type as string) === 'TECH')
          .sort((a: any, b: any) => (b.niveau ?? 0) - (a.niveau ?? 0));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });

    this.benchmarkService.progress(userId).subscribe({
      next: (rows) => {
        this.recentTests = [...rows]
          .sort((a: any, b: any) => new Date(b.taken_at).getTime() - new Date(a.taken_at).getTime())
          .slice(0, 5);
      }
    });
  }

  get overallScore(): number {
    return this.quizResult?.finalScore ?? 0;
  }

  get scoreLabel(): string {
    const s = this.overallScore;
    if (s >= 80) return 'Excellent';
    if (s >= 65) return 'Bon';
    if (s >= 50) return 'Moyen';
    return 'À améliorer';
  }

  get scoreColor(): string {
    const s = this.overallScore;
    if (s >= 80) return '#22c55e';
    if (s >= 65) return '#3b82f6';
    if (s >= 50) return '#f59e0b';
    return '#ef4444';
  }

  get strokeDash(): string {
    const pct = Math.min(100, Math.max(0, this.overallScore));
    const circ = 2 * Math.PI * 54;
    return `${(pct / 100) * circ} ${circ}`;
  }

  get skillGaps(): { skill: string; analyzed: number; tested: number; delta: number }[] {
    return this.quizResult?.skillGapAnalysis ?? [];
  }

  get gapBelow(): { skill: string; analyzed: number; tested: number; delta: number }[] {
    return this.skillGaps.filter(g => g.delta <= -10);
  }

  get gapAbove(): { skill: string; analyzed: number; tested: number; delta: number }[] {
    return this.skillGaps.filter(g => g.delta >= 10);
  }

  exportPdf(): void {
    if (this.exportingPdf) return;
    this.exportingPdf = true;

    const user = this.authService.getCurrentUser();
    if (!user?.id) {
      this.exportingPdf = false;
      this.usePrintFallback();
      return;
    }

    this.benchmarkService.downloadReportResponse(String(user.id)).subscribe({
      next: async (response: any) => {
        try {
          const payload = response.body;
          if (payload && payload.size > 0 && this.benchmarkService.isPdfResponse(response, 'report.pdf')) {
            this.downloadBlob(payload, `talentpredict-tech-${new Date().toISOString().slice(0, 10)}.pdf`);
            this.notify.success('Rapport PDF téléchargé.');
          } else {
            this.usePrintFallback();
          }
        } finally {
          this.exportingPdf = false;
        }
      },
      error: () => {
        this.exportingPdf = false;
        this.usePrintFallback();
      }
    });
  }

  private usePrintFallback(): void {
    this.notify.info('Ouverture de la fenêtre d\'impression pour le PDF.');
    setTimeout(() => window.print(), 300);
  }

  private downloadBlob(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { window.URL.revokeObjectURL(url); a.remove(); }, 1000);
  }

  retakeTest(): void { this.router.navigate(['/competences']); }
  goToMesResultats(): void { this.router.navigate(['/mes-resultats']); }

  getScoreClass(score: number): string {
    if (score >= 75) return 'high';
    if (score >= 50) return 'mid';
    return 'low';
  }
}
