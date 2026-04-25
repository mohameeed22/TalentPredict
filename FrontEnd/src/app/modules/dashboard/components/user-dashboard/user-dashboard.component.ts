import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { DashboardService, EmployeeDashboardResponse } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { PredictionResponse } from '../../models/prediction.model';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  Math = Math;
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);
  private notify = inject(NotificationService);

  dashboardData: EmployeeDashboardResponse | null = null;
  loading = true;
  error: string | null = null;

  // Added Mock / Processed Properties for redesign
  currentDate = new Date();
  
  // Stats
  streakHebdo = 3;
  rangPlateforme = 15;
  competencesMaitrisees = 8;
  
  // Radar state
  radarToggle: 'tous' | 'tech' | 'soft' = 'tous';
  
  // Weekly AI Insight
  weeklyInsight = {
    skillChange: "Forte progression en Communication (+15pts)",
    formationProgress: "Vous avancez bien sur 'Angular Avancé' (60%)",
    recommendation: "Pensez à pratiquer vos skills en Leadership cette semaine."
  };

  // Prediction IA parsed
  parsedPrediction: any = null;

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      const userId = String(currentUser.id);
      this.dashboardService.getEmployeeDashboard(userId).pipe(
        timeout(15000)
      ).subscribe({
        next: (data) => {
          this.dashboardData = data;
          this.processData();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Impossible de charger les données du tableau de bord.';
          this.loading = false;
        }
      });
    } else {
      this.error = 'Utilisateur non authentifié.';
      this.loading = false;
    }
  }

  get displayName(): string {
    if (this.dashboardData) {
      return `${this.dashboardData.firstName} ${this.dashboardData.lastName}`;
    }
    const user = this.authService.getCurrentUser();
    return user ? `${user.prenom} ${user.nom}` : '';
  }

  // 1. Hero MBTI
  get pcmType(): string {
    const tests = this.dashboardData?.testsRecents ?? [];
    const lastWithPcm = tests.find(t => t.personalityType);
    return lastWithPcm?.personalityType ?? 'Analyseur';
  }
  
  get pcmDescription(): string {
    const type = this.pcmType.toLowerCase();
    if (type.includes('analyseur')) return 'Logique et efficacité';
    if (type.includes('persévérant') || type.includes('perseverant')) return 'Convictions et engagement';
    if (type.includes('empathique')) return 'Écoute et harmonie';
    if (type.includes('énergiseur') || type.includes('energiseur')) return 'Spontanéité et énergie';
    if (type.includes('imagineur')) return 'Calme et imagination';
    if (type.includes('promoteur')) return 'Action et impact';
    return 'Profil en cours d\'analyse';
  }

  // 2. Stats formatting (Fix 0.77 -> 77% and rounding)
  formatPercent(val: number | undefined | null): number {
    if (val == null) return 0;
    let v = val;
    if (v <= 1 && v > 0) v *= 100;
    return Math.round(v * 10) / 10;
  }

  get scoreMoyen(): number {
    return this.formatPercent(this.dashboardData?.scoreEvaluationMoyen);
  }
  
  get testsCompletes(): number {
    return this.dashboardData?.nombreTests ?? 0;
  }

  get formationsActives(): number {
    return this.dashboardData?.nombreFormationsEnCours ?? 0;
  }

  // Deduplicate formations
  get uniqueFormationsRecentes(): any[] {
    const formations = this.dashboardData?.formationsRecentes ?? [];
    const unique = new Map();
    for (const f of formations) {
      if (!unique.has(f.titre)) unique.set(f.titre, f);
    }
    return Array.from(unique.values());
  }

  // 3. Line chart data (Score evolution)
  get scoreEvolutionPoints(): { x: number, y: number, date: Date | string, score: number }[] {
    const tests = [...(this.dashboardData?.testsRecents ?? [])].reverse();
    if (tests.length === 0) return [];
    
    // Scale X: 0 to 300, Y: 0 to 100 (inverted for SVG so 100 is 0, 0 is 100)
    // SVG width 300, height 120
    const w = 300;
    const h = 120;
    
    if (tests.length === 1) {
      const score = this.formatPercent(tests[0].overallScore);
      return [{ x: w/2, y: h - (score/100 * h), date: tests[0].dateTest, score }];
    }
    
    return tests.map((t, i) => {
      const score = this.formatPercent(t.overallScore);
      return {
        x: (i / (tests.length - 1)) * w,
        y: h - (score / 100 * h),
        date: t.dateTest,
        score
      };
    });
  }

  get scoreEvolutionPath(): string {
    const pts = this.scoreEvolutionPoints;
    if (pts.length === 0) return '';
    return 'M ' + pts.map(p => `${p.x},${p.y}`).join(' L ');
  }

  // 4. Career Match
  careerMatches = [
    { role: 'Frontend Developer', match: 87, gaps: ['Angular Adv.', 'Leadership'] },
    { role: 'Full Stack', match: 72, gaps: ['Node.js', 'System Design'] },
    { role: 'Tech Lead', match: 55, gaps: ['Team Management'] }
  ];

  // 5. Radar
  get radarEntries(): {name: string, score: number, type: string}[] {
    let entries: {name: string, score: number, type: string}[] = [];
    
    // Add soft skills from latest test
    const latestTest = this.dashboardData?.testsRecents?.[0];
    if (latestTest?.softSkillsScores) {
      Object.entries(latestTest.softSkillsScores).forEach(([k, v]) => {
        entries.push({ name: k, score: this.formatPercent(v), type: 'soft' });
      });
    } else {
      // Mock soft if none
      entries.push({name: 'Communication', score: 80, type: 'soft'});
      entries.push({name: 'Leadership', score: 60, type: 'soft'});
      entries.push({name: 'Adaptabilité', score: 75, type: 'soft'});
    }

    // Add tech skills
    const tech = this.dashboardData?.topSkills ?? [];
    tech.forEach(t => {
      entries.push({ name: t.nom, score: (t.niveau/5)*100, type: 'tech' });
    });

    if (entries.length === 0) return [];
    
    // Filter
    if (this.radarToggle === 'tech') entries = entries.filter(e => e.type === 'tech');
    if (this.radarToggle === 'soft') entries = entries.filter(e => e.type === 'soft');

    return entries.slice(0, 6);
  }

  get radarTop3(): string[] {
    return [...this.radarEntries].sort((a,b)=>b.score - a.score).slice(0,3).map(e=>e.name);
  }
  get radarBottom3(): string[] {
    return [...this.radarEntries].sort((a,b)=>a.score - b.score).slice(0,3).map(e=>e.name);
  }

  get radarPolygonPoints(): string {
    const entries = this.radarEntries;
    if (entries.length === 0) return '';
    const cx = 100, cy = 100, radius = 80;
    return entries.map((entry, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      const r = radius * (entry.score / 100);
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(' ');
  }

  getRadarGridPoints(level: number): string {
    const entries = this.radarEntries;
    if (entries.length === 0) return '';
    const cx = 100, cy = 100, radius = 80;
    return entries.map((_, i) => {
      const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
      return `${cx + radius * level * Math.cos(angle)},${cy + radius * level * Math.sin(angle)}`;
    }).join(' ');
  }

  get radarLabels(): { text: string; x: number; y: number; anchor: string }[] {
    const entries = this.radarEntries;
    const cx = 100, cy = 100, radius = 95; 
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

  // 6. Skill Momentum
  get skillMomentum() {
    return [
      { name: 'Angular', current: 85, delta: 12, dir: 'up' },
      { name: 'Communication', current: 78, delta: 5, dir: 'up' },
      { name: 'Leadership', current: 60, delta: -3, dir: 'down' },
      { name: 'Node.js', current: 70, delta: 0, dir: 'flat' }
    ];
  }

  // 7. Last 3 Tests
  get last3Tests() {
    return (this.dashboardData?.testsRecents ?? []).slice(0, 3);
  }
  
  toggleTestCollapse(test: any) {
    test.collapsed = !test.collapsed;
  }

  // 8. Badges & Feed
  badges = [
    { icon: '🏆', name: 'Premier test', date: '12 Avr' },
    { icon: '🔥', name: 'Streak 3 sem.', date: '15 Avr' },
    { icon: '🚀', name: 'Top 10%', date: 'Hier' }
  ];
  lockedBadges = [
    { icon: '⭐', name: 'Score > 90%', condition: 'Obtenir 90% sur une comp.' },
    { icon: '📚', name: '1ère formation', condition: 'Terminer une formation' }
  ];
  
  feed = [
    { icon: '✅', text: 'Test technique Angular complété', date: 'Il y a 2h' },
    { icon: '🚀', text: 'Badge "Top 10%" obtenu', date: 'Hier' },
    { icon: '📚', text: 'Formation "Leadership" débutée', date: 'Il y a 2j' },
    { icon: '👁️', text: 'Votre profil a été consulté par votre manager', date: 'Il y a 3j', highlight: true }
  ];

  private processData() {
    // Parse Prediction IA if it exists
    const pred = this.dashboardData?.dernierePrediction?.analyse;
    if (pred) {
      // Very basic parsing to remove raw keys
      this.parsedPrediction = {
        summary: pred.replace(/TYPE_PERSONNALITE:|SCORES_SOFT_SKILLS:/g, '').trim()
      };
    }
  }
}
