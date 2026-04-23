import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { SoftSkillsService } from '../../../evaluation/services/soft-skills.service';
import { BenchmarkService } from '../../../skill-test/services/benchmark.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-mes-resultats',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mes-resultats.component.html',
  styleUrl: './mes-resultats.component.scss'
})
export class MesResultatsComponent implements OnInit {
  Math = Math;
  private router = inject(Router);
  private authService = inject(AuthService);
  private skillsService = inject(SkillsService);
  private softSkillsService = inject(SoftSkillsService);
  private benchmarkService = inject(BenchmarkService);
  private notify = inject(NotificationService);

  currentUser: any;
  loadingTech = true;
  loadingSoft = true;

  // Tech data
  techSkills: any[] = [];
  latestTechTest: any = null;
  githubResult: any = null;

  // Soft data
  softResult: any = null;

  // Voice Interview data
  voiceResult: any = null;

  // LinkedIn analysis from profile
  linkedinUrl = '';

  // Overall readiness
  get overallReadiness(): number {
    const techScore = this.latestTechTest?.overall_score ?? 0;
    const softScore = (this.softResult?.overallScore ?? 0) * 10; // scale 0-10 → 0-100
    const voiceScore = this.voiceResult?.overall_score ?? 0;

    let total = 0;
    let count = 0;
    if (techScore > 0) { total += techScore; count++; }
    if (softScore > 0) { total += softScore; count++; }
    if (voiceScore > 0) { total += voiceScore; count++; }

    return count > 0 ? Math.round(total / count) : 0;
  }

  get readinessLabel(): string {
    const r = this.overallReadiness;
    if (r >= 80) return 'Prêt pour un entretien senior';
    if (r >= 65) return 'Profil solide — quelques axes à consolider';
    if (r >= 50) return 'Profil en développement';
    return 'Débutez votre parcours d\'évaluation';
  }

  get readinessColor(): string {
    const r = this.overallReadiness;
    if (r >= 80) return '#22c55e';
    if (r >= 65) return '#3b82f6';
    if (r >= 50) return '#f59e0b';
    return '#9ca3af';
  }

  get strokeDash(): string {
    const pct = Math.min(100, Math.max(0, this.overallReadiness));
    const circ = 2 * Math.PI * 54;
    return `${(pct / 100) * circ} ${circ}`;
  }

  get techGaps(): string[] {
    // From sessionStorage quiz result
    const ctx = sessionStorage.getItem('techIntakeContext');
    if (!ctx) return [];
    try {
      const parsed = JSON.parse(ctx);
      return parsed.githubResult?.data?.missing_claimed_skills ?? [];
    } catch { return []; }
  }

  get softGaps(): string[] {
    return this.softResult?.top3Weaknesses ?? [];
  }

