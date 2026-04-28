import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { SoftSkillsService } from '../../../evaluation/services/soft-skills.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes-resultats',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './mes-resultats.component.html',
  styleUrls: ['./mes-resultats.component.scss']
})
export class MesResultatsComponent implements OnInit {
  Math = Math;
  private router = inject(Router);
  private authService = inject(AuthService);
  private skillsService = inject(SkillsService);
  private softSkillsService = inject(SoftSkillsService);
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

  // Interview data
  voiceResult: any = null;
  showVoiceInterview = true;

  get isLocked(): boolean {
    // If no voiceResult exists in sessionStorage or from backend, the page is locked
    return !this.voiceResult;
  }

  // LinkedIn analysis from profile
  linkedinUrl = '';

  // New states
  shareableLinkVisible = false;
  isProfilePublic = false;

  get formattedTechScore(): number {
    let score = this.latestTechTest?.overall_score ?? 0;
    if (score <= 1 && score > 0) score *= 100;
    return Math.round(score * 10) / 10;
  }

  get formattedSoftScore(): number {
    let score = this.softResult?.overallScore ?? 0;
    if (score <= 10 && score > 0) score *= 10;
    return Math.round(score * 10) / 10;
  }

  // Overall readiness
  get overallReadiness(): number {
    if (this.isLocked) return 0;
    const techScore = this.formattedTechScore;
    const softScore = this.formattedSoftScore;
    const voiceScore = this.voiceResult?.overall_score ?? 0;

    let total = 0;
    let count = 0;
    if (techScore > 0) { total += techScore; count++; }
    if (softScore > 0) { total += softScore; count++; }
    if (voiceScore > 0) { total += voiceScore; count++; }

    return count > 0 ? Math.round(total / count) : 0;
  }

  get readinessLabel(): string {
    if (this.isLocked) return 'Complétez votre entretien pour débloquer vos résultats';
    const r = this.overallReadiness;
    if (r >= 80) return 'Prêt pour un entretien senior';
    if (r >= 65) return 'Profil solide — quelques axes à consolider';
    if (r >= 50) return 'Profil en développement';
    return 'Débutez votre parcours d\'évaluation';
  }

  get readinessColor(): string {
    if (this.isLocked) return '#94a3b8'; // Slate 400
    const r = this.overallReadiness;
    if (r >= 80) return '#22c55e';
    if (r >= 50) return '#f59e0b';
    return '#ef4444';
  }

  get strokeDash(): string {
    const pct = Math.min(100, Math.max(0, this.overallReadiness));
    const circ = 2 * Math.PI * 54;
    return `${(pct / 100) * circ} ${circ}`;
  }

  get techGaps(): string[] {
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
    collaboration: '🤝', ownership: '🎯', leadership: '👑', adaptability: '🌱', problem_solving: '🧩'
  };

  get pcmType(): string {
    return this.softResult?.personalityType ?? '';
  }

  get pcmDescription(): string {
    const type = this.pcmType.toLowerCase();
    if (type.includes('analyseur')) return 'Logique, structure et décision basée sur les faits.\nCherche l\'efficacité.';
    if (type.includes('persévérant') || type.includes('perseverant')) return 'Convictions fortes, engagement et sens des responsabilités.\nRecherche le sens.';
    if (type.includes('empathique')) return 'Écoute active, sensibilité relationnelle et coopération.\nPrivilégie l\'harmonie.';
    if (type.includes('énergiseur') || type.includes('energiseur')) return 'Spontanéité, énergie sociale et communication vivante.\nRecherche le plaisir.';
    if (type.includes('imagineur')) return 'Réflexion profonde, calme et vision imaginative.\nA besoin de solitude.';
    if (type.includes('promoteur')) return 'Orientation action, adaptation rapide et impact concret.\nRecherche le défi.';
    return 'Profil en attente d\'analyse détaillée.';
  }

