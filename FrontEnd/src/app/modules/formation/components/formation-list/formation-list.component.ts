import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../services/formation.service';
import { FormationResponse, StatutFormation, TypeFormation } from '../../models/formation.model';
import { AuthService } from '../../../auth/services/auth.service';
import { Role } from '../../../auth/models/user.model';
import { SkillsService } from '../../../skills/services/skills.service';
import { TypeSkill } from '../../../skills/models/skill.model';
import { SoftSkillsService } from '../../../evaluation/services/soft-skills.service';
import { SoftSkillsResult } from '../../../evaluation/models/soft-skills.model';
import {
  CareerLearningPlanResponse,
  CareerService,
  LearningPlanRequest
} from '../../../career/services/career.service';
import { catchError, map, of } from 'rxjs';
import { forkJoin } from 'rxjs';
import { BiometricsService } from '../../../skill-test/services/biometrics.service';
import { ProctoringService } from '../../../skill-test/services/proctoring.service';
import { TestApiService } from '../../../skill-test/services/test-api.service';

type DeadlineRiskLevel = 'on-track' | 'at-risk' | 'late';

interface KanbanColumn {
  status: StatutFormation;
  title: string;
  subtitle: string;
}

interface ReviewDraft {
  reviewNote: string;
  nextAction: string;
}

interface WeeklyLearningGoalState {
  weeklyGoalHours: number;
  weeklyHoursByWeek: Record<string, number>;
}

interface QuizTemplateQuestion {
  key: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

interface MiniQuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formation-list.component.html',
  styleUrl: './formation-list.component.scss'
})
export class FormationListComponent implements OnInit, OnDestroy {
  private formationService = inject(FormationService);
  private authService = inject(AuthService);
  private skillsService = inject(SkillsService);
  private softSkillsService = inject(SoftSkillsService);
  private careerService = inject(CareerService);
  private biometrics = inject(BiometricsService);
  private proctoring = inject(ProctoringService);
  private testApi = inject(TestApiService);
  private currentUserId = '';

  readonly kanbanColumns: KanbanColumn[] = [
    {
      status: StatutFormation.PROPOSEE,
      title: 'Proposées',
      subtitle: 'Formations suggérées'
    },
    {
      status: StatutFormation.ACCEPTEE,
      title: 'Acceptées',
      subtitle: 'Prêtes à démarrer'
    },
    {
      status: StatutFormation.EN_COURS,
      title: 'En cours',
      subtitle: 'Exécution active'
    },
    {
      status: StatutFormation.TERMINEE,
      title: 'Terminées',
      subtitle: 'Objectifs atteints'
    },
    {
      status: StatutFormation.ANNULEE,
      title: 'Annulées',
      subtitle: 'A reprendre plus tard'
    }
  ];
  
  formations = signal<FormationResponse[]>([]);
  filteredFormations = signal<FormationResponse[]>([]);
  selectedFilter = signal<StatutFormation | 'ALL'>('ALL');
  loading = signal(false);
  error = signal<string | null>(null);

  draggedFormationId = signal<string | null>(null);
  statusActionLoadingId = signal<string | null>(null);
  boardMessage = signal<string | null>(null);
  boardError = signal<string | null>(null);

  reviewDrafts = signal<Record<string, ReviewDraft>>({});
  reviewSaving = signal<Record<string, boolean>>({});
  reviewMessage = signal<string | null>(null);
  reviewError = signal<string | null>(null);

  miniQuizOpen = signal<Record<string, boolean>>({});
  miniQuizAnswers = signal<Record<string, number[]>>({});
  miniQuizSubmitting = signal<Record<string, boolean>>({});
  miniQuizMessage = signal<string | null>(null);
  miniQuizError = signal<string | null>(null);
  miniQuizFraudVerdicts = signal<Record<string, Record<string, any>>>({});
  currentUserGamification = signal<{ xp: number; level: number } | null>(null);

  certificateUploadingId = signal<string | null>(null);
  certificateMessage = signal<string | null>(null);
  certificateError = signal<string | null>(null);

  weeklyGoalHours = signal(8);
  weeklyGoalInput = 8;
  weeklyLogInput = 1;
  weeklyHoursByWeek = signal<Record<string, number>>({});
  weeklyGoalNotice = signal<string | null>(null);

  learningPlan = signal<CareerLearningPlanResponse | null>(null);
  learningPlanLoading = signal(false);
  autoReplanLoading = signal(false);
  autoReplanHint = signal<string | null>(null);
  autoRoadmapSuggestions = signal<string[]>([]);
  lastGeneratedRole = signal<string>('');
  learningPlanError = signal<string | null>(null);
  detectedWeakSkills = signal<NonNullable<LearningPlanRequest['weakSkills']>>([]);
  courseActionLoadingKey = signal<string | null>(null);
  courseActionError = signal<string | null>(null);
  courseActionSuccess = signal<string | null>(null);
  private softWeakSkillSet = new Set<string>();

  // ── Recommendation filters ──────────────────────────────────────────────
  recoFilterSkill = signal<string>('ALL');
  recoFilterPriority = signal<string>('ALL');
  recoFilterPlatform = signal<string>('ALL');
  kanbanTypeFilter = signal<string>('ALL');

  targetRole = 'Software Engineer';
  experienceLevel: 'beginner' | 'junior' | 'mid' | 'senior' = 'junior';
  hoursPerDay = 1.5;
  preferredLanguage: 'en' | 'fr' | 'ar' = 'fr';
  learningStyle: 'video' | 'reading' | 'hands-on' | 'mixed' = 'mixed';
  timezone = 'UTC';

