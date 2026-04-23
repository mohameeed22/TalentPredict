import { Component, OnInit, inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { TestApiService } from '../../services/test-api.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { BiometricsService } from '../../services/biometrics.service';
import { ProctoringService } from '../../services/proctoring.service';

interface ScenarioData {
  scenario_title: string;
  scenario_description: string;
  skills_tested: string[];
}

interface ScenarioEvaluation {
  scores: {
    empathy: number;
    assertiveness: number;
    pragmatism: number;
    communication_clarity: number;
  };
  strengths: string[];
  areas_for_improvement: string[];
  overall_feedback: string;
  culture_add_profile: string;
}

interface FraudFlag {
  type: string;
  description: string;
}

interface FraudVerdict {
  fraud_score: number;
  fraud_risk: string;
  explanation: string;
  flags?: FraudFlag[];
}

@Component({
  selector: 'app-scenario-simulator',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './scenario-simulator.component.html',
  styleUrl: './scenario-simulator.component.scss'
})
export class ScenarioSimulatorComponent implements OnInit, OnDestroy {
  private testApi  = inject(TestApiService);
  private notify   = inject(NotificationService);
  private router   = inject(Router);
  private cdr      = inject(ChangeDetectorRef);
  private biometrics  = inject(BiometricsService);
  private proctoring  = inject(ProctoringService);

  // ── Config ─────────────────────────────────────────────────────
  role = '';
  selectedLevel = 'Mid-Level';
  readonly levels = ['Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager'];

  ngOnInit(): void {
    // Pre-fill from user profile if available
    const user = (this.router as any).injector?.get?.('AuthService')?.getCurrentUser?.() ?? null;
    if (user?.position) this.role = user.position;
  }

  readonly rolesSuggestions = [
    'Full-Stack Developer', 'Frontend Developer', 'Backend Developer',
    'DevOps Engineer', 'Data Scientist', 'Product Manager',
    'UX Designer', 'QA Engineer', 'Tech Lead', 'Scrum Master'
  ];

  // ── State ──────────────────────────────────────────────────────
  generatingScenario = false;
  scenario: ScenarioData | null = null;

  candidateResponse = '';
  submitting = false;
  evaluation: ScenarioEvaluation | null = null;
  fraudVerdict: FraudVerdict | null = null;

  // ── Proctoring / biometric status exposed to template ──────────
  get proctoringActive(): boolean { return this.proctoring.isActive; }
  get proctoringDenied(): boolean { return this.proctoring.isDenied; }
  get tabSwitchCount(): number    { return this.biometrics.tabSwitchCount; }
  get pasteWarning(): boolean     { return this.biometrics.suspiciousLargePaste; }

  // ── Character counter ──────────────────────────────────────────
  get responseLength(): number { return this.candidateResponse.length; }
  get responseTooShort(): boolean { return this.responseLength > 0 && this.responseLength < 50; }
  get responseReady(): boolean { return this.responseLength >= 50; }

  // ── Score helpers for template ─────────────────────────────────
  get scoreEntries(): { label: string; key: string; value: number; icon: string }[] {
    if (!this.evaluation?.scores) return [];
    return [
      { label: 'Empathie', key: 'empathy', value: this.evaluation.scores.empathy, icon: '❤️' },
      { label: 'Assertivité', key: 'assertiveness', value: this.evaluation.scores.assertiveness, icon: '💪' },
      { label: 'Pragmatisme', key: 'pragmatism', value: this.evaluation.scores.pragmatism, icon: '🎯' },
      { label: 'Clarté', key: 'communication_clarity', value: this.evaluation.scores.communication_clarity, icon: '💬' },
    ];
  }

  get averageScore(): number {
    if (!this.evaluation?.scores) return 0;
    const s = this.evaluation.scores;
    return Math.round((s.empathy + s.assertiveness + s.pragmatism + s.communication_clarity) / 4);
  }

  // ── Actions ────────────────────────────────────────────────────
  selectRole(r: string): void {
    this.role = r;
  }

  generateScenario(): void {
    if (!this.role.trim()) {
      this.notify.warning('Veuillez choisir ou saisir un rôle.');
      return;
    }

    this.generatingScenario = true;
    this.scenario = null;
    this.evaluation = null;
    this.fraudVerdict = null;
    this.candidateResponse = '';
    this.cdr.markForCheck();

    this.testApi.generateScenario({
      role: this.role.trim(),
      level: this.selectedLevel
    }).pipe(take(1)).subscribe({
      next: (res: any) => {
        this.generatingScenario = false;
        this.scenario = res as ScenarioData;
        this.cdr.markForCheck();

        // Start fraud monitoring when the scenario becomes visible
        this.biometrics.start();
        void this.proctoring.start().then(granted => {
          if (!granted) {
            this.notify.warning('Caméra non disponible — suivi en mode biométrique uniquement.');
          }
          this.cdr.markForCheck();
        });
      },
      error: (err: any) => {
        this.generatingScenario = false;
        this.notify.error(err?.error?.message ?? 'Impossible de générer le scénario.');
        this.cdr.markForCheck();
      }
    });
  }

  submitResponse(): void {
    if (!this.scenario || this.responseTooShort || this.submitting) return;

    // Capture fraud snapshots before stopping monitoring
    const biometricSnapshot  = this.biometrics.snapshot();
    const proctoringSnapshot = this.proctoring.snapshot();
    this.biometrics.stop();
    this.proctoring.stop();

    this.submitting = true;
    this.cdr.markForCheck();

    this.testApi.evaluateScenario({
      scenario: this.scenario.scenario_description,
      response: this.candidateResponse.trim(),
      fraudContext: {
        biometrics: { ...biometricSnapshot, proctoring: proctoringSnapshot }
      }
    }).pipe(take(1)).subscribe({
      next: (res: any) => {
        this.submitting = false;
        this.evaluation = res as ScenarioEvaluation;
        this.fraudVerdict = (res as any)?._fraud_verdict ?? null;
        // Save scenario result and navigate to soft results
        const existing = sessionStorage.getItem('softSkillsResult');
        const softData = existing ? JSON.parse(existing) : {};
        softData.scenarioEvaluation = this.evaluation;
        sessionStorage.setItem('softSkillsResult', JSON.stringify(softData));
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        this.submitting = false;
        this.notify.error(err?.error?.message ?? 'Évaluation échouée.');
        this.cdr.markForCheck();
      }
    });
  }

  getScoreClass(value: number): string {
    if (value >= 75) return 'score-high';
    if (value >= 50) return 'score-medium';
    return 'score-low';
  }

  reset(): void {
    this._stopFraudMonitoring();
    this.scenario = null;
    this.evaluation = null;
    this.fraudVerdict = null;
    this.candidateResponse = '';
    this.role = '';
  }

  newScenarioSameRole(): void {
    this._stopFraudMonitoring();
    this.evaluation = null;
    this.fraudVerdict = null;
    this.candidateResponse = '';
    this.generateScenario();
  }

  goBack(): void {
    this._stopFraudMonitoring();
    void this.router.navigate(['/skill-test']);
  }

  goToSoftResults(): void {
    this._stopFraudMonitoring();
    void this.router.navigate(['/evaluation/soft-results']);
  }

  ngOnDestroy(): void {
    this._stopFraudMonitoring();
  }

  private _stopFraudMonitoring(): void {
    this.biometrics.stop();
    this.proctoring.stop();
  }
}
