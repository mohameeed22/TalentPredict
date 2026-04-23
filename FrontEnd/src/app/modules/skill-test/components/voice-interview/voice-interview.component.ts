import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TestApiService } from '../../services/test-api.service';
import { AuthService } from '../../../auth/services/auth.service';

interface InterviewTurn {
  question: string;
  answer: string;
  scores?: Record<string, number>;
  feedback?: string;
  next_action?: string;
  red_flags?: string[];
  topic?: string;
}

type Phase = 'setup' | 'interviewing' | 'evaluating' | 'results';

@Component({
  selector: 'app-voice-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voice-interview.component.html',
  styleUrl: './voice-interview.component.scss'
})
export class VoiceInterviewComponent implements OnInit, OnDestroy {
  private api = inject(TestApiService);
  private authService = inject(AuthService);
  private router = inject(Router);

  // ── Setup state
  role = '';
  level = 'mid';
  language = 'fr';
  maxTurns = 5;
  focusArea = 'general';

  ngOnInit(): void {
    const user = this.authService.getCurrentUser() as any;
    if (user?.position) {
      this.role = user.position;
    }
    // Map integer level (1-5) to junior/mid/senior
    if (user?.level) {
      const lvl = Number(user.level);
      if (lvl <= 2) this.level = 'junior';
      else if (lvl <= 4) this.level = 'mid';
      else this.level = 'senior';
    }
  }

  readonly roleSuggestions = [
    'Full Stack Developer', 'DevOps Engineer', 'Data Scientist',
    'UX Designer', 'Product Manager', 'Backend Engineer',
    'Frontend Developer', 'Machine Learning Engineer'
  ];
  readonly levels = ['junior', 'mid', 'senior'];
  readonly focusAreas = ['general', 'technical', 'soft skills', 'leadership', 'system design'];
  protected Math = Math;

  // ── Interview state
  phase = signal<Phase>('setup');
  history = signal<InterviewTurn[]>([]);
  currentQuestion = signal<string>('');
  currentAnswer = '';
  currentTopic = signal<string>('');
  currentDifficulty = signal<string>('');
  followUpCue = signal<string>('');
  loading = signal(false);
  error = signal<string | null>(null);

  // ── Speech
  isListening = signal(false);
  isSpeaking = signal(false);
  speechSupported = typeof window !== 'undefined'
    && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  private recognition: any = null;

  // ── Results
  summary = signal<any>(null);

  // ── Computed helpers
  get turnNumber() { return this.history().length + 1; }
  get progressPct() { return Math.round((this.history().length / this.maxTurns) * 100); }
  get avgScore() {
    const turns = this.history().filter(t => t.scores);
    if (!turns.length) return 0;
    const total = turns.reduce((acc, t) => {
      const vals = Object.values(t.scores!);
      return acc + vals.reduce((s, v) => s + v, 0) / vals.length;
    }, 0);
    return Math.round(total / turns.length);
  }

  getScoreClass(score: number): string {
    if (score >= 75) return 'score-high';
    if (score >= 50) return 'score-mid';
    return 'score-low';
  }

  getRecommendationClass(rec: string): string {
    const map: Record<string, string> = {
      strong_hire: 'rec-green', hire: 'rec-blue',
      borderline: 'rec-orange', no_hire: 'rec-red'
    };
    return map[rec] ?? 'rec-blue';
  }

  getRecommendationLabel(rec: string): string {
    const map: Record<string, string> = {
      strong_hire: '✅ Strong Hire', hire: '👍 Hire',
      borderline: '⚠️ Borderline', no_hire: '❌ No Hire'
    };
    return map[rec] ?? rec;
  }

  scoreEntries(scores: Record<string, number>) {
    const icons: Record<string, string> = {
      relevance: '🎯', depth: '🔬', clarity: '💬', confidence: '💪'
    };
    return Object.entries(scores).map(([k, v]) => ({
      key: k, value: v,
      label: k.charAt(0).toUpperCase() + k.slice(1),
      icon: icons[k] ?? '📊'
    }));
  }

  get wordCount(): number {
    return this.currentAnswer.split(' ').filter(w => w).length;
  }

  turnAvgScore(scores: Record<string, number>): number {
    const vals = Object.values(scores);
    if (!vals.length) return 0;
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }

  // ── Actions ────────────────────────────────────────────────────────────────

  startInterview(): void {
    if (!this.role.trim()) return;
    this.phase.set('interviewing');
    this.history.set([]);
    this.error.set(null);
    this._fetchNextQuestion();
  }

