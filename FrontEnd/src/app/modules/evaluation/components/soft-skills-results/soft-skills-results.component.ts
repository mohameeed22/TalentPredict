import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SoftSkillsService } from '../../services/soft-skills.service';
import { SoftSkillsResult } from '../../models/soft-skills.model';

type TrainingTab = 'online' | 'internal' | 'all';

interface FormationItem {
  name: string;
  platform: string;
  duration: string;
  level: string;
  link: string;
  icon: string;
  channel: 'online' | 'internal';
}

@Component({
  selector: 'app-soft-skills-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soft-skills-results.component.html',
  styleUrls: ['./soft-skills-results.component.scss']
})
export class SoftSkillsResultsComponent implements OnInit {

  result: SoftSkillsResult | null = null;
  activeTrainingTab: TrainingTab = 'all';

  readonly skillIcons: Record<string, string> = {
    communication: '💬', discipline: '⏰', curiosity: '🔍',
    collaboration: '🤝', ownership: '🎯', leadership: '👑'
  };

  readonly skillLabels: Record<string, string> = {
    communication: 'Communication',
    discipline: 'Discipline',
    curiosity: 'Curiosite',
    collaboration: 'Collaboration',
    ownership: 'Ownership',
    leadership: 'Leadership'
  };

  readonly personalityCards = [
    { key: 'analyseur', label: 'Analyseur', icon: '🧠', desc: 'Logique et structure, decision fondee sur les faits.' },
    { key: 'perseverant', label: 'Persévérant', icon: '🛡️', desc: 'Valeurs fortes, engagement et constance.' },
    { key: 'empathique', label: 'Empathique', icon: '❤️', desc: 'Relationnel, ecoute active et cooperation.' },
    { key: 'energiseur', label: 'Énergiseur', icon: '⚡', desc: 'Spontaneite, energie sociale et impact rapide.' },
    { key: 'imagineur', label: 'Imagineur', icon: '🌙', desc: 'Introspection, calme et vision creative.' },
    { key: 'promoteur', label: 'Promoteur', icon: '🚀', desc: 'Action, adaptabilite et orientation resultat.' }
  ];

  readonly formationsDb: Record<string, FormationItem[]> = {
    communication: [
      { name: 'Communication professionnelle', platform: 'Coursera', duration: '4 semaines', level: 'Intermediaire', link: 'https://www.coursera.org', icon: '💬', channel: 'online' },
      { name: 'Prise de parole en public', platform: 'Udemy', duration: '6h', level: 'Tous niveaux', link: 'https://www.udemy.com', icon: '🎤', channel: 'online' },
      { name: 'Atelier CNV', platform: 'Interne RH', duration: '2 jours', level: 'Tous niveaux', link: '#', icon: '🤝', channel: 'internal' }
    ],
    discipline: [
      { name: 'Time Management Mastery', platform: 'Udemy', duration: '5h', level: 'Tous niveaux', link: 'https://www.udemy.com', icon: '⏰', channel: 'online' },
      { name: 'Productivite personnelle', platform: 'LinkedIn Learning', duration: '2h30', level: 'Debutant', link: 'https://www.linkedin.com/learning', icon: '📅', channel: 'online' },
      { name: 'Agile et Scrum', platform: 'Interne IT', duration: '3 jours', level: 'Intermediaire', link: '#', icon: '🔄', channel: 'internal' }
    ],
    curiosity: [
      { name: 'Learning How to Learn', platform: 'Coursera', duration: '4 semaines', level: 'Tous niveaux', link: 'https://www.coursera.org', icon: '🧠', channel: 'online' },
      { name: 'Design Thinking', platform: 'Udemy', duration: '8h', level: 'Intermediaire', link: 'https://www.udemy.com', icon: '💡', channel: 'online' },
      { name: 'Innovation Lab', platform: 'Interne Innovation', duration: '2 jours', level: 'Tous niveaux', link: '#', icon: '🚀', channel: 'internal' }
    ],
    collaboration: [
      { name: 'Travail collaboratif', platform: 'Coursera', duration: '3 semaines', level: 'Intermediaire', link: 'https://www.coursera.org', icon: '👥', channel: 'online' },
      { name: 'Team Building', platform: 'Interne RH', duration: '1 jour', level: 'Tous niveaux', link: '#', icon: '⚽', channel: 'internal' }
    ],
    ownership: [
      { name: 'Taking Initiative and Ownership', platform: 'LinkedIn Learning', duration: '1h30', level: 'Tous niveaux', link: 'https://www.linkedin.com/learning', icon: '🎯', channel: 'online' },
      { name: 'Programme Intrapreneuriat', platform: 'Interne RH', duration: '3 jours', level: 'Avance', link: '#', icon: '🏆', channel: 'internal' }
    ],
    leadership: [
      { name: 'Leadership et Influence', platform: 'Coursera', duration: '6 semaines', level: 'Avance', link: 'https://www.coursera.org', icon: '👑', channel: 'online' },
      { name: 'Emerging Leaders Program', platform: 'Udemy', duration: '12h', level: 'Intermediaire', link: 'https://www.udemy.com', icon: '📈', channel: 'online' },
      { name: 'Coaching Leadership', platform: 'Interne Coaching', duration: '6 seances', level: 'Tous niveaux', link: '#', icon: '🎯', channel: 'internal' }
    ]
  };