  readonly StatutFormation = StatutFormation;
  private readonly miniQuizPassingScore = 70;
  private readonly miniQuizTemplates: Record<'tech' | 'soft' | 'certification', QuizTemplateQuestion[]> = {
    tech: [
      {
        key: 't-1',
        prompt: 'Pour valider {topic}, quelle action démontre le mieux la maîtrise ?',
        options: [
          'Regarder uniquement les vidéos du cours',
          'Appliquer les concepts sur un cas concret et expliquer les choix techniques',
          'Lire le résumé final sans pratiquer',
          'Installer uniquement les outils'
        ],
        correctIndex: 1
      },
      {
        key: 't-2',
        prompt: 'Quel réflexe réduit le plus les erreurs en production sur {topic} ?',
        options: [
          'Ne pas tester pour aller plus vite',
          'Tester, vérifier les logs et documenter les changements',
          'Modifier directement en production',
          'Ignorer les conventions de code'
        ],
        correctIndex: 1
      },
      {
        key: 't-3',
        prompt: 'Quel indicateur montre que vous progressez réellement sur {topic} ?',
        options: [
          'Vous connaissez seulement le vocabulaire',
          'Vous pouvez corriger un bug et livrer une amélioration mesurable',
          'Vous avez ajouté le cours à vos favoris',
          'Vous avez lu les slides une fois'
        ],
        correctIndex: 1
      },
      {
        key: 't-4',
        prompt: 'Quel est le meilleur plan après la fin du cours {topic} ?',
        options: [
          'Ne rien pratiquer pendant plusieurs semaines',
          'Refaire un mini projet avec feedback et itérations',
          'Passer immédiatement à un autre sujet sans consolidation',
          'Supprimer les notes de cours'
        ],
        correctIndex: 1
      }
    ],
    soft: [
      {
        key: 's-1',
        prompt: 'Dans un échange difficile lié à {topic}, quelle approche est la plus efficace ?',
        options: [
          'Parler plus fort pour imposer votre point de vue',
          'Écouter activement, clarifier le besoin puis proposer une solution',
          'Éviter la discussion',
          'Répondre uniquement par message court'
        ],
        correctIndex: 1
      },
      {
        key: 's-2',
        prompt: 'Quel comportement renforce le plus la confiance de l’équipe ?',
        options: [
          'Ne jamais demander de feedback',
          'Partager l’avancement, les risques et demander un retour régulier',
          'Promettre des délais irréalistes',
          'Travailler en silo'
        ],
        correctIndex: 1
      },
      {
        key: 's-3',
        prompt: 'Pour progresser sur {topic}, quelle pratique hebdomadaire est recommandée ?',
        options: [
          'Aucune pratique, seulement de la théorie',
          'Mises en situation + auto-évaluation + feedback pair',
          'Copier des scripts standards sans adaptation',
          'Reporter les échanges importants'
        ],
        correctIndex: 1
      },
      {
        key: 's-4',
        prompt: 'Quel signe indique que {topic} est acquis ?',
        options: [
          'Vous évitez les interactions critiques',
          'Vous obtenez des résultats plus fluides dans des contextes variés',
          'Vous mémorisez seulement des phrases types',
          'Vous stoppez les rétrospectives'
        ],
        correctIndex: 1
      }
    ],
    certification: [
      {
        key: 'c-1',
        prompt: 'Avant de passer la certification {topic}, quelle stratégie est la plus robuste ?',
        options: [
          'Réviser uniquement les dernières 24h',
          'Faire des examens blancs et corriger les lacunes ciblées',
          'Ignorer le syllabus officiel',
          'Mémoriser sans comprendre les cas pratiques'
        ],
        correctIndex: 1
      },
      {
        key: 'c-2',
        prompt: 'Quel est un bon indicateur de préparation à l’examen ?',
        options: [
          'Résultats stables au-dessus du seuil sur plusieurs tests blancs',
          'Un seul test réussi par hasard',
          'Aucune simulation chronométrée',
          'Aucune revue des erreurs'
        ],
        correctIndex: 0
      },
      {
        key: 'c-3',
        prompt: 'Après un échec sur une question type, que faut-il faire ?',
        options: [
          'Ignorer l’erreur et continuer',
          'Analyser la cause, corriger la notion puis retester',
          'Changer totalement de parcours',
          'Copier des réponses sans explication'
        ],
        correctIndex: 1
      },
      {
        key: 'c-4',
        prompt: 'Quel plan post-certification maximise l’impact ?',
        options: [
          'Archiver la certification sans mise en pratique',
          'Appliquer les acquis sur un projet réel et documenter les gains',
          'Ne plus mettre à jour les connaissances',
          'Éviter les retours d’expérience'
        ],
        correctIndex: 1
      }
    ]
  };

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      this.currentUserId = String(currentUser.id);
      this.loadWeeklyGoalState(this.currentUserId);
    }
    if (this.currentUserId) {
      this.initializeLearningPlanDefaults();
      this.loadFormations();

      this.authService.fetchMyProfile().subscribe({
        next: (profile) => {
          if (profile.xp != null && profile.level != null) {
            this.currentUserGamification.set({ xp: profile.xp, level: profile.level });
          }
        },
        error: () => {} // fail silently
      });
    } else {
      this.error.set("Utilisateur non identifié. Impossible de charger l'espace d'apprentissage.");
      this.loading.set(false);
    }
  }

  ngOnDestroy(): void {
    this._stopFraudMonitoring();
  }

  private _startFraudMonitoring(): void {
    this.biometrics.start();
    void this.proctoring.start();
  }

  private _stopFraudMonitoring(): void {
    this.biometrics.stop();
    this.proctoring.stop();
  }

  loadFormations(): void {
    if (!this.currentUserId) {
      this.error.set('Utilisateur non authentifié');
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.formationService.getUserFormations(this.currentUserId).subscribe({
      next: (data) => {
        this.formations.set(data);
        this.hydrateReviewDrafts(data);
        this.applyActiveFilter();
        this.refreshAutoReplanHints();
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erreur lors du chargement des formations');
        this.loading.set(false);
        console.error('Error loading formations:', err);
      }
    });
  }

  filterByStatus(status: StatutFormation | 'ALL'): void {
    this.selectedFilter.set(status);
    this.applyActiveFilter();
  }

  isFilterActive(status: StatutFormation | 'ALL'): boolean {
    return this.selectedFilter() === status;
  }

  generateLearningPlan(): void {
    this.requestLearningPlan(false);
  }

  autoReplan(): void {
    this.requestLearningPlan(true);
  }

  // ── Recommendation filter helpers ───────────────────────────────────────

  hasNoFormations(): boolean {
    return !this.loading() && this.formations().length === 0;
  }

  get filteredRecoFormations(): CareerLearningPlanResponse['formations'] {
    const plan = this.learningPlan();
    if (!plan) return [];
    let result = plan.formations;
    const skill = this.recoFilterSkill();
    const priority = this.recoFilterPriority();
    const platform = this.recoFilterPlatform();
    if (skill !== 'ALL') result = result.filter(f => f.skill.toLowerCase() === skill.toLowerCase());
    if (priority !== 'ALL') result = result.filter(f => f.priority === priority);
    if (platform !== 'ALL') result = result.filter(f => f.courses.some(c => c.platform.toLowerCase().includes(platform.toLowerCase())));
    return result;
  }

  recoUniqueSkills(): string[] {
    return [...new Set((this.learningPlan()?.formations || []).map(f => f.skill))];
  }

  recoUniquePlatforms(): string[] {
    const plan = this.learningPlan();
    if (!plan) return [];
    const platforms = new Set<string>();
    plan.formations.forEach(f => f.courses.forEach(c => platforms.add(c.platform)));
    return [...platforms];
  }

  recoTotalCourses(): number {
    return (this.learningPlan()?.formations || []).reduce((sum, f) => sum + f.courses.length, 0);
  }

  priorityBadgeClass(priority: string): string {
    if (priority === 'critical') return 'priority-critical';
    if (priority === 'high') return 'priority-high';
    if (priority === 'medium') return 'priority-medium';
    return 'priority-low';
  }

  priorityLabel(priority: string): string {
    if (priority === 'critical') return '🔴 Critique';
    if (priority === 'high') return '🟠 Haute';
    if (priority === 'medium') return '🟡 Moyenne';
    return '🟢 Faible';
  }

  platformIcon(platform: string): string {
    const p = platform.toLowerCase();
    if (p.includes('udemy')) return '🎓';
    if (p.includes('coursera')) return '📚';
    if (p.includes('linkedin')) return '💼';
    if (p.includes('edx')) return '🏫';
    if (p.includes('youtube')) return '▶️';
    if (p.includes('docs') || p.includes('official')) return '📖';
    return '🌐';
  }

  formationsEnCoursCount(): number {
    return this.formations().filter(f =>
      f.statut === StatutFormation.EN_COURS || f.statut === StatutFormation.ACCEPTEE
    ).length;
  }

  formationsTermineesCount(): number {
    return this.formations().filter(f => f.statut === StatutFormation.TERMINEE).length;
  }

  overallProgressPct(): number {
    const all = this.formations();
    if (!all.length) return 0;
    const total = all.reduce((sum, f) => sum + (f.progression ?? 0), 0);
    return Math.round(total / all.length);
  }

  formationsByStatusFiltered(status: StatutFormation): FormationResponse[] {
    const typeFilter = this.kanbanTypeFilter();
    return this.formations().filter(f => {
      if (f.statut !== status) return false;
      if (typeFilter === 'ALL') return true;
      return f.type?.toString().includes(typeFilter);
    });
  }

  startCoursePractice(
    skill: string,
    course: CareerLearningPlanResponse['formations'][number]['courses'][number]
  ): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id) {
      this.courseActionError.set('Utilisateur non authentifié');
      return;
    }

    const key = this.courseActionKey(skill, course);
    this.courseActionLoadingKey.set(key);
    this.courseActionError.set(null);
    this.courseActionSuccess.set(null);

    this.formationService.createFormation(String(currentUser.id), {
      titre: course.title,
      description: `Cible: ${skill}. ${course.reason || 'Cours choisi pour améliorer cette compétence.'}`,
      type: this.resolveFormationType(skill),
      duree: Math.max(1, Math.round(Number(course.duration_hours) || 1)),
      fournisseur: course.platform || course.provider,
      url: course.url
    }).subscribe({
      next: () => {
        this.courseActionSuccess.set(`Le cours "${course.title}" a été ajouté à vos formations.`);
        this.loadFormations();
      },
      error: (err) => {
        this.courseActionError.set(
          err?.error?.message ||
          err?.error?.detail ||
          'Impossible d\'ajouter ce cours à vos formations.'
        );
        this.courseActionLoadingKey.set(null);
      },
      complete: () => {
        this.courseActionLoadingKey.set(null);
      }
    });
  }

  isCourseLoading(
    skill: string,
    course: CareerLearningPlanResponse['formations'][number]['courses'][number]
  ): boolean {
    return this.courseActionLoadingKey() === this.courseActionKey(skill, course);
  }

  topDailyPlan(limit = 7) {
    return (this.learningPlan()?.daily_plan || []).slice(0, limit);
  }

  weakSkillBadgeClass(skillName: string): 'soft' | 'tech' {
    return this.isSoftSkill(skillName) ? 'soft' : 'tech';
  }

  onTargetRoleChange(value: string): void {
    this.targetRole = value;
    this.refreshAutoReplanHints();
  }

  isMiniQuizEligible(formation: FormationResponse): boolean {
    return formation.statut === StatutFormation.TERMINEE || (formation.progression ?? 0) >= 100;
  }

  hasMiniQuizPassed(formation: FormationResponse): boolean {
    return formation.miniTestPassed === true;
  }

  isMiniQuizOpen(formationId: string): boolean {
    return !!this.miniQuizOpen()[formationId];
  }

  miniQuizQuestions(formation: FormationResponse): MiniQuizQuestion[] {
    const family = this.resolveMiniQuizFamily(formation);
    const topic = this.quizTopicLabel(formation);
    return this.miniQuizTemplates[family].map((template, index) => ({
      id: `${formation.id}-${template.key}-${index}`,
      prompt: this.injectQuizTopic(template.prompt, topic),
      options: template.options.map((option) => this.injectQuizTopic(option, topic)),
      correctIndex: template.correctIndex
    }));
  }

  toggleMiniQuiz(formation: FormationResponse): void {
    if (!this.isMiniQuizEligible(formation)) {
      this.miniQuizError.set('Terminez la formation avant de lancer le mini-test.');
      return;
    }

    const currentlyOpen = this.isMiniQuizOpen(formation.id);
    const questions = this.miniQuizQuestions(formation);

    this.miniQuizOpen.update((state) => ({
      ...state,
      [formation.id]: !currentlyOpen
    }));

    if (!currentlyOpen) {
      this._startFraudMonitoring();
      this.miniQuizAnswers.update((answers) => {
        const existing = answers[formation.id];
        if (existing && existing.length === questions.length) {
          return answers;
        }

        return {
          ...answers,
          [formation.id]: Array(questions.length).fill(-1)
        };
      });
    }

    this.miniQuizMessage.set(null);
    this.miniQuizError.set(null);
  }

  miniQuizAnswerAt(formationId: string, questionIndex: number): number | null {
    const answers = this.miniQuizAnswers()[formationId];
    if (!answers || answers[questionIndex] == null || answers[questionIndex] < 0) {
      return null;
    }
    return answers[questionIndex];
  }

  setMiniQuizAnswer(formationId: string, questionIndex: number, optionIndex: number): void {
    this.miniQuizAnswers.update((answersByFormation) => {
      const currentAnswers = [...(answersByFormation[formationId] || [])];
      currentAnswers[questionIndex] = optionIndex;
      return {
        ...answersByFormation,
        [formationId]: currentAnswers
      };
    });
  }

  submitMiniQuiz(formation: FormationResponse): void {
    if (!this.isMiniQuizEligible(formation)) {
      this.miniQuizError.set('Terminez la formation avant de soumettre le mini-test.');
      return;
    }

    const questions = this.miniQuizQuestions(formation);
    const answers = this.miniQuizAnswers()[formation.id] || [];
    const hasIncompleteAnswers = answers.length !== questions.length || answers.some((answer) => answer == null || answer < 0);

    if (hasIncompleteAnswers) {
      this.miniQuizError.set('Veuillez répondre à toutes les questions avant de valider le mini-test.');
      return;
    }

    const correctAnswers = questions.reduce(
      (count, question, index) => count + (answers[index] === question.correctIndex ? 1 : 0),
      0
    );
    const score = Math.round((correctAnswers / questions.length) * 100);

    const biometricSnapshot = this.biometrics.snapshot();
    const proctoringSnapshot = this.proctoring.snapshot();
    this._stopFraudMonitoring();

    this.setMiniQuizSubmittingState(formation.id, true);
    this.miniQuizError.set(null);
    this.miniQuizMessage.set(null);

    this.formationService.submitMiniTest(formation.id, {
      score,
      correctAnswers,
      totalQuestions: questions.length,
      passingScore: this.miniQuizPassingScore,
      notes: `Mini-test automatique: ${formation.titre}`
    }).subscribe({
      next: (updated) => {
        this.upsertUpdatedFormation(updated);
        const finalScore = updated.miniTestScore ?? score;

        // Trigger asynchronous fraud verification
        this.testApi.checkFraud({
          candidateId: this.currentUserId,
          testType: 'mini_quiz',
          fraudContext: { biometrics: { ...biometricSnapshot, proctoring: proctoringSnapshot } }
        }).subscribe({
          next: (res: any) => {
            this.miniQuizFraudVerdicts.update(v => ({ ...v, [formation.id]: res }));
          },
          error: () => {} // we swallow errors here so as not to interrupt user flow
        });

        if (updated.miniTestPassed) {
          this.miniQuizMessage.set(`Mini-test réussi (${finalScore}%). Vous pouvez maintenant téléverser le certificat.`);
          // Re-fetch profile to get updated XP
          this.authService.fetchMyProfile().subscribe({
            next: (profile) => {
              if (profile.xp != null && profile.level != null) {
                this.currentUserGamification.set({ xp: profile.xp, level: profile.level });
              }
            },
            error: () => {}
          });
        } else {
          this.miniQuizError.set(`Mini-test complété (${finalScore}%). Reprenez le cours puis réessayez.`);
        }
      },
      error: (err) => {
        this.miniQuizError.set(
          err?.error?.message ||
          err?.error?.detail ||
          'Impossible de soumettre le mini-test.'
        );
      },
      complete: () => {
        this.setMiniQuizSubmittingState(formation.id, false);
      }
    });
  }

  isMiniQuizSubmitting(formationId: string): boolean {
    return !!this.miniQuizSubmitting()[formationId];
  }

  canUploadCertificate(formation: FormationResponse): boolean {
    return this.isMiniQuizEligible(formation) && this.hasMiniQuizPassed(formation);
  }

  onCertificateSelected(event: Event, formation: FormationResponse): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    if (!this.canUploadCertificate(formation)) {
      this.certificateError.set('Vous devez valider le mini-test avant de téléverser un certificat.');
      input.value = '';
      return;
    }

    this.certificateUploadingId.set(formation.id);
    this.certificateError.set(null);
    this.certificateMessage.set(null);

    this.formationService.uploadCertificate(formation.id, file).subscribe({
      next: (updated) => {
        this.upsertUpdatedFormation(updated);
        this.certificateMessage.set('Certificat téléversé avec succès.');
      },
      error: (err) => {
        this.certificateError.set(
          err?.error?.message ||
          err?.error?.detail ||
          'Impossible de téléverser le certificat.'
        );
      },
      complete: () => {
        this.certificateUploadingId.set(null);
        input.value = '';
      }
    });
  }

  isCertificateUploading(formationId: string): boolean {
    return this.certificateUploadingId() === formationId;
  }

  certificateFilename(formation: FormationResponse): string {
    const rawUrl = formation.certificateUrl;
    if (!rawUrl) {
      return 'certificat';
    }

    const tail = rawUrl.split('/').pop() || 'certificat';
    try {
      return decodeURIComponent(tail);
    } catch {
      return tail;
    }
  }

  private setMiniQuizSubmittingState(formationId: string, isSubmitting: boolean): void {
    this.miniQuizSubmitting.update((state) => ({
      ...state,
      [formationId]: isSubmitting
    }));
  }

  private resolveMiniQuizFamily(formation: FormationResponse): 'tech' | 'soft' | 'certification' {
    if (formation.type === TypeFormation.SOFT_SKILL || formation.type === TypeFormation.SOFT_SKILLS) {
      return 'soft';
    }

    if (formation.type === TypeFormation.CERTIFICATION) {
      return 'certification';
    }

    return 'tech';
  }

  private quizTopicLabel(formation: FormationResponse): string {
    const topic = formation.titre?.trim();
    if (!topic) {
      return 'ce module';
    }

    if (topic.length <= 48) {
      return topic;
    }

    return `${topic.slice(0, 45)}...`;
  }

  private injectQuizTopic(text: string, topic: string): string {
    return text.replace(/\{topic\}/g, topic);
  }

  private requestLearningPlan(autoMode: boolean): void {
    if (!this.currentUserId) {
      this.learningPlanError.set('Utilisateur non authentifié');
      return;
    }

    this.learningPlanLoading.set(!autoMode);
    this.autoReplanLoading.set(autoMode);
    this.learningPlanError.set(null);
    this.courseActionError.set(null);
    this.courseActionSuccess.set(null);
    this.boardMessage.set(null);
    this.boardError.set(null);
    this.detectedWeakSkills.set([]);
    this.softWeakSkillSet = new Set<string>();

    this.buildWeakSkillsFromUserData(this.currentUserId).subscribe({
      next: ({ weakSkills, softSkillKeys }) => {
        this.softWeakSkillSet = softSkillKeys;

        const adjustedWeakSkills = autoMode
          ? this.augmentWeakSkillsForReplan(weakSkills)
          : weakSkills;

        this.detectedWeakSkills.set(adjustedWeakSkills);

        const payload: LearningPlanRequest = {
          candidate_id: this.currentUserId,
          targetRole: this.targetRole.trim() || undefined,
          experienceLevel: this.experienceLevel,
          hoursPerDay: autoMode ? this.adjustedHoursPerDayForAutoMode() : this.hoursPerDay,
          preferredLanguage: this.preferredLanguage,
          learningStyle: this.learningStyle,
          timezone: this.timezone.trim() || 'UTC',
          weakSkills: adjustedWeakSkills
        };

        this.careerService.generateLearningPlan(payload).subscribe({
          next: (plan) => {
            const normalizedPlan = this.normalizeLearningPlan(plan);
            this.learningPlan.set(normalizedPlan);
            this.lastGeneratedRole.set(this.normalizeRoleValue(normalizedPlan.meta.target_role || this.targetRole));

            if (autoMode) {
              this.autoRoadmapSuggestions.set(
                this.buildAdjustedRoadmapSuggestions(normalizedPlan, adjustedWeakSkills)
              );
              this.courseActionSuccess.set('Plan régénéré automatiquement avec une roadmap ajustée.');
            }

            this.learningPlanLoading.set(false);
            this.autoReplanLoading.set(false);
            this.refreshAutoReplanHints();
          },
          error: (err) => {
            this.learningPlanLoading.set(false);
            this.autoReplanLoading.set(false);
            this.learningPlanError.set(
              err?.error?.message ||
              err?.error?.detail ||
              'Erreur lors de la génération du plan de formation IA.'
            );
          }
        });
      },
      error: () => {
        this.learningPlanLoading.set(false);
        this.autoReplanLoading.set(false);
        this.learningPlanError.set('Impossible de récupérer vos faiblesses techniques et soft skills.');
      }
    });
  }

  formationsByStatus(status: StatutFormation): FormationResponse[] {
    return this.formations().filter((formation) => formation.statut === status);
  }

  statusCount(status: StatutFormation): number {
    return this.formationsByStatus(status).length;
  }

  onCardDragStart(event: DragEvent, formation: FormationResponse): void {
    if (!event.dataTransfer) {
      return;
    }

    this.draggedFormationId.set(formation.id);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/formation-id', formation.id);
  }

  onCardDragEnd(): void {
    this.draggedFormationId.set(null);
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetStatus: StatutFormation): void {
    event.preventDefault();
    const formationId = event.dataTransfer?.getData('text/formation-id') || this.draggedFormationId();
    this.draggedFormationId.set(null);

    if (!formationId) {
      return;
    }

    const formation = this.formations().find((item) => item.id === formationId);
    if (!formation || formation.statut === targetStatus) {
      return;
    }

    this.moveFormationToStatus(formation, targetStatus);
  }

  moveToNextStatus(formation: FormationResponse): void {
    const nextStatus = this.nextStatus(formation.statut);
    if (!nextStatus) {
      return;
    }
    this.moveFormationToStatus(formation, nextStatus);
  }

  canMoveToNextStatus(formation: FormationResponse): boolean {
    return this.nextStatus(formation.statut) !== null;
  }

  updateProgressionFromInput(formation: FormationResponse, rawValue: string | number): void {
    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed)) {
      return;
    }

    const progression = Math.max(0, Math.min(100, Math.round(parsed)));
    if (formation.progression === progression) {
      return;
    }

    this.statusActionLoadingId.set(formation.id);
    this.boardError.set(null);
    this.boardMessage.set(null);

    this.formationService.updateFormationProgress(formation.id, progression).subscribe({
      next: (updated) => {
        this.upsertUpdatedFormation(updated);
        this.boardMessage.set(`Progression mise à jour: ${updated.titre} (${updated.progression}%).`);
        this.refreshAutoReplanHints();
      },
      error: (err) => {
        this.boardError.set(err?.error?.message || 'Impossible de mettre à jour la progression.');
      },
      complete: () => {
        this.statusActionLoadingId.set(null);
      }
    });
  }

  isStatusActionLoading(formationId: string): boolean {
    return this.statusActionLoadingId() === formationId;
  }

  deadlineRiskLevel(formation: FormationResponse): DeadlineRiskLevel {
    if (formation.statut === StatutFormation.TERMINEE || (formation.progression ?? 0) >= 100) {
      return 'on-track';
    }

    const now = new Date();
    const startDate = this.toDateOrNull(formation.dateDebut) || this.toDateOrNull(formation.dateProposition);
    const endDate = this.toDateOrNull(formation.dateFin);
    const progression = Math.max(0, Math.min(100, Number(formation.progression) || 0));

    if (endDate && now.getTime() > endDate.getTime() && progression < 100) {
      return 'late';
    }

    if (startDate && endDate && endDate.getTime() > startDate.getTime()) {
      const elapsed = Math.max(0, now.getTime() - startDate.getTime());
      const duration = endDate.getTime() - startDate.getTime();
      const expectedProgress = Math.max(0, Math.min(100, (elapsed / duration) * 100));

      if (progression + 20 < expectedProgress) {
        return 'at-risk';
      }
    }

    if (startDate) {
      const daysSinceStart = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

      if (formation.statut === StatutFormation.EN_COURS) {
        if (daysSinceStart > 30 && progression < 40) {
          return 'late';
        }
        if (daysSinceStart > 14 && progression < 20) {
          return 'at-risk';
        }
      }

      if ((formation.statut === StatutFormation.PROPOSEE || formation.statut === StatutFormation.ACCEPTEE)
        && daysSinceStart > 10) {
        return 'at-risk';
      }
    }

    return 'on-track';
  }

  deadlineRiskLabel(formation: FormationResponse): string {
    const level = this.deadlineRiskLevel(formation);
    if (level === 'late') {
      return 'Late';
    }
    if (level === 'at-risk') {
      return 'At Risk';
    }
    return 'On Track';
  }

  deadlineRiskClass(formation: FormationResponse): string {
    return `risk-${this.deadlineRiskLevel(formation)}`;
  }

  lateCount(): number {
    return this.formations().filter((formation) => this.deadlineRiskLevel(formation) === 'late').length;
  }

  atRiskCount(): number {
    return this.formations().filter((formation) => this.deadlineRiskLevel(formation) === 'at-risk').length;
  }

  onTrackCount(): number {
    return this.formations().filter((formation) => this.deadlineRiskLevel(formation) === 'on-track').length;
  }

  canEditReviewNotes(): boolean {
    const role = this.authService.getCurrentUser()?.role;
    return role === Role.ADMIN || role === Role.RECRUITER;
  }

  getReviewDraft(formationId: string): ReviewDraft {
    return this.reviewDrafts()[formationId] || { reviewNote: '', nextAction: '' };
  }

  updateReviewDraft(formationId: string, field: keyof ReviewDraft, value: string): void {
    this.reviewDrafts.update((drafts) => ({
      ...drafts,
      [formationId]: {
        ...this.getReviewDraft(formationId),
        [field]: value
      }
    }));
  }

  saveReviewNotes(formation: FormationResponse): void {
    if (!this.canEditReviewNotes()) {
      return;
    }

    const draft = this.getReviewDraft(formation.id);
    this.reviewError.set(null);
    this.reviewMessage.set(null);
    this.setReviewSavingState(formation.id, true);

    this.formationService.updateFormationReviewNotes(formation.id, {
      reviewNote: draft.reviewNote,
      nextAction: draft.nextAction
    }).subscribe({
      next: (updated) => {
        this.upsertUpdatedFormation(updated);
        this.hydrateReviewDrafts(this.formations());
        this.reviewMessage.set(`Notes manager sauvegardées pour "${updated.titre}".`);
      },
      error: (err) => {
        this.reviewError.set(err?.error?.message || 'Impossible de sauvegarder les notes manager.');
      },
      complete: () => {
        this.setReviewSavingState(formation.id, false);
      }
    });
  }

  isReviewSaving(formationId: string): boolean {
    return !!this.reviewSaving()[formationId];
  }

  saveWeeklyGoal(): void {
    const normalizedGoal = Math.max(1, Math.min(60, Number(this.weeklyGoalInput) || 8));
    this.weeklyGoalHours.set(normalizedGoal);
    this.weeklyGoalInput = normalizedGoal;
    this.persistWeeklyGoalState();
    this.weeklyGoalNotice.set(`Objectif hebdomadaire fixé à ${normalizedGoal}h.`);
    this.refreshAutoReplanHints();
  }

  logWeeklyHours(): void {
    const hours = Math.max(0.25, Math.min(24, Number(this.weeklyLogInput) || 0));
    const currentWeek = this.isoWeekKey(new Date());

    this.weeklyHoursByWeek.update((history) => ({
      ...history,
      [currentWeek]: this.hoursForWeek(currentWeek) + hours
    }));

    this.persistWeeklyGoalState();
    this.weeklyGoalNotice.set(`+${hours.toFixed(1)}h ajoutées pour la semaine en cours.`);
    this.refreshAutoReplanHints();
  }

  weeklyHoursThisWeek(): number {
    return this.hoursForWeek(this.isoWeekKey(new Date()));
  }

  weeklyGoalProgressPct(): number {
    const goal = Math.max(1, this.weeklyGoalHours());
    return Math.min(100, Math.round((this.weeklyHoursThisWeek() / goal) * 100));
  }

  weeklyStreakWeeks(): number {
    const goal = this.weeklyGoalHours();
    if (goal <= 0) {
      return 0;
    }

    let streak = 0;
    let offset = 0;
    while (offset > -53) {
      const weekKey = this.weekOffsetKey(offset);
      const weekHours = this.hoursForWeek(weekKey);
      if (weekHours >= goal) {
        streak += 1;
        offset -= 1;
        continue;
      }

      if (offset === 0) {
        offset -= 1;
        continue;
      }
      break;
    }

    return streak;
  }

  weeklyMissedAlert(): string | null {
    const goal = this.weeklyGoalHours();
    const lastWeekKey = this.weekOffsetKey(-1);
    const lastWeekHours = this.hoursForWeek(lastWeekKey);
    const hasActivePipeline = this.formations().some((formation) =>
      formation.statut === StatutFormation.EN_COURS || formation.statut === StatutFormation.ACCEPTEE
    );

    if (!hasActivePipeline) {
      return null;
    }

    if (lastWeekHours < goal) {
      return `Alerte: objectif manqué la semaine dernière (${lastWeekHours.toFixed(1)}h / ${goal}h).`;
    }

    return null;
  }

  shouldShowAutoReplan(): boolean {
    return this.autoReplanReasons().length > 0;
  }

  autoReplanReasons(): string[] {
    const reasons: string[] = [];

    if (this.hasRoleChangedSinceLastPlan()) {
      reasons.push('Le rôle cible a changé.');
    }

    if (this.lateCount() > 0) {
      reasons.push(`${this.lateCount()} formation(s) en retard.`);
    } else if (this.atRiskCount() > 0) {
      reasons.push(`${this.atRiskCount()} formation(s) à risque.`);
    }

    const weeklyAlert = this.weeklyMissedAlert();
    if (weeklyAlert) {
      reasons.push('Le rythme hebdomadaire est sous l\'objectif.');
    }

    return reasons;
  }

  courseReadinessGain(skill: string, course: CareerLearningPlanResponse['formations'][number]['courses'][number]): number {
    const plan = this.learningPlan();
    if (!plan) {
      return 0;
    }

    const formation = plan.formations.find((item) => item.skill.toLowerCase() === skill.toLowerCase());
    if (!formation) {
      return 0;
    }

    const totalGap = Math.max(1,
      plan.skill_gap_analysis.breakdown.reduce((sum, item) => sum + Math.max(0, item.gap), 0)
    );
    const skillGap = Math.max(0, (formation.required_level || 0) - (formation.current_level || 0));
    if (skillGap <= 0) {
      return 0.5;
    }

    const perCourseShare = 1 / Math.max(1, formation.courses.length);
    const durationFactor = Math.min(1.35, Math.max(0.65, (Number(course.duration_hours) || 1) / 8));
    const levelFactor = course.level === 'advanced'
      ? 1.12
      : course.level === 'beginner'
        ? 0.9
        : 1;

    const base = ((skillGap / totalGap) * 100) * perCourseShare;
    const gain = base * 0.75 * durationFactor * levelFactor;
    return Math.round(Math.min(12, Math.max(0.5, gain)) * 10) / 10;
  }

  courseExpectedLevelAfter(skill: string, course: CareerLearningPlanResponse['formations'][number]['courses'][number]): number {
    const plan = this.learningPlan();
    if (!plan) {
      return 0;
    }

    const formation = plan.formations.find((item) => item.skill.toLowerCase() === skill.toLowerCase());
    if (!formation) {
      return 0;
    }

    const currentGap = Math.max(0, (formation.required_level || 0) - (formation.current_level || 0));
    if (currentGap === 0) {
      return formation.required_level || 0;
    }

    const gap = formation.gap || currentGap;
    const durationFactor = Math.min(1.25, Math.max(0.75, (Number(course.duration_hours) || 1) / 8));
    const projectedDelta = Math.max(0.4, Math.min(gap, (gap / Math.max(1, formation.courses.length)) * durationFactor));
    const projectedLevel = Math.min(formation.required_level || 0, (formation.current_level || 0) + projectedDelta);
    return Math.round(projectedLevel * 10) / 10;
  }

  impactClass(gain: number): string {
    if (gain >= 4) {
      return 'impact-high';
    }
    if (gain >= 2) {
      return 'impact-medium';
    }
    return 'impact-low';
  }

  private applyActiveFilter(): void {
    const activeFilter = this.selectedFilter();
    if (activeFilter === 'ALL') {
      this.filteredFormations.set(this.formations());
      return;
    }

    this.filteredFormations.set(this.formations().filter((formation) => formation.statut === activeFilter));
  }

  private moveFormationToStatus(formation: FormationResponse, targetStatus: StatutFormation): void {
    this.statusActionLoadingId.set(formation.id);
    this.boardError.set(null);
    this.boardMessage.set(null);

    this.formationService.updateFormationStatus(formation.id, targetStatus).subscribe({
      next: (updated) => {
        this.upsertUpdatedFormation(updated);
        this.boardMessage.set(`"${updated.titre}" déplacée vers ${this.statusLabel(updated.statut)}.`);
        this.refreshAutoReplanHints();
      },
      error: (err) => {
        this.boardError.set(err?.error?.message || 'Impossible de changer le statut de la formation.');
      },
      complete: () => {
        this.statusActionLoadingId.set(null);
      }
    });
  }

  private nextStatus(current: StatutFormation): StatutFormation | null {
    const flow: StatutFormation[] = [
      StatutFormation.PROPOSEE,
      StatutFormation.ACCEPTEE,
      StatutFormation.EN_COURS,
      StatutFormation.TERMINEE
    ];

    const currentIndex = flow.indexOf(current);
    if (currentIndex < 0 || currentIndex === flow.length - 1) {
      return null;
    }
    return flow[currentIndex + 1];
  }

  private statusLabel(status: StatutFormation): string {
    if (status === StatutFormation.PROPOSEE) return 'Proposée';
    if (status === StatutFormation.ACCEPTEE) return 'Acceptée';
    if (status === StatutFormation.EN_COURS) return 'En cours';
    if (status === StatutFormation.TERMINEE) return 'Terminée';
    return 'Annulée';
  }

  private toDateOrNull(value: Date | string | undefined): Date | null {
    if (!value) {
      return null;
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private upsertUpdatedFormation(updated: FormationResponse): void {
    this.formations.update((rows) => rows.map((row) => row.id === updated.id ? updated : row));
    this.applyActiveFilter();
  }

  private hydrateReviewDrafts(rows: FormationResponse[]): void {
    const drafts: Record<string, ReviewDraft> = {};
    rows.forEach((row) => {
      drafts[row.id] = {
        reviewNote: row.reviewNote || '',
        nextAction: row.nextAction || ''
      };
    });
    this.reviewDrafts.set(drafts);
  }

  private setReviewSavingState(formationId: string, isSaving: boolean): void {
    this.reviewSaving.update((saving) => ({
      ...saving,
      [formationId]: isSaving
    }));
  }

  private refreshAutoReplanHints(): void {
    const reasons = this.autoReplanReasons();
    this.autoReplanHint.set(reasons.length ? `Replan conseillé: ${reasons.join(' ')}` : null);
    if (!reasons.length) {
      this.autoRoadmapSuggestions.set([]);
    }
  }

  private augmentWeakSkillsForReplan(
    weakSkills: NonNullable<LearningPlanRequest['weakSkills']>
  ): NonNullable<LearningPlanRequest['weakSkills']> {
    const requiredLevel = this.requiredLevelForExperience(this.experienceLevel);
    const extras: NonNullable<LearningPlanRequest['weakSkills']> = [];

    if (this.lateCount() > 0) {
      extras.push({
        name: 'Execution Discipline',
        score: 3,
        required_level: requiredLevel
      });
    }

    if (this.atRiskCount() > 0) {
      extras.push({
        name: 'Time Management',
        score: 3.5,
        required_level: requiredLevel
      });
    }

    if (this.hasRoleChangedSinceLastPlan()) {
      extras.push({
        name: `${this.targetRole} Fundamentals`,
        score: 4,
        required_level: requiredLevel
      });
    }

    const deduped = new Map<string, { name: string; score: number; required_level: number }>();
    [...weakSkills, ...extras].forEach((item) => {
      const key = item.name.trim().toLowerCase();
      if (key && !deduped.has(key)) {
        deduped.set(key, item);
      }
    });

    return Array.from(deduped.values()).slice(0, 12);
  }

  private adjustedHoursPerDayForAutoMode(): number {
    const pressure = this.lateCount() > 0 ? 1 : this.atRiskCount() > 0 ? 0.5 : 0;
    return Math.min(8, Math.max(0.5, Math.round((this.hoursPerDay + pressure) * 10) / 10));
  }

  private buildAdjustedRoadmapSuggestions(
    plan: CareerLearningPlanResponse,
    weakSkills: NonNullable<LearningPlanRequest['weakSkills']>
  ): string[] {
    const topWeak = weakSkills.slice(0, 3).map((item) => item.name);
    const firstPhases = plan.roadmap.slice(0, 2).map((phase) => `Phase ${phase.phase}: ${phase.title}`);
    const suggestions = [
      topWeak.length ? `Priorité immédiate: ${topWeak.join(', ')}.` : '',
      firstPhases.length ? `Roadmap ajustée: ${firstPhases.join(' | ')}.` : '',
      `Rythme conseillé: ${this.adjustedHoursPerDayForAutoMode()}h/jour pendant les 2 prochaines semaines.`
    ].filter((line) => !!line);

    return suggestions;
  }

  private hasRoleChangedSinceLastPlan(): boolean {
    const lastRole = this.lastGeneratedRole();
    if (!lastRole) {
      return false;
    }
    return this.normalizeRoleValue(this.targetRole) !== lastRole;
  }

  private normalizeRoleValue(value: string): string {
    return value.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  private loadWeeklyGoalState(userId: string): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const raw = localStorage.getItem(this.weeklyStorageKey(userId));
    if (!raw) {
      this.weeklyGoalInput = this.weeklyGoalHours();
      return;
    }

    try {
      const parsed = JSON.parse(raw) as WeeklyLearningGoalState;
      const normalizedGoal = Math.max(1, Math.min(60, Number(parsed.weeklyGoalHours) || 8));

      this.weeklyGoalHours.set(normalizedGoal);
      this.weeklyGoalInput = normalizedGoal;
      this.weeklyHoursByWeek.set(parsed.weeklyHoursByWeek || {});
      this.refreshAutoReplanHints();
    } catch {
      this.weeklyGoalInput = this.weeklyGoalHours();
    }
  }

  private persistWeeklyGoalState(): void {
    if (!this.currentUserId || typeof localStorage === 'undefined') {
      return;
    }

    const snapshot: WeeklyLearningGoalState = {
      weeklyGoalHours: this.weeklyGoalHours(),
      weeklyHoursByWeek: this.weeklyHoursByWeek()
    };

    localStorage.setItem(this.weeklyStorageKey(this.currentUserId), JSON.stringify(snapshot));
  }

  private weeklyStorageKey(userId: string): string {
    return `formation-weekly-goal::${userId}`;
  }

  private hoursForWeek(weekKey: string): number {
    const value = this.weeklyHoursByWeek()[weekKey];
    const normalized = Number(value);
    return Number.isFinite(normalized) ? normalized : 0;
  }

  private isoWeekKey(date: Date): string {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = utcDate.getUTCDay() || 7;
    utcDate.setUTCDate(utcDate.getUTCDate() + 4 - day);

    const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil((((utcDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);

    return `${utcDate.getUTCFullYear()}-W${String(weekNumber).padStart(2, '0')}`;
  }

  private weekOffsetKey(offset: number): string {
    const date = new Date();
    date.setDate(date.getDate() + (offset * 7));
    return this.isoWeekKey(date);
  }

  private initializeLearningPlanDefaults(): void {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (detectedTimezone) {
      this.timezone = detectedTimezone;
    }

    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id) {
      return;
    }

    this.authService.getProfile(String(currentUser.id)).subscribe({
      next: (profile) => {
        const roleFromProfile = (profile.titreProfessionnel || profile.position || '').trim();
        if (roleFromProfile) {
          this.targetRole = roleFromProfile;
        }

        const experienceYears = profile.experienceAns;
        if (typeof experienceYears === 'number') {
          this.experienceLevel = this.mapExperienceToLearningLevel(experienceYears);
        }
      },
      error: () => {
        // Keep defaults when profile loading fails.
      }
    });
  }

  private mapExperienceToLearningLevel(experienceYears: number): 'beginner' | 'junior' | 'mid' | 'senior' {
    if (experienceYears <= 1) {
      return 'beginner';
    }
    if (experienceYears <= 4) {
      return 'junior';
    }
    if (experienceYears <= 8) {
      return 'mid';
    }
    return 'senior';
  }

  private buildWeakSkillsFromUserData(userId: string) {
    return forkJoin({
      skills: this.skillsService.getUserSkills(userId).pipe(catchError(() => of([]))),
      soft: this.softSkillsService.getLastAnalysis().pipe(catchError(() => of(null)))
    }).pipe(
      map(({ skills, soft }) => {
        const requiredLevel = this.requiredLevelForExperience(this.experienceLevel);

        const techWeak = skills
          .filter((skill) => skill.type === TypeSkill.TECH)
          .sort((a, b) => (a.niveau ?? 1) - (b.niveau ?? 1))
          .slice(0, 6)
          .map((skill) => ({
            name: skill.nom,
            score: this.toScoreOnTen(skill.niveau),
            required_level: requiredLevel
          }));

        const { softWeak, softKeys } = this.extractSoftWeaknesses(soft, requiredLevel);
        const ensuredSoftWeak = softWeak.length
          ? softWeak
          : [
              {
                name: 'Communication',
                score: 3.5,
                required_level: requiredLevel
              },
              {
                name: 'Time Management',
                score: 3.5,
                required_level: requiredLevel
              }
            ];

        if (!softWeak.length) {
          softKeys.add('communication');
          softKeys.add('time management');
        }

        const unique = new Map<string, { name: string; score: number; required_level: number }>();
        [...techWeak, ...ensuredSoftWeak].forEach((item) => {
          const key = item.name.trim().toLowerCase();
          if (key && !unique.has(key)) {
            unique.set(key, item);
          }
        });

        if (!unique.size) {
          unique.set('problem solving', {
            name: 'Problem Solving',
            score: 4,
            required_level: requiredLevel
          });
          unique.set('communication', {
            name: 'Communication',
            score: 4,
            required_level: requiredLevel
          });
          softKeys.add('communication');
        }

        return {
          weakSkills: Array.from(unique.values()).slice(0, 10),
          softSkillKeys: softKeys
        };
      })
    );
  }

  private extractSoftWeaknesses(soft: SoftSkillsResult | null, requiredLevel: number): {
    softWeak: Array<{ name: string; score: number; required_level: number }>;
    softKeys: Set<string>;
  } {
    const softKeys = new Set<string>();

    const fromScores = Object.entries(soft?.mergedSoftSkills || {})
      .sort((a, b) => a[1] - b[1])
      .slice(0, 4)
      .map(([name, score]) => {
        softKeys.add(name.trim().toLowerCase());
        return {
          name,
          score: Math.max(1, Math.min(10, Number(score) || 3.5)),
          required_level: requiredLevel
        };
      });

    const withWeaknessLabels = [...fromScores];
    (soft?.top3Weaknesses || []).forEach((name) => {
      const key = name.trim().toLowerCase();
      if (!key) {
        return;
      }
      softKeys.add(key);
      if (!withWeaknessLabels.some((item) => item.name.trim().toLowerCase() === key)) {
        withWeaknessLabels.push({
          name,
          score: 3.5,
          required_level: requiredLevel
        });
      }
    });

    return {
      softWeak: withWeaknessLabels.slice(0, 4),
      softKeys
    };
  }

  private requiredLevelForExperience(level: 'beginner' | 'junior' | 'mid' | 'senior'): number {
    if (level === 'beginner') {
      return 5;
    }
    if (level === 'junior') {
      return 7;
    }
    if (level === 'mid') {
      return 8;
    }
    return 9;
  }

  private toScoreOnTen(niveau: number | undefined): number {
    const safeNiveau = Math.max(1, Math.min(5, Number(niveau) || 1));
    return Math.round(safeNiveau * 2 * 10) / 10;
  }

  private courseActionKey(
    skill: string,
    course: CareerLearningPlanResponse['formations'][number]['courses'][number]
  ): string {
    return `${skill}::${course.id || course.title}`;
  }

  private resolveFormationType(skill: string): TypeFormation {
    return this.isSoftSkill(skill) ? TypeFormation.SOFT_SKILL : TypeFormation.TECH_SKILL;
  }

  private isSoftSkill(skill: string): boolean {
    const key = skill.trim().toLowerCase();
    if (!key) {
      return false;
    }

    if (this.softWeakSkillSet.has(key)) {
      return true;
    }

    const softKeywords = [
      'communication',
      'leadership',
      'collaboration',
      'team',
      'discipline',
      'ownership',
      'curiosity',
      'adaptability',
      'empathy',
      'presentation',
      'negotiation',
      'conflict'
    ];

    return softKeywords.some((keyword) => key.includes(keyword));
  }

  private normalizeLearningPlan(plan: CareerLearningPlanResponse): CareerLearningPlanResponse {
    const raw = this.asObject(plan);
    const rawMeta = this.asObject(raw['meta']);
    const rawSummary = this.asObject(raw['summary']);
    const rawSkillGap = this.asObject(raw['skill_gap_analysis']);

    const breakdownSource = this.asArray(rawSkillGap['breakdown']).length
      ? this.asArray(rawSkillGap['breakdown'])
      : this.asArray(rawSkillGap['target_role_requirements']);

    const breakdown = breakdownSource
      .map((entry) => {
        const item = this.asObject(entry);
        const skill = this.asString(item['skill']);
        if (!skill) {
          return null;
        }

        const currentLevel = this.toNumber(item['current_level'], 0);
        const requiredLevel = this.toNumber(item['required_level'], currentLevel);
        return {
          skill,
          current_level: currentLevel,
          required_level: requiredLevel,
          gap: this.toNumber(item['gap'], Math.max(0, requiredLevel - currentLevel)),
          priority: this.normalizePriority(this.asString(item['priority']))
        };
      })
      .filter((item): item is CareerLearningPlanResponse['skill_gap_analysis']['breakdown'][number] => item !== null);

    const estimatedWeeks = this.toNumber(
      rawSkillGap['estimated_weeks_to_ready'],
      this.extractWeeks(this.asString(rawSummary['estimated_time_to_ready']), 8)
    );

    const generatedAt = this.asString(rawMeta['generated_at'], this.asString(raw['generated_at'], new Date().toISOString()));
    const targetRole = this.asString(rawMeta['target_role'], this.asString(raw['target_role'], this.targetRole));
    const experienceLevel = this.asString(rawMeta['experience_level'], this.asString(raw['experience_level'], this.experienceLevel));
    const language = this.normalizeLanguage(this.asString(rawMeta['language'], this.asString(raw['language'], this.preferredLanguage)));
    const timezone = this.asString(rawMeta['timezone'], this.asString(this.asObject(raw['localization'])['timezone'], this.timezone));

    const estimatedReadyDate = this.asString(
      rawMeta['estimated_ready_date'],
      this.estimateReadyDate(generatedAt, estimatedWeeks)
    );

    const roadmap = this.asArray(raw['roadmap']).map((entry, index) => {
      const item = this.asObject(entry);
      const phase = this.toNumber(item['phase'], index + 1);
      const focusSkills = this.toStringArray(item['focus_skills']).length
        ? this.toStringArray(item['focus_skills'])
        : this.toStringArray(item['focus']);

      return {
        phase,
        title: this.asString(item['title'], this.asString(item['phase'], `Phase ${phase}`)),
        duration_weeks: this.toNumber(item['duration_weeks'], this.extractWeeks(this.asString(item['duration']), 2)),
        focus_skills: focusSkills,
        goals: this.toStringArray(item['goals']),
        exit_criteria: this.toStringArray(item['exit_criteria']).length
          ? this.toStringArray(item['exit_criteria'])
          : this.toStringArray(item['success_criteria'])
      };
    });

    const formationsFromPayload = this.asArray(raw['formations']).map((entry, index) => {
      const item = this.asObject(entry);
      const skill = this.asString(item['skill'], `Skill ${index + 1}`);
      const matchingGap = breakdown.find((gap) => gap.skill.toLowerCase() === skill.toLowerCase());

      const courses = this.asArray(item['courses']).map((courseEntry, courseIndex) => {
        const course = this.asObject(courseEntry);
        const title = this.asString(course['title'], this.asString(course['name'], `Cours ${courseIndex + 1}`));

        return {
          id: this.asString(course['id'], `${skill}-${courseIndex + 1}`),
          title,
          platform: this.asString(course['platform'], 'Course'),
          url: this.asString(course['url'], '#'),
          provider: this.asString(course['provider'], this.asString(course['platform'], 'Provider')),
          duration_hours: this.toDurationHours(course['duration_hours'] ?? course['duration']),
          level: this.normalizeCourseLevel(this.asString(course['level'])),
          phase_ref: this.toNumber(course['phase_ref'], this.toNumber(course['phase'], 1)),
          reason: this.asString(course['reason'], 'Cours recommande pour combler ce gap.')
        };
      });

      const current_level = this.toNumber(item['current_level'], matchingGap?.current_level ?? 0);
      const required_level = this.toNumber(item['required_level'], matchingGap?.required_level ?? 0);
      return {
        skill,
        priority: this.normalizePriority(this.asString(item['priority'])),
        current_level,
        required_level,
        gap: Math.max(0, required_level - current_level),
        courses: courses.length
          ? courses
          : this.fallbackCoursesForSkill(skill, matchingGap?.current_level ?? this.toNumber(item['current_level'], 0))
      };
    });

    const formations = formationsFromPayload.length
      ? formationsFromPayload
      : breakdown.map((gap) => ({
        skill: gap.skill,
        priority: gap.priority,
        current_level: gap.current_level,
        required_level: gap.required_level,
        gap: gap.gap,
        courses: this.fallbackCoursesForSkill(gap.skill, gap.current_level)
      }));

    const assessments = this.asArray(raw['assessments']).map((entry) => {
      const item = this.asObject(entry);
      return {
        skill: this.asString(item['skill'], 'Skill'),
        phase_ref: this.toNumber(item['phase_ref'], this.toNumber(item['phase'], 1)),
        type: this.normalizeAssessmentType(this.asString(item['type'])),
        title: this.asString(item['title'], this.asString(item['skill'], 'Assessment')),
        description: this.asString(item['description']),
        passing_score: this.toNumber(item['passing_score'], 70),
        estimated_minutes: this.toNumber(item['estimated_minutes'], 45),
        resource_url: this.asString(item['resource_url']) || null
      };
    });

    const reinforcement = this.asArray(raw['reinforcement']).map((entry, index) => {
      const item = this.asObject(entry);
      return {
        id: this.asString(item['id'], `reinforcement-${index + 1}`),
        type: this.normalizeReinforcementType(this.asString(item['type'])),
        title: this.asString(item['title'], `Practice ${index + 1}`),
        skills: this.toStringArray(item['skills']),
        difficulty: this.normalizeDifficulty(this.asString(item['difficulty'])),
        phase_ref: this.toNumber(item['phase_ref'], this.toNumber(item['phase'], 1)),
        estimated_hours: this.toNumber(item['estimated_hours'], this.toNumber(item['duration_hours'], 4)),
        description: this.asString(item['description'])
      };
    });

    const rawProjectPlan = this.asObject(raw['project_plan']);
    const projectPlan = {
      title: this.asString(rawProjectPlan['title'], `Projet ${targetRole}`),
      description: this.asString(rawProjectPlan['description']),
      covers_skills: this.toStringArray(rawProjectPlan['covers_skills']).length
        ? this.toStringArray(rawProjectPlan['covers_skills'])
        : this.toStringArray(rawProjectPlan['tech_stack']),
      tech_stack: this.toStringArray(rawProjectPlan['tech_stack']),
      difficulty: this.normalizeProjectDifficulty(this.asString(rawProjectPlan['difficulty'])),
      estimated_hours: this.toNumber(rawProjectPlan['estimated_hours'], this.extractHours(this.asString(rawProjectPlan['duration']), 12)),
      features: this.toStringArray(rawProjectPlan['features']),
      steps: this.asArray(rawProjectPlan['steps']).map((entry, index) => {
        const step = this.asObject(entry);
        return {
          step: this.toNumber(step['step'], index + 1),
          title: this.asString(step['title'], `Etape ${index + 1}`),
          description: this.asString(step['description']),
          estimated_hours: this.toNumber(step['estimated_hours'], this.toNumber(step['estimated_days'], 1) * 2)
        };
      }),
      deployment_target: this.asString(rawProjectPlan['deployment_target'], this.asString(rawProjectPlan['portfolio_outcome']))
    };

    const milestones = this.asArray(raw['milestones']).map((entry, index) => {
      const item = this.asObject(entry);
      return {
        id: this.asString(item['id'], `m-${index + 1}`),
        phase_ref: this.toNumber(item['phase_ref'], this.toNumber(item['phase'], 1)),
        title: this.asString(item['title'], `Milestone ${index + 1}`),
        trigger: this.asString(item['trigger']),
        badge: this.asString(item['badge']),
        reward_message: this.asString(item['reward_message'])
      };
    });

    const rawReEval = this.asObject(raw['re_evaluation']);
    const reEvaluation = {
      trigger_after_days: this.toNumber(rawReEval['trigger_after_days'], 14),
      quiz_score_threshold: this.toNumber(rawReEval['quiz_score_threshold'], 60),
      re_evaluate_skills: this.toStringArray(rawReEval['re_evaluate_skills']),
      next_checkpoint_date: this.asString(rawReEval['next_checkpoint_date'], this.estimateReadyDate(generatedAt, 2))
    };

    const dailyPlan = this.asArray(raw['daily_plan']).map((entry, index) => {
      const item = this.asObject(entry);
      const rawTasks = this.asArray(item['tasks']);
      const tasks = rawTasks.map((taskEntry, taskIndex) => {
        if (typeof taskEntry === 'string') {
          return {
            task: taskEntry,
            type: 'practice' as const,
            course_id: null,
            duration_minutes: 45
          };
        }

        const task = this.asObject(taskEntry);
        return {
          task: this.asString(task['task'], `Task ${taskIndex + 1}`),
          type: this.normalizeTaskType(this.asString(task['type'])),
          course_id: this.asString(task['course_id']) || null,
          duration_minutes: this.toNumber(task['duration_minutes'], 45)
        };
      });

      return {
        day: this.toNumber(item['day'], index + 1),
        phase_ref: this.toNumber(item['phase_ref'], this.toNumber(item['phase'], 1)),
        focus_skill: this.asString(item['focus_skill'], this.asString(item['theme'], 'Skill Focus')),
        tasks,
        estimated_total_hours: this.toNumber(item['estimated_total_hours'], this.extractHours(this.asString(item['estimated_time']), 2)),
        tip: this.asString(item['tip'], this.asString(item['deliverable']))
      };
    });

    const weeklyCheckins = this.asArray(raw['weekly_checkins']).map((entry) => {
      const item = this.asObject(entry);
      return {
        week: this.toNumber(item['week'], 1),
        phase_ref: this.toNumber(item['phase_ref'], this.toNumber(item['phase'], 1)),
        questions: this.toStringArray(item['questions'])
      };
    });

    const rawMarket = this.asObject(raw['market_alignment']);
    const marketAlignment = {
      top_hiring_companies: this.toStringArray(rawMarket['top_hiring_companies']),
      avg_salary_range: this.asString(rawMarket['avg_salary_range']),
      most_requested_skills: this.toStringArray(rawMarket['most_requested_skills']).length
        ? this.toStringArray(rawMarket['most_requested_skills'])
        : this.toStringArray(rawMarket['most_requested_skills_in_job_posts']),
      job_search_keywords: this.toStringArray(rawMarket['job_search_keywords']),
      time_to_first_interview_weeks: this.toNumber(
        rawMarket['time_to_first_interview_weeks'],
        this.extractWeeks(this.asString(rawMarket['time_to_first_interview_estimate']), 4)
      )
    };

    const rawMentor = this.asObject(raw['mentor_profile']);
    const mentorProfile = {
      ideal_mentor_type: this.normalizeMentorType(this.asString(rawMentor['ideal_mentor_type'], this.asString(rawMentor['mentor_type']))),
      ideal_mentor_skills: this.toStringArray(rawMentor['ideal_mentor_skills']),
      recommended_communities: this.asArray(rawMentor['recommended_communities']).map((entry) => {
        const item = this.asObject(entry);
        return {
          name: this.asString(item['name']),
          url: this.asString(item['url']),
          description: this.asString(item['description'], this.asString(item['why']))
        };
      })
    };

    return {
      meta: {
        generated_at: generatedAt,
        language,
        timezone,
        target_role: targetRole,
        experience_level: experienceLevel,
        estimated_ready_date: estimatedReadyDate
      },
      summary: {
        profile_evaluation: this.asString(rawSummary['profile_evaluation']),
        main_gaps: this.toStringArray(rawSummary['main_gaps']),
        strengths: this.toStringArray(rawSummary['strengths']),
        overall_readiness_pct: this.toNumber(rawSummary['overall_readiness_pct'], this.toNumber(rawSkillGap['readiness_score'], 0))
      },
      skill_gap_analysis: {
        readiness_score: this.toNumber(rawSkillGap['readiness_score'], 0),
        estimated_weeks_to_ready: estimatedWeeks,
        breakdown
      },
      roadmap,
      formations,
      assessments,
      reinforcement,
      project_plan: projectPlan,
      milestones,
      re_evaluation: reEvaluation,
      daily_plan: dailyPlan,
      weekly_checkins: weeklyCheckins,
      market_alignment: marketAlignment,
      mentor_profile: mentorProfile
    };
  }

  private asObject(value: unknown): Record<string, unknown> {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value as Record<string, unknown>;
    }
    return {};
  }

  private asArray(value: unknown): unknown[] {
    return Array.isArray(value) ? value : [];
  }

  private asString(value: unknown, fallback = ''): string {
    if (typeof value === 'string') {
      return value.trim() || fallback;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    return fallback;
  }

  private toNumber(value: unknown, fallback = 0): number {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }
    const parsed = Number(this.asString(value));
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  private toStringArray(value: unknown): string[] {
    return this.asArray(value)
      .map((entry) => this.asString(entry))
      .filter((entry) => !!entry);
  }

  private extractWeeks(text: string, fallback = 0): number {
    const match = text.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      return fallback;
    }
    return Math.max(1, Math.ceil(Number(match[1])));
  }

  private extractHours(text: string, fallback = 2): number {
    const match = text.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      return fallback;
    }
    return Math.max(1, Math.ceil(Number(match[1])));
  }

  private estimateReadyDate(fromIso: string, weeksToAdd: number): string {
    const base = new Date(fromIso);
    if (Number.isNaN(base.getTime())) {
      return new Date().toISOString();
    }
    const normalizedWeeks = Math.max(1, weeksToAdd || 1);
    base.setDate(base.getDate() + normalizedWeeks * 7);
    return base.toISOString();
  }

  private toDurationHours(rawDuration: unknown): number {
    if (typeof rawDuration === 'number' && Number.isFinite(rawDuration)) {
      return Math.max(1, Math.round(rawDuration));
    }

    const text = this.asString(rawDuration);
    const match = text.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      return 2;
    }
    return Math.max(1, Math.round(Number(match[1])));
  }

  private fallbackCoursesForSkill(
    skill: string,
    currentLevel: number
  ): CareerLearningPlanResponse['formations'][number]['courses'] {
    const level: 'beginner' | 'intermediate' | 'advanced' = currentLevel <= 3
      ? 'beginner'
      : currentLevel <= 6
        ? 'intermediate'
        : 'advanced';

    if (this.isSoftSkill(skill)) {
      const query = encodeURIComponent(this.softCourseSearchQuery(skill));
      return [
        {
          id: `${skill}-coursera-soft-fallback`,
          title: `${skill} communication track`,
          platform: 'Coursera',
          url: `https://www.coursera.org/search?query=${query}`,
          provider: 'Coursera',
          duration_hours: 10,
          level,
          phase_ref: 1,
          reason: 'Parcours structure pour renforcer cette competence soft en contexte reel.'
        },
        {
          id: `${skill}-linkedin-soft-fallback`,
          title: `${skill} workplace modules`,
          platform: 'LinkedIn Learning',
          url: `https://www.linkedin.com/learning/search?keywords=${query}`,
          provider: 'LinkedIn Learning',
          duration_hours: 8,
          level,
          phase_ref: 1,
          reason: 'Modules pratiques axes sur les situations professionnelles quotidiennes.'
        },
        {
          id: `${skill}-udemy-soft-fallback`,
          title: `${skill} practical drills`,
          platform: 'Udemy',
          url: `https://www.udemy.com/courses/search/?q=${query}`,
          provider: 'Udemy',
          duration_hours: 9,
          level,
          phase_ref: 1,
          reason: 'Exercices concrets pour transformer la theorie en reflexes operationnels.'
        }
      ];
    }

    const encodedSkill = encodeURIComponent(skill);
    const docsUrl = this.officialDocsUrl(skill);
    const techCourses: CareerLearningPlanResponse['formations'][number]['courses'] = [
      {
        id: `${skill}-udemy-fallback`,
        title: `${skill} fundamentals`,
        platform: 'Udemy',
        url: `https://www.udemy.com/courses/search/?q=${encodedSkill}`,
        provider: 'Udemy',
        duration_hours: 10,
        level,
        phase_ref: 1,
        reason: 'Recommendation generee automatiquement a partir de votre skill gap.'
      },
      {
        id: `${skill}-coursera-fallback`,
        title: `${skill} practical path`,
        platform: 'Coursera',
        url: `https://www.coursera.org/search?query=${encodedSkill}`,
        provider: 'Coursera',
        duration_hours: 12,
        level,
        phase_ref: 1,
        reason: 'Parcours alternatif pour consolider cette competence.'
      }
    ];

    if (docsUrl) {
      techCourses.push({
        id: `${skill}-official-docs-fallback`,
        title: `${skill} official docs path`,
        platform: 'Official Docs',
        url: docsUrl,
        provider: 'Official Documentation',
        duration_hours: 8,
        level,
        phase_ref: 1,
        reason: 'Documentation officielle pour consolider les bases et les bonnes pratiques.'
      });
    } else {
      techCourses.push({
        id: `${skill}-edx-fallback`,
        title: `${skill} academic path`,
        platform: 'edX',
        url: `https://www.edx.org/search?q=${encodedSkill}`,
        provider: 'edX',
        duration_hours: 10,
        level,
        phase_ref: 1,
        reason: 'Alternative academique pour diversifier les exercices et la pratique.'
      });
    }

    return techCourses;
  }

  private softCourseSearchQuery(skill: string): string {
    const key = skill.trim().toLowerCase();
    if (key.includes('communication')) {
      return 'effective communication skills';
    }
    if (key.includes('lead')) {
      return 'leadership and influence';
    }
    if (key.includes('team') || key.includes('collaboration')) {
      return 'teamwork and collaboration';
    }
    if (key.includes('time')) {
      return 'time management and productivity';
    }
    if (key.includes('negotiation')) {
      return 'negotiation skills';
    }
    if (key.includes('presentation')) {
      return 'public speaking and presentation skills';
    }
    return skill;
  }

  private officialDocsUrl(skill: string): string | null {
    const key = skill.trim().toLowerCase();
    const docs: Record<string, string> = {
      java: 'https://docs.oracle.com/en/java/',
      spring: 'https://spring.io/guides',
      python: 'https://docs.python.org/3/tutorial/',
      javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      typescript: 'https://www.typescriptlang.org/docs/',
      react: 'https://react.dev/learn',
      angular: 'https://angular.dev/overview',
      node: 'https://nodejs.org/en/docs/guides/',
      docker: 'https://docs.docker.com/get-started/',
      kubernetes: 'https://kubernetes.io/docs/tutorials/',
      sql: 'https://www.w3schools.com/sql/',
      git: 'https://git-scm.com/doc',
      tensorflow: 'https://www.tensorflow.org/learn',
      jest: 'https://jestjs.io/docs/getting-started',
      github: 'https://docs.github.com/'
    };

    for (const [token, url] of Object.entries(docs)) {
      if (key.includes(token)) {
        return url;
      }
    }

    return null;
  }

  private normalizePriority(value: string): 'critical' | 'high' | 'medium' | 'low' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'critical' || normalized === 'high' || normalized === 'medium' || normalized === 'low') {
      return normalized;
    }
    return 'medium';
  }

  private normalizeCourseLevel(value: string): 'beginner' | 'intermediate' | 'advanced' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'beginner' || normalized === 'intermediate' || normalized === 'advanced') {
      return normalized;
    }
    if (normalized === 'easy') {
      return 'beginner';
    }
    if (normalized === 'medium') {
      return 'intermediate';
    }
    if (normalized === 'hard') {
      return 'advanced';
    }
    return 'intermediate';
  }

  private normalizeAssessmentType(value: string): 'quiz' | 'code-challenge' | 'project-review' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'quiz' || normalized === 'code-challenge' || normalized === 'project-review') {
      return normalized;
    }
    return 'quiz';
  }

  private normalizeReinforcementType(value: string): 'project' | 'exercise' | 'kata' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'project' || normalized === 'exercise' || normalized === 'kata') {
      return normalized;
    }
    if (normalized === 'practice' || normalized === 'challenge') {
      return 'exercise';
    }
    return 'project';
  }

  private normalizeDifficulty(value: string): 'easy' | 'medium' | 'hard' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'easy' || normalized === 'medium' || normalized === 'hard') {
      return normalized;
    }
    return 'medium';
  }

  private normalizeProjectDifficulty(value: string): 'medium' | 'hard' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'hard') {
      return 'hard';
    }
    return 'medium';
  }

  private normalizeTaskType(value: string): 'watch' | 'read' | 'code' | 'review' | 'practice' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'watch' || normalized === 'read' || normalized === 'code'
      || normalized === 'review' || normalized === 'practice') {
      return normalized;
    }
    return 'practice';
  }

  private normalizeMentorType(value: string): 'senior-dev' | 'bootcamp-grad' | 'career-changer' | 'domain-expert' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'senior-dev' || normalized === 'bootcamp-grad'
      || normalized === 'career-changer' || normalized === 'domain-expert') {
      return normalized;
    }
    return 'senior-dev';
  }

  private normalizeLanguage(value: string): 'en' | 'fr' | 'ar' {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'en' || normalized === 'fr' || normalized === 'ar') {
      return normalized;
    }
    return 'en';
  }
}
