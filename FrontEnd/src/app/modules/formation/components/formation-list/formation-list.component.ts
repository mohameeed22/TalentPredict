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
import { catchError, map, of, forkJoin } from 'rxjs';
import { BiometricsService } from '../../../skill-test/services/biometrics.service';
import { ProctoringService } from '../../../skill-test/services/proctoring.service';
import { TestApiService } from '../../../skill-test/services/test-api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type DeadlineRiskLevel = 'on-track' | 'at-risk' | 'late';

interface KanbanColumn {
  status: StatutFormation;
  title: string;
}

interface ReviewDraft {
  reviewNote: string;
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
    { status: StatutFormation.PROPOSEE, title: 'Proposées' },
    { status: StatutFormation.EN_ATTENTE, title: 'En attente' },
    { status: StatutFormation.ACCEPTEE, title: 'Acceptées' },
    { status: StatutFormation.EN_COURS, title: 'En cours' },
    { status: StatutFormation.TERMINEE, title: 'Terminées' }
  ];
  
  formations = signal<FormationResponse[]>([]);
  filteredFormations = signal<FormationResponse[]>([]);
  selectedFilter = signal<StatutFormation | 'ALL'>('ALL');
  loading = signal(false);
  error = signal<string | null>(null);

  draggedFormationId = signal<string | null>(null);
  statusActionLoadingId = signal<string | null>(null);

  reviewDrafts = signal<Record<string, ReviewDraft>>({});
  reviewSaving = signal<Record<string, boolean>>({});

  activeQuizFormation = signal<FormationResponse | null>(null);
  miniQuizAnswers = signal<Record<string, number[]>>({});
  miniQuizSubmitting = signal<Record<string, boolean>>({});
  miniQuizMessage = signal<string | null>(null);
  miniQuizError = signal<string | null>(null);
  miniQuizFraudVerdicts = signal<Record<string, Record<string, any>>>({});

  currentUserGamification = signal<{ xp: number; level: number } | null>(null);

  certificateUploadingId = signal<string | null>(null);

  learningPlan = signal<CareerLearningPlanResponse | null>(null);
  learningPlanLoading = signal(false);
  learningPlanError = signal<string | null>(null);
  detectedWeakSkills = signal<NonNullable<LearningPlanRequest['weakSkills']>>([]);
  courseActionLoadingKey = signal<string | null>(null);
  courseActionError = signal<string | null>(null);
  courseActionSuccess = signal<string | null>(null);
  private softWeakSkillSet = new Set<string>();

  // ── Tabs ──────────────────────────────────────────────────────────────
  activeTab = signal<'VUE_ENSEMBLE' | 'ROADMAP' | 'FORMATIONS' | 'KANBAN'>('VUE_ENSEMBLE');

  // ── Recommendation filters ──────────────────────────────────────────────
  recoFilterSkill = signal<string>('ALL');
  recoFilterPriority = signal<string>('ALL');
  kanbanTypeFilter = signal<string>('ALL');

  targetRole = 'Software Engineer';
  experienceLevel: 'beginner' | 'junior' | 'mid' | 'senior' = 'junior';
  preferredLanguage: 'en' | 'fr' | 'ar' = 'fr';
  timezone = 'UTC';

  readonly StatutFormation = StatutFormation;
  private readonly miniQuizPassingScore = 70;
  
  private readonly miniQuizTemplates: Record<'tech' | 'soft' | 'certification', QuizTemplateQuestion[]> = {
    tech: [
      { key: 't-1', prompt: 'Pour valider {topic}, quelle action démontre le mieux la maîtrise ?', options: ['Regarder uniquement les vidéos du cours', 'Appliquer les concepts sur un cas concret', 'Lire le résumé final sans pratiquer', 'Installer uniquement les outils'], correctIndex: 1 },
      { key: 't-2', prompt: 'Quel réflexe réduit le plus les erreurs en production sur {topic} ?', options: ['Ne pas tester pour aller plus vite', 'Tester, vérifier les logs et documenter les changements', 'Modifier directement en production', 'Ignorer les conventions de code'], correctIndex: 1 }
    ],
    soft: [
      { key: 's-1', prompt: 'Dans un échange difficile lié à {topic}, quelle approche est la plus efficace ?', options: ['Parler plus fort pour imposer votre point de vue', 'Écouter activement, clarifier le besoin puis proposer une solution', 'Éviter la discussion', 'Répondre uniquement par message court'], correctIndex: 1 },
      { key: 's-2', prompt: 'Quel comportement renforce le plus la confiance de l’équipe ?', options: ['Ne jamais demander de feedback', 'Partager l’avancement, les risques et demander un retour', 'Promettre des délais irréalistes', 'Travailler en silo'], correctIndex: 1 }
    ],
    certification: [
      { key: 'c-1', prompt: 'Avant de passer la certification {topic}, quelle stratégie est la plus robuste ?', options: ['Réviser uniquement les dernières 24h', 'Faire des examens blancs et corriger les lacunes ciblées', 'Ignorer le syllabus officiel', 'Mémoriser sans comprendre les cas pratiques'], correctIndex: 1 },
      { key: 'c-2', prompt: 'Quel est un bon indicateur de préparation à l’examen ?', options: ['Résultats stables au-dessus du seuil sur plusieurs tests blancs', 'Un seul test réussi par hasard', 'Aucune simulation chronométrée', 'Aucune revue des erreurs'], correctIndex: 0 }
    ]
  };

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      this.currentUserId = String(currentUser.id);
      
      this.initializeDefaults();
      this.loadFormations();

      this.authService.fetchMyProfile().subscribe({
        next: (profile) => {
          if (profile.xp != null && profile.level != null) {
            this.currentUserGamification.set({ xp: profile.xp, level: profile.level });
          }
        },
        error: () => {}
      });
      
      // Auto generate plan based on weaknesses
      this.generateLearningPlan();
    } else {
      this.error.set("Utilisateur non identifié.");
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
    this.loading.set(true);
    this.formationService.getUserFormations(this.currentUserId).subscribe({
      next: (data) => {
        this.formations.set(data);
        this.hydrateReviewDrafts(data);
        this.applyActiveFilter();
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading formations:', err);
        this.loading.set(false);
      }
    });
  }

  generateLearningPlan(): void {
    if (!this.currentUserId) return;

    this.learningPlanLoading.set(true);
    this.learningPlanError.set(null);

    this.buildWeakSkillsFromUserData(this.currentUserId).subscribe({
      next: ({ weakSkills, softSkillKeys }) => {
        this.softWeakSkillSet = softSkillKeys;
        this.detectedWeakSkills.set(weakSkills);

        const payload: LearningPlanRequest = {
          candidate_id: this.currentUserId,
          targetRole: this.targetRole,
          experienceLevel: this.experienceLevel,
          hoursPerDay: 2,
          preferredLanguage: this.preferredLanguage,
          timezone: this.timezone,
          learningStyle: 'visual',
          weakSkills: weakSkills
        };

        this.careerService.generateLearningPlan(payload).subscribe({
          next: (plan) => {
            this.learningPlan.set(this.normalizeLearningPlan(plan));
            this.learningPlanLoading.set(false);
          },
          error: (err) => {
            this.learningPlanLoading.set(false);
            this.learningPlanError.set('Erreur lors de la génération du plan IA.');
          }
        });
      },
      error: () => {
        this.learningPlanLoading.set(false);
        this.learningPlanError.set('Impossible de récupérer vos faiblesses.');
      }
    });
  }

  // ── Filters & Computed ──────────────────────────────────────────────

  get filteredRecoFormations() {
    const plan = this.learningPlan();
    if (!plan) return [];
    let result = plan.formations;
    const skill = this.recoFilterSkill();
    const priority = this.recoFilterPriority();
    if (skill !== 'ALL') result = result.filter(f => f.skill.toLowerCase() === skill.toLowerCase());
    if (priority !== 'ALL') result = result.filter(f => f.priority === priority);
    return result;
  }

  recoUniqueSkills(): string[] {
    return [...new Set((this.learningPlan()?.formations || []).map(f => f.skill))];
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
    return '🌐';
  }

  formationsEnCoursCount(): number {
    return this.formations().filter(f => f.statut === StatutFormation.EN_COURS || f.statut === StatutFormation.ACCEPTEE).length;
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
    let list = this.formations().filter(f => {
      if (f.statut !== status) return false;
      if (typeFilter === 'ALL') return true;
      return f.type?.toString().includes(typeFilter);
    });

    if (status === StatutFormation.PROPOSEE) {
      const plan = this.learningPlan();
      if (plan && plan.formations) {
        plan.formations.forEach(f => {
          f.courses.forEach(c => {
            const exists = this.formations().some(dbF => dbF.url === c.url || dbF.titre === c.title);
            if (!exists) {
              const type = this.resolveFormationType(f.skill);
              if (typeFilter === 'ALL' || type.toString().includes(typeFilter)) {
                list.push({
                  id: `virtual_${f.skill}_${c.id || c.title}`,
                  titre: c.title,
                  description: `Cible: ${f.skill}. ${c.reason || 'Suggéré par IA'}`,
                  type: type,
                  statut: StatutFormation.PROPOSEE,
                  duree: Math.max(1, Math.round(Number(c.duration_hours) || 1)),
                  progression: 0,
                  dateProposition: new Date(),
                  fournisseur: c.platform,
                  url: c.url
                } as any);
              }
            }
          });
        });
      }
    }
    return list;
  }

  startCoursePractice(skill: string, course: any): void {
    this.courseActionLoadingKey.set(`${skill}::${course.id}`);
    this.formationService.createFormation(this.currentUserId, {
      titre: course.title,
      description: `Cible: ${skill}. ${course.reason}`,
      type: this.resolveFormationType(skill),
      duree: course.duration_hours || 1,
      fournisseur: course.platform,
      url: course.url,
      statut: StatutFormation.EN_ATTENTE
    }).subscribe({
      next: () => {
        this.courseActionSuccess.set(`Le cours "${course.title}" a été ajouté.`);
        this.loadFormations();
      },
      error: () => this.courseActionError.set('Erreur lors de l\'ajout du cours.'),
      complete: () => this.courseActionLoadingKey.set(null)
    });
  }

  isCourseLoading(skill: string, course: any): boolean {
    return this.courseActionLoadingKey() === `${skill}::${course.id}`;
  }

  // ── PDF Export ───────────────────────────────────────────────────────
  isExportingPdf = signal(false);

  exportToPdf(): void {
    this.isExportingPdf.set(true);
    const element = document.querySelector('.dashboard-root') as HTMLElement;
    if (!element) return;

    html2canvas(element, { scale: 2 }).then(canvas => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; 
      const pageHeight = 297; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('Mes_Formations_Roadmap.pdf');
      this.isExportingPdf.set(false);
    });
  }

  // ── Kanban Logic ─────────────────────────────────────────────────────

  statusCount(status: StatutFormation): number {
    return this.formationsByStatusFiltered(status).length;
  }

  onCardDragStart(event: DragEvent, formation: FormationResponse): void {
    if (event.dataTransfer) {
      this.draggedFormationId.set(formation.id);
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text', formation.id);
    }
  }

  onCardDragEnd(): void {
    this.draggedFormationId.set(null);
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, targetStatus: StatutFormation): void {
    event.preventDefault();
    const formationId = event.dataTransfer?.getData('text') || this.draggedFormationId();
    this.draggedFormationId.set(null);
    if (!formationId || formationId.startsWith('virtual_')) return;
    
    const formation = this.formations().find(f => f.id === formationId);
    if (formation && formation.statut !== targetStatus) {
      this.moveFormationToStatus(formation, targetStatus);
    }
  }

  moveToNextStatus(formation: FormationResponse): void {
    const flow = [StatutFormation.PROPOSEE, StatutFormation.EN_ATTENTE, StatutFormation.ACCEPTEE, StatutFormation.EN_COURS, StatutFormation.TERMINEE];
    const idx = flow.indexOf(formation.statut);
    if (idx >= 0 && idx < flow.length - 1) {
      this.moveFormationToStatus(formation, flow[idx + 1]);
    }
  }

  canMoveToNextStatus(formation: FormationResponse): boolean {
    return formation.statut !== StatutFormation.TERMINEE && formation.statut !== StatutFormation.ANNULEE;
  }

  moveFormationToStatus(formation: FormationResponse, targetStatus: StatutFormation): void {
    this.statusActionLoadingId.set(formation.id);
    this.formationService.updateFormationStatus(formation.id, targetStatus).subscribe({
      next: (updated) => this.upsertUpdatedFormation(updated),
      complete: () => this.statusActionLoadingId.set(null)
    });
  }

  updateProgressionFromInput(formation: FormationResponse, rawValue: string | number): void {
    const progression = Math.max(0, Math.min(100, Number(rawValue)));
    if (formation.progression !== progression) {
      this.statusActionLoadingId.set(formation.id);
      this.formationService.updateFormationProgress(formation.id, progression).subscribe({
        next: (updated) => this.upsertUpdatedFormation(updated),
        complete: () => this.statusActionLoadingId.set(null)
      });
    }
  }

  isStatusActionLoading(id: string): boolean {
    return this.statusActionLoadingId() === id;
  }

  // ── Risk & Deadlines ─────────────────────────────────────────────────
  deadlineRiskLevel(formation: FormationResponse): DeadlineRiskLevel {
    if (formation.statut === StatutFormation.TERMINEE || (formation.progression ?? 0) >= 100) return 'on-track';
    const now = new Date().getTime();
    const startDate = formation.dateDebut ? new Date(formation.dateDebut).getTime() : 0;
    const endDate = formation.dateFin ? new Date(formation.dateFin).getTime() : 0;
    if (endDate && now > endDate) return 'late';
    if (startDate && endDate && now > startDate) {
      const progress = (now - startDate) / (endDate - startDate) * 100;
      if ((formation.progression ?? 0) + 20 < progress) return 'at-risk';
    }
    return 'on-track';
  }

  deadlineRiskLabel(formation: FormationResponse): string {
    const lvl = this.deadlineRiskLevel(formation);
    return lvl === 'late' ? 'En Retard' : lvl === 'at-risk' ? 'À Risque' : 'Dans les temps';
  }

  deadlineRiskClass(formation: FormationResponse): string {
    const lvl = this.deadlineRiskLevel(formation);
    return lvl === 'late' ? 'k-badge critical' : lvl === 'at-risk' ? 'k-badge high' : 'k-badge low';
  }

  lateCount(): number { return this.formations().filter(f => this.deadlineRiskLevel(f) === 'late').length; }
  atRiskCount(): number { return this.formations().filter(f => this.deadlineRiskLevel(f) === 'at-risk').length; }
  onTrackCount(): number { return this.formations().filter(f => this.deadlineRiskLevel(f) === 'on-track').length; }

  // ── Mini Quiz (Modal) ────────────────────────────────────────────────
  
  isMiniQuizEligible(formation: FormationResponse): boolean {
    return formation.statut === StatutFormation.TERMINEE || (formation.progression ?? 0) >= 100;
  }

  openMiniQuiz(formation: FormationResponse): void {
    if (this.isMiniQuizEligible(formation)) {
      this.activeQuizFormation.set(formation);
      this._startFraudMonitoring();
      const qCount = this.miniQuizQuestions(formation).length;
      this.miniQuizAnswers.set({ [formation.id]: Array(qCount).fill(-1) });
      this.miniQuizMessage.set(null);
      this.miniQuizError.set(null);
    }
  }

  closeMiniQuiz(): void {
    this.activeQuizFormation.set(null);
    this._stopFraudMonitoring();
  }

  miniQuizQuestions(formation: FormationResponse): MiniQuizQuestion[] {
    const family = this.resolveFormationType(formation.titre) === TypeFormation.SOFT_SKILL ? 'soft' : 'tech';
    return this.miniQuizTemplates[family].map((t, i) => ({
      id: `${formation.id}-${t.key}`,
      prompt: t.prompt.replace('{topic}', formation.titre),
      options: t.options,
      correctIndex: t.correctIndex
    }));
  }

  miniQuizAnswerAt(fid: string, idx: number): number | null {
    return this.miniQuizAnswers()[fid]?.[idx] ?? null;
  }

  setMiniQuizAnswer(fid: string, qIdx: number, oIdx: number): void {
    this.miniQuizAnswers.update(state => {
      const arr = [...(state[fid] || [])];
      arr[qIdx] = oIdx;
      return { ...state, [fid]: arr };
    });
  }

  submitMiniQuiz(formation: FormationResponse): void {
    const answers = this.miniQuizAnswers()[formation.id] || [];
    if (answers.some(a => a < 0)) {
      this.miniQuizError.set('Veuillez répondre à toutes les questions.');
      return;
    }

    const questions = this.miniQuizQuestions(formation);
    const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0);
    const score = Math.round((correct / questions.length) * 100);

    const bio = this.biometrics.snapshot();
    const proc = this.proctoring.snapshot();
    this._stopFraudMonitoring();

    this.miniQuizSubmitting.set({ [formation.id]: true });
    
    this.formationService.submitMiniTest(formation.id, { score, correctAnswers: correct, totalQuestions: questions.length, passingScore: 70 }).subscribe({
      next: (res) => {
        this.upsertUpdatedFormation(res);
        this.testApi.checkFraud({ candidateId: this.currentUserId, testType: 'mini_quiz', fraudContext: { biometrics: { ...bio, proctoring: proc } } }).subscribe(f => {
           this.miniQuizFraudVerdicts.update(v => ({ ...v, [formation.id]: f as any }));
        });
        
        if (res.miniTestPassed) {
          this.miniQuizMessage.set(`Test réussi avec ${score}% !`);
        } else {
          this.miniQuizError.set(`Échec avec ${score}%. Revoyez le cours.`);
        }
      },
      error: () => this.miniQuizError.set('Erreur serveur.'),
      complete: () => this.miniQuizSubmitting.set({ [formation.id]: false })
    });
  }

  isMiniQuizSubmitting(id: string) { return !!this.miniQuizSubmitting()[id]; }

  canUploadCertificate(f: FormationResponse) { return f.miniTestPassed === true; }

  onCertificateSelected(event: Event, formation: FormationResponse) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && this.canUploadCertificate(formation)) {
      this.certificateUploadingId.set(formation.id);
      this.formationService.uploadCertificate(formation.id, file).subscribe({
        next: (res) => {
           this.upsertUpdatedFormation(res);
           this.miniQuizMessage.set('Certificat téléversé avec succès.');
        },
        complete: () => this.certificateUploadingId.set(null)
      });
    }
  }

  isCertificateUploading(id: string) { return this.certificateUploadingId() === id; }

  // ── Admin / Review Notes ─────────────────────────────────────────────
  
  canEditReviewNotes(): boolean {
    const role = this.authService.getCurrentUser()?.role;
    return role === Role.ADMIN || role === Role.RECRUITER;
  }

  getReviewDraft(id: string) { return this.reviewDrafts()[id] || { reviewNote: '' }; }
  
  updateReviewDraft(id: string, field: keyof ReviewDraft, val: string) {
    this.reviewDrafts.update(d => ({ ...d, [id]: { ...this.getReviewDraft(id), [field]: val } }));
  }

  saveReviewNotes(formation: FormationResponse): void {
    if (this.canEditReviewNotes()) {
      this.formationService.updateFormationReviewNotes(formation.id, { reviewNote: this.getReviewDraft(formation.id).reviewNote }).subscribe(res => {
         this.upsertUpdatedFormation(res);
         this.hydrateReviewDrafts(this.formations());
      });
    }
  }

  private hydrateReviewDrafts(rows: FormationResponse[]) {
    const drafts: Record<string, ReviewDraft> = {};
    rows.forEach(r => drafts[r.id] = { reviewNote: r.reviewNote || '' });
    this.reviewDrafts.set(drafts);
  }

  // ── Internal Helpers ─────────────────────────────────────────────────
  
  weakSkillBadgeClass(name: string) { return this.resolveFormationType(name) === TypeFormation.SOFT_SKILL ? 'soft' : 'tech'; }
  courseReadinessGain(s: string, c: any) { return 2; } // simplified
  courseExpectedLevelAfter(s: string, c: any) { return 8; } // simplified
  
  private applyActiveFilter() {
    this.filteredFormations.set(this.selectedFilter() === 'ALL' ? this.formations() : this.formations().filter(f => f.statut === this.selectedFilter()));
  }

  private upsertUpdatedFormation(f: FormationResponse) {
    this.formations.update(rows => rows.map(r => r.id === f.id ? f : r));
    if (this.activeQuizFormation()?.id === f.id) this.activeQuizFormation.set(f);
  }

  private resolveFormationType(skill: string): TypeFormation {
    return this.softWeakSkillSet.has(skill.toLowerCase()) ? TypeFormation.SOFT_SKILL : TypeFormation.TECH_SKILL;
  }

  private initializeDefaults() {
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    this.authService.getProfile(this.currentUserId).subscribe(p => {
      this.targetRole = p.titreProfessionnel || this.targetRole;
      this.experienceLevel = (p.experienceAns || 0) <= 2 ? 'junior' : 'senior';
    });
  }

  private buildWeakSkillsFromUserData(userId: string) {
    return forkJoin({
      skills: this.skillsService.getUserSkills(userId).pipe(catchError(() => of([]))),
      soft: this.softSkillsService.getLastAnalysis().pipe(catchError(() => of(null)))
    }).pipe(
      map(({ skills, soft }) => {
        const techWeak = skills.filter(s => s.type === TypeSkill.TECH).sort((a,b) => (a.niveau||1)-(b.niveau||1)).slice(0,3).map(s => ({ name: s.nom, score: (s.niveau||1)*2, required_level: 8 }));
        const softWeak = Object.entries(soft?.mergedSoftSkills || {}).sort((a,b) => a[1]-b[1]).slice(0,3).map(([k,v]) => ({ name: k, score: v, required_level: 8 }));
        
        const softKeys = new Set(softWeak.map(s => s.name.toLowerCase()));
        if (!softKeys.size) softKeys.add('communication');

        return { weakSkills: [...techWeak, ...softWeak].slice(0, 6), softSkillKeys: softKeys };
      })
    );
  }

  private normalizeLearningPlan(plan: CareerLearningPlanResponse): CareerLearningPlanResponse {
    // Basic normalization so properties exist
    const raw = plan as any;
    const skillGap = raw.skill_gap_analysis || {};
    const roadmap = raw.roadmap || [];
    const formations = raw.formations || [];
    
    return {
      meta: { estimated_ready_date: raw.meta?.estimated_ready_date || raw.generated_at || new Date().toISOString() },
      summary: { overall_readiness_pct: raw.summary?.overall_readiness_pct || 40, profile_evaluation: raw.summary?.profile_evaluation || 'Analyse en cours...' },
      skill_gap_analysis: { breakdown: (skillGap.breakdown || skillGap.target_role_requirements || []).map((b:any) => ({ skill: b.skill, current_level: b.current_level||0, required_level: b.required_level||10 })) },
      roadmap: roadmap.map((r:any) => ({ phase: r.phase||1, title: r.title||r.phase||'', duration_weeks: r.duration_weeks||r.duration||2, focus_skills: r.focus_skills||r.focus||[] })),
      formations: formations.map((f:any) => ({ skill: f.skill, priority: f.priority, courses: (f.courses||[]).map((c:any) => ({ id: c.id||Date.now(), title: c.title, platform: c.platform, url: c.url, duration_hours: c.duration_hours || c.duration, level: c.level, reason: c.reason })) }))
    } as any;
  }
}