  // Career Match data
  careerMatches = [
    { role: 'Frontend Developer', match: 87, gaps: ['Angular Advanced', 'Leadership'], reason: 'Excellente maîtrise de l\'écosystème frontend avec une base technique solide.' },
    { role: 'Full Stack Developer', match: 72, gaps: ['Node.js', 'System Design', 'Communication'], reason: 'Compétences polyvalentes, nécessite une montée en puissance sur le backend.' },
    { role: 'Tech Lead', match: 55, gaps: ['Team Management', 'Architecture', 'Agile'], reason: 'Potentiel identifié, mais nécessite plus d\'expérience en gestion d\'équipe.' }
  ];

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser?.id) return;
    const userId = String(this.currentUser.id);

    // 1. Check Voice Interview First (The Lock)
    const vCtx = sessionStorage.getItem('voiceInterviewResult');
    if (vCtx) {
      try { 
        this.voiceResult = JSON.parse(vCtx); 
        this.showVoiceInterview = false; 
      } catch {}
    }

    try {
      const cached = sessionStorage.getItem('userProfileUrls');
      if (cached) {
        const urls = JSON.parse(cached);
        this.linkedinUrl = urls.linkedinUrl ?? '';
      }
    } catch {}

    this.skillsService.getUserSkills(userId).subscribe({
      next: (skills) => {
        this.techSkills = skills
          .filter(s => s.type === 'TECH' || (s.type as string) === 'TECH')
          .sort((a: any, b: any) => (b.niveau ?? 0) - (a.niveau ?? 0))
          .map(s => ({
            ...s,
            delta: Math.floor(Math.random() * 3) - 1,
            score100: Math.round(((s.niveau ?? 0) / 5) * 100)
          }))
          .slice(0, 6);
        this.loadingTech = false;
      },
      error: () => { this.loadingTech = false; }
    });

    if (!this.latestTechTest) {
      const storedTech = sessionStorage.getItem('latestTechResult');
      if (storedTech) {
        try { this.latestTechTest = JSON.parse(storedTech); } catch {}
      }
    }

    const stored = sessionStorage.getItem('softSkillsResult');
    if (stored) {
      try { this.softResult = JSON.parse(stored); } catch {}
    }
    this.softSkillsService.getLastAnalysis().subscribe({
      next: (res) => { if (res) this.softResult = res; this.loadingSoft = false; },
      error: () => { this.loadingSoft = false; }
    });

    const ctx = sessionStorage.getItem('techIntakeContext');
    if (ctx) {
      try { this.githubResult = JSON.parse(ctx)?.githubResult ?? null; } catch {}
    }
  }

  getSoftSkillEntries(): { name: string; score: number, delta: number }[] {
    if (!this.softResult?.mergedSoftSkills) return [];
    return Object.entries(this.softResult.mergedSoftSkills)
      .sort((a: any, b: any) => b[1] - a[1])
      .map(([name, score]) => ({ 
        name, 
        score: Number(score),
        delta: Math.floor(Math.random() * 3) - 1 // Mock delta
      }));
  }

  // --- Radar Chart Helpers ---
  get radarPolygonPoints(): string {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0) return '';
    const cx = 130, cy = 130, radius = 90;
    
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
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0) return [];
    const cx = 130, cy = 130, radius = 90;
    
    return entries.map((_, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      return {
        x2: cx + radius * Math.cos(angle),
        y2: cy + radius * Math.sin(angle)
      };
    });
  }

  getRadarGridPoints(level: number): string {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0) return '';
    const cx = 130, cy = 130, radius = 90;
    return entries.map((_, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      const x = cx + radius * level * Math.cos(angle);
      const y = cy + radius * level * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  }

  getRadarPointX(score: number, index: number, total: number): number {
    const cx = 130, radius = 90;
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return cx + radius * (score / 10) * Math.cos(angle);
  }

  getRadarPointY(score: number, index: number, total: number): number {
    const cy = 130, radius = 90;
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    return cy + radius * (score / 10) * Math.sin(angle);
  }

  get radarLabels(): { text: string; x: number; y: number; anchor: string }[] {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0) return [];
    const cx = 130, cy = 130, radius = 110; 
    
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
    if (pct >= 80) return '#22c55e';
    if (pct >= 50) return '#f59e0b';
    return '#ef4444';
  }
  
  getDotColorClass(score100: number): string {
    if (score100 >= 80) return 'dot-green';
    if (score100 >= 50) return 'dot-orange';
    return 'dot-red';
  }

  toggleVoiceInterview() {
    this.showVoiceInterview = !this.showVoiceInterview;
  }
  
  toggleShareProfile() {
    this.shareableLinkVisible = !this.shareableLinkVisible;
  }
  
  copyShareLink() {
    navigator.clipboard.writeText(window.location.origin + '/public/profile/' + this.currentUser?.id);
    this.notify.success('Lien copié dans le presse-papiers');
  }

  exportTechPdf(): void {
    this.notify.info('Export Tech PDF en cours…');
    this.router.navigate(['/competences/results']);
  }

  exportSoftPdf(): void {
    this.notify.info('Export Soft Skills PDF en cours…');
    this.router.navigate(['/evaluation/results']);
  }

  exportVoicePdf(): void {
    this.notify.info('Génération du rapport IA en cours...');
    setTimeout(() => {
      window.print();
    }, 500);
  }

  exportGlobalPdf(): void {
    this.notify.info('Génération du rapport Global en cours...');
    setTimeout(() => {
      window.print();
    }, 500);
  }

  goToTech(): void { this.router.navigate(['/competences']); }
  goToSoft(): void { this.router.navigate(['/evaluation/intro']); }
  goToVoiceInterview(): void { this.router.navigate(['/skill-test/voice-interview']); }
  goToProgress(): void { this.router.navigate(['/competences/progress']); }
}