  private _fetchNextQuestion(): void {
    this.loading.set(true);
    this.currentAnswer = '';
    this.error.set(null);

    this.api.getInterviewQuestion({
      role: this.role,
      level: this.level,
      focus_area: this.focusArea,
      history: this.history(),
      language: this.language,
    }).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        this.currentQuestion.set(res.question ?? '');
        this.followUpCue.set(res.follow_up_cue ?? '');
        this.currentTopic.set(res.topic ?? '');
        this.currentDifficulty.set(res.difficulty ?? 'medium');
        if (this.ttsSupported) {
          this._speak(res.question ?? '');
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set('Impossible de générer la question. Réessayez.');
        console.error(err);
      }
    });
  }

  submitAnswer(): void {
    if (!this.currentAnswer.trim()) return;
    this.phase.set('evaluating');
    this.loading.set(true);
    this._stopListening();
    this._stopSpeaking();

    const question = this.currentQuestion();
    const answer = this.currentAnswer.trim();

    this.api.evaluateInterviewTurn({
      role: this.role,
      level: this.level,
      question,
      answer,
      turn_number: this.turnNumber,
      max_turns: this.maxTurns,
      language: this.language,
    }).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        const turn: InterviewTurn = {
          question, answer,
          scores: res.scores,
          feedback: res.feedback,
          next_action: res.next_action,
          red_flags: res.red_flags ?? [],
          topic: this.currentTopic(),
        };
        this.history.update(h => [...h, turn]);

        if (res.next_action === 'end' || this.history().length >= this.maxTurns) {
          this._fetchSummary();
        } else {
          this.phase.set('interviewing');
          this._fetchNextQuestion();
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.phase.set('interviewing');
        this.error.set('Erreur d\'évaluation. Réessayez.');
        console.error(err);
      }
    });
  }

  private _fetchSummary(): void {
    this.loading.set(true);
    this.api.getInterviewSummary({
      role: this.role,
      level: this.level,
      history: this.history(),
      language: this.language,
    }).subscribe({
      next: (res: any) => {
        this.loading.set(false);
        this.summary.set(res);
        sessionStorage.setItem('voiceInterviewResult', JSON.stringify(res));
        this.phase.set('results');
      },
      error: () => {
        this.loading.set(false);
        const fallback = { overall_score: this.avgScore, recommendation: 'borderline' };
        this.summary.set(fallback);
        sessionStorage.setItem('voiceInterviewResult', JSON.stringify(fallback));
        this.phase.set('results');
      }
    });
  }

  // ── Speech Recognition ────────────────────────────────────────────────────

  toggleListen(): void {
    if (this.isListening()) {
      this._stopListening();
    } else {
      this._startListening();
    }
  }

  private _startListening(): void {
    if (!this.speechSupported) return;
    const SpeechRecognition = (window as any).webkitSpeechRecognition ?? (window as any).SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = this.language === 'fr' ? 'fr-FR' : 'en-US';

    let finalTranscript = this.currentAnswer;
    this.recognition.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += t + ' ';
        } else {
          interim = t;
        }
      }
      this.currentAnswer = finalTranscript + interim;
    };

    this.recognition.onend = () => this.isListening.set(false);
    this.recognition.onerror = () => this.isListening.set(false);
    this.recognition.start();
    this.isListening.set(true);
  }

  private _stopListening(): void {
    if (this.recognition) {
      try { this.recognition.stop(); } catch {}
      this.recognition = null;
    }
    this.isListening.set(false);
  }

  // ── Text-to-Speech ────────────────────────────────────────────────────────

  private _speak(text: string): void {
    if (!this.ttsSupported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.language === 'fr' ? 'fr-FR' : 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onstart = () => this.isSpeaking.set(true);
    utterance.onend = () => this.isSpeaking.set(false);
    utterance.onerror = () => this.isSpeaking.set(false);
    window.speechSynthesis.speak(utterance);
  }

  private _stopSpeaking(): void {
    if (this.ttsSupported) window.speechSynthesis.cancel();
    this.isSpeaking.set(false);
  }

  replayQuestion(): void {
    this._speak(this.currentQuestion());
  }

  // ── Navigation ─────────────────────────────────────────────────────────────

  reset(): void {
    this._stopListening();
    this._stopSpeaking();
    this.phase.set('setup');
    this.history.set([]);
    this.summary.set(null);
    this.currentAnswer = '';
    this.error.set(null);
  }

  goBack(): void {
    this.reset();
    this.router.navigate(['/skill-test']);
  }

  goToMesResultats(): void {
    this._stopListening();
    this._stopSpeaking();
    this.router.navigate(['/mes-resultats']);
  }

  ngOnDestroy(): void {
    this._stopListening();
    this._stopSpeaking();
  }
}
