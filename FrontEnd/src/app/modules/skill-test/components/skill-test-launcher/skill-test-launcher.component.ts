import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { TestApiService } from '../../services/test-api.service';
import { TestStateService } from '../../services/test-state.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { SkillResponse } from '../../../skills/models/skill.model';

@Component({
  selector: 'app-skill-test-launcher',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './skill-test-launcher.component.html',
  styleUrl: './skill-test-launcher.component.scss'
})
export class SkillTestLauncherComponent implements OnInit {
  private auth = inject(AuthService);
  private testApi = inject(TestApiService);
  private state = inject(TestStateService);
  private router = inject(Router);
  private notify = inject(NotificationService);
  private skillsService = inject(SkillsService);
  private cdr = inject(ChangeDetectorRef);

  techSkills: SkillResponse[] = [];
  loadingSkills = true;
  skillsError = false;
  level = 'INTERMEDIATE';
  loading = false;

  readonly levelLabels: Record<string, string> = {
    BEGINNER: 'Débutant',
    INTERMEDIATE: 'Intermédiaire',
    ADVANCED: 'Avancé',
    EXPERT: 'Expert'
  };

  ngOnInit(): void {
    const user = this.auth.getCurrentUser();
    if (!user?.id) {
      this.loadingSkills = false;
      this.skillsError = true;
      this.cdr.markForCheck();
      return;
    }
    this.skillsService.getUserSkills(String(user.id)).subscribe({
      next: (skills) => {
        // Only keep TECH skills, sorted by level descending
        this.techSkills = skills
          .filter(s => s.type === 'TECH' || (s.type as string) === 'TECH')
          .sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0));
        this.loadingSkills = false;
        // Auto-detect level from highest skill
        if (this.techSkills.length > 0) {
          const avgLevel = this.techSkills.slice(0, 5)
            .reduce((sum, s) => sum + (s.niveau ?? 1), 0) / Math.min(5, this.techSkills.length);
          if (avgLevel >= 4.5) this.level = 'EXPERT';
          else if (avgLevel >= 3) this.level = 'ADVANCED';
          else if (avgLevel >= 2) this.level = 'INTERMEDIATE';
          else this.level = 'BEGINNER';
        }
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadingSkills = false;
        this.skillsError = true;
        this.cdr.markForCheck();
      }
    });
  }

  getLevelDots(niveau: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  private pickRandomQuestionCount(): number {
    const skillsFactor = Math.min(3, Math.floor(this.techSkills.length / 4));
    const min = 6 + skillsFactor;
    const max = 12 + skillsFactor;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  start(): void {
    const user = this.auth.getCurrentUser();
    if (!user?.id) {
      this.notify.warning('Connexion requise.');
      return;
    }
    if (this.techSkills.length === 0) {
      this.notify.warning('Aucune compétence technique trouvée. Analysez d\'abord votre profil GitHub.');
      return;
    }

    const skills = this.techSkills.map(s => s.nom);
    const skillScores: Record<string, number> = {};
    this.techSkills.forEach(s => {
      skillScores[s.nom] = ((s.niveau ?? 1) / 5) * 100;
    });
    const questionCount = this.pickRandomQuestionCount();

    this.loading = true;
    this.cdr.markForCheck();
    this.testApi.generateTest({
      skills,
      level: this.level,
      candidate_id: String(user.id),
      skill_scores: skillScores,
      question_count: questionCount
    }).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.cdr.markForCheck();
        const payload = res?.data ?? res;
        const questions = Array.isArray(payload?.questions) ? payload.questions : [];
        const testId = String(payload?.test_id ?? payload?.testId ?? '').trim();

        if (questions.length === 0) {
          this.notify.warning('Le test a ete genere, mais aucune question valide n a ete retournee. Reessayez.');
          return;
        }

        const safeTestId = testId || `local-${Date.now()}`;
        this.state.setSession(safeTestId, questions, this.level, String(user.id), skillScores);
        void this.router.navigate(['/skill-test', 'quiz']);
      },
      error: err => {
        this.loading = false;
        this.cdr.markForCheck();
        this.notify.error(err?.error?.message ?? 'Échec de génération du test.');
      }
    });
  }

}