  constructor(
    private router: Router,
    private softSkillsService: SoftSkillsService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.result = nav?.extras?.state?.['result'] ?? null;
  }

  ngOnInit(): void {
    if (!this.result) {
      this.softSkillsService.getLastAnalysis().subscribe({
        next: (res) => this.result = this.withFallbacks(res),
        error: () => this.router.navigate(['/evaluation'])
      });
      return;
    }

    this.result = this.withFallbacks(this.result);
  }

  getSkillEntries(): { name: string; score: number }[] {
    if (!this.result?.mergedSoftSkills) return [];
    return Object.entries(this.result.mergedSoftSkills)
      .sort((a, b) => b[1] - a[1])
      .map(([name, score]) => ({ name, score }));
  }

  getSourceScore(source: 'cv' | 'github' | 'pcm'): number {
    return this.result?.sourceData?.[source]?.overall_score ?? 0;
  }

  getDisplaySkillName(skill: string): string {
    return this.skillLabels[skill] || skill;
  }

  getScoreColor(score: number): string {
    if (score >= 7.5) return '#2ecc71';
    if (score >= 5)   return '#f39c12';
    return '#e74c3c';
  }

  getActivePersonalityKey(): string {
    return this.normalizePersonality((this.result as any)?.personalityType || '');
  }

  goToReevaluate(): void {
    this.router.navigate(['/evaluation/soft-skills']);
  }

  setTrainingTab(tab: TrainingTab): void {
    this.activeTrainingTab = tab;
  }

  getFormationEntries(): Array<{ skill: string; items: FormationItem[] }> {
    if (!this.result) return [];
    const weaknesses = (this.result.top3Weaknesses || [])
      .map((item) => item.toLowerCase().trim())
      .filter((item) => item.length > 0);

    return weaknesses
      .map((skill) => ({ skill, items: this.getFormationsForSkill(skill) }))
      .filter((entry) => entry.items.length > 0);
  }

  private getFormationsForSkill(skill: string): FormationItem[] {
    const items = this.formationsDb[skill] || [];
    if (this.activeTrainingTab === 'all') return items;
    return items.filter((item) => item.channel === this.activeTrainingTab);
  }

  private withFallbacks(input: SoftSkillsResult): SoftSkillsResult {
    const personalityType = this.normalizeToPcmType((input as any).personalityType || (input as any).personality_type || '');
    const personalityDescription = (input as any).personalityDescription || (input as any).personality_description || '';

    const merged = Object.keys(input.mergedSoftSkills || {}).length
      ? input.mergedSoftSkills
      : {
          communication: 7,
          discipline: 7,
          curiosity: 7,
          collaboration: 7,
          ownership: 7,
          leadership: 7
        };

    const strengths = input.top3Strengths?.length
      ? input.top3Strengths
      : Object.entries(merged).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([name]) => name);

    const weaknesses = input.top3Weaknesses?.length
      ? input.top3Weaknesses
      : Object.entries(merged).sort((a, b) => a[1] - b[1]).slice(0, 3).map(([name]) => name);

    const overall = input.overallScore || this.average(Object.values(merged));

    return {
      ...input,
      overallScore: overall,
      personalityType,
      personalityDescription,
      mergedSoftSkills: merged,
      top3Strengths: strengths,
      top3Weaknesses: weaknesses,
      summary: input.summary || 'Analyse completee avec succes par le workflow n8n.',
      careerAdvice: input.careerAdvice || 'Continuez a consolider vos points forts et ciblez vos axes d\'amelioration.',
      sourceData: {
        cv: { overall_score: input.sourceData?.cv?.overall_score ?? 0 },
        github: { overall_score: input.sourceData?.github?.overall_score ?? 0 },
        pcm: { overall_score: input.sourceData?.pcm?.overall_score ?? 0 }
      }
    };
  }

  private average(values: number[]): number {
    if (!values.length) return 0;
    return Number((values.reduce((sum, v) => sum + v, 0) / values.length).toFixed(1));
  }

  private normalizePersonality(value: string): string {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
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
}