  readonly softSkillIcons: Record<string, string> = {
    communication: '💬', discipline: '⏰', curiosity: '🔍',
    collaboration: '🤝', ownership: '🎯', leadership: '👑'
  };

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser?.id) return;

    const userId = String(this.currentUser.id);

    // Load LinkedIn URL from profile cache
    try {
      const cached = sessionStorage.getItem('userProfileUrls');
      if (cached) {
        const urls = JSON.parse(cached);
        this.linkedinUrl = urls.linkedinUrl ?? '';
      }
    } catch {}

    // Load tech skills
    this.skillsService.getUserSkills(userId).subscribe({
      next: (skills) => {
        this.techSkills = skills
          .filter(s => s.type === 'TECH' || (s.type as string) === 'TECH')
          .sort((a: any, b: any) => (b.niveau ?? 0) - (a.niveau ?? 0))
          .slice(0, 6);
        this.loadingTech = false;
      },
      error: () => { this.loadingTech = false; }
    });

    // Load latest tech test score from API
    this.benchmarkService.progress(userId).subscribe({
      next: (rows) => {
        if (rows.length > 0) {
          this.latestTechTest = [...rows]
            .sort((a: any, b: any) => new Date(b.taken_at).getTime() - new Date(a.taken_at).getTime())[0];
        }
      }
    });

    // Also try sessionStorage for tech test (fallback if API returns empty)
    if (!this.latestTechTest) {
      const storedTech = sessionStorage.getItem('latestTechResult');
      if (storedTech) {
        try { this.latestTechTest = JSON.parse(storedTech); } catch {}
      }
    }

    // Load soft skills from sessionStorage first, then API
    const stored = sessionStorage.getItem('softSkillsResult');
    if (stored) {
      try { this.softResult = JSON.parse(stored); } catch {}
    }
    this.softSkillsService.getLastAnalysis().subscribe({
      next: (res) => { if (res) this.softResult = res; this.loadingSoft = false; },
      error: () => { this.loadingSoft = false; }
    });

    // Load GitHub from session
    const ctx = sessionStorage.getItem('techIntakeContext');
    if (ctx) {
      try { this.githubResult = JSON.parse(ctx)?.githubResult ?? null; } catch {}
    }

    // Load Voice Interview from session
    const vCtx = sessionStorage.getItem('voiceInterviewResult');
    if (vCtx) {
      try { this.voiceResult = JSON.parse(vCtx); } catch {}
    }
  }

  getSoftSkillEntries(): { name: string; score: number }[] {
    if (!this.softResult?.mergedSoftSkills) return [];
    return Object.entries(this.softResult.mergedSoftSkills)
      .sort((a: any, b: any) => b[1] - a[1])
      .map(([name, score]) => ({ name, score: Number(score) }));
  }

  // --- Radar Chart Helpers ---
  get radarPolygonPoints(): string {
    const entries = this.getSoftSkillEntries().slice(0, 6);
    if (entries.length === 0) return '';
    const cx = 100, cy = 100, radius = 80;
    
    return entries.map((entry, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      const normalizedScore = Math.max(0.1, entry.score / 10);
      const r = radius * normalizedScore;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  }

  get radarAxisPoints(): { x2: number; y2: number }[] {
    const entries = this.getSoftSkillEntries().slice(0, 6);
    if (entries.length === 0) return [];
    const cx = 100, cy = 100, radius = 80;
    
    return entries.map((_, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      return {
        x2: cx + radius * Math.cos(angle),
        y2: cy + radius * Math.sin(angle)
      };
    });
  }

  getRadarGridPoints(level: number): string {
    const entries = this.getSoftSkillEntries().slice(0, 6);
    if (entries.length === 0) return '';
    const cx = 100, cy = 100, radius = 80;
    return entries.map((_, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      const x = cx + radius * level * Math.cos(angle);
      const y = cy + radius * level * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  }

  getRadarPointX(score: number, index: number, total: number): number {
    const cx = 100, radius = 80;
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return cx + radius * (score / 10) * Math.cos(angle);
  }

  getRadarPointY(score: number, index: number, total: number): number {
    const cy = 100, radius = 80;
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return cy + radius * (score / 10) * Math.sin(angle);
  }

  get radarLabels(): { text: string; x: number; y: number; anchor: string }[] {
    const entries = this.getSoftSkillEntries().slice(0, 6);
    if (entries.length === 0) return [];
    const cx = 100, cy = 100, radius = 95; // Slightly outside
    
    return entries.map((entry, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      
      let anchor = 'middle';
      if (Math.cos(angle) > 0.1) anchor = 'start';
      if (Math.cos(angle) < -0.1) anchor = 'end';

      return { text: entry.name, x, y, anchor };
    });
  }

  getScoreColor(score: number, max = 10): string {
    const pct = max === 10 ? score * 10 : score;
    if (pct >= 75) return '#22c55e';
    if (pct >= 50) return '#f59e0b';
    return '#ef4444';
  }

  exportTechPdf(): void {
    this.notify.info('Export Tech PDF en cours…');
    this.router.navigate(['/competences/results']);
  }

  exportSoftPdf(): void {
    this.notify.info('Export Soft Skills PDF en cours…');
    this.router.navigate(['/evaluation/results']);
  }

  goToTech(): void { this.router.navigate(['/competences']); }
  goToSoft(): void { this.router.navigate(['/evaluation/intro']); }
  goToVoiceInterview(): void { this.router.navigate(['/skill-test/voice-interview']); }
}
