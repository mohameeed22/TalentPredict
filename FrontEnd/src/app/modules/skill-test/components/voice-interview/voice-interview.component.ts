import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
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
  follow_up_cue?: string;
  next_action?: string;
  red_flags?: string[];
  topic?: string;
  wpm?: number;
}

type Phase = 'setup' | 'interviewing' | 'evaluating' | 'results';

@Component({
  selector: 'app-voice-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voice-interview.component.html',
  styleUrl: './voice-interview.component.scss',
})
export class VoiceInterviewComponent implements OnInit, AfterViewInit, OnDestroy {
  private api = inject(TestApiService);
  private authService = inject(AuthService);
  private router = inject(Router);

  @ViewChild('waveformCanvas') waveformCanvasRef?: ElementRef<HTMLCanvasElement>;

  // ── Setup state
  role = '';
  level = 'mid';
  language = 'fr';
  maxTurns = 5;
  focusArea = 'general';
  private currentUserId = '';

  ngOnInit(): void {
    const user = this.authService.getCurrentUser() as any;
    if (user?.position) this.role = user.position;
    if (user?.level) {
      const lvl = Number(user.level);
      if (lvl <= 2) this.level = 'junior';
      else if (lvl <= 4) this.level = 'mid';
      else this.level = 'senior';
    }
    this.currentUserId = user?.id ?? '';
  }

  ngAfterViewInit(): void {}

  readonly roleSuggestions = [
    'Full Stack Developer', 'DevOps Engineer', 'Data Scientist',
    'UX Designer', 'Product Manager', 'Backend Engineer',
    'Frontend Developer', 'Machine Learning Engineer',
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
  saveStatus = signal<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // ── Speech STT state
  isListening = signal(false);
  isSpeaking = signal(false);
  interimText = signal('');
  finalText = signal('');
  speechSupported =
    typeof window !== 'undefined' &&
    ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  ttsSupported =
    typeof window !== 'undefined' && 'speechSynthesis' in window;
  private recognition: any = null;
  private listenStartTime = 0;

  // ── Waveform
  private audioCtx?: AudioContext;
  private analyser?: AnalyserNode;
  private animFrameId = 0;
  private mediaStream?: MediaStream;

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
      borderline: 'rec-orange', no_hire: 'rec-red',
    };
    return map[rec] ?? 'rec-blue';
  }

  getRecommendationLabel(rec: string): string {
    const map: Record<string, string> = {
      strong_hire: '✅ Strong Hire', hire: '👍 Hire',
      borderline: '⚠️ Borderline', no_hire: '❌ No Hire',
    };
    return map[rec] ?? rec;
  }

  scoreEntries(scores: Record<string, number>) {
    const icons: Record<string, string> = {
      relevance: '🎯', depth: '🔬', clarity: '💬', confidence: '💪',
    };
    return Object.entries(scores)
      .filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => ({
        key: k,
        value: v,
        label: k.charAt(0).toUpperCase() + k.slice(1),
        icon: icons[k] ?? '📊',
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
    this.saveStatus.set('idle');
    this._fetchNextQuestion();
  }

  private _fetchNextQuestion(): void {
    this.loading.set(true);
    this.currentAnswer = '';
    this.interimText.set('');
    this.finalText.set('');
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
        if (this.ttsSupported) this._speak(res.question ?? '');
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set('Impossible de générer la question. Réessayez.');
        console.error(err);
      },
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
    const wpm = this.listenStartTime
      ? Math.round((this.wordCount / ((Date.now() - this.listenStartTime) / 1000)) * 60)
      : 0;

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
          question,
          answer,
          scores: res.scores,
          feedback: res.feedback,
          follow_up_cue: res.follow_up_cue,
          next_action: res.next_action,
          red_flags: res.red_flags ?? [],
          topic: this.currentTopic(),
          wpm,
        };
        this.history.update(h => [...h, turn]);

        // ✅ BUG FIX: Use follow_up_cue instead of fetching a new question when follow_up
        if (res.next_action === 'end' || this.history().length >= this.maxTurns) {
          this._fetchSummary();
        } else if (res.next_action === 'follow_up' && res.follow_up_cue) {
          this.currentQuestion.set(res.follow_up_cue);
          this.currentDifficulty.set('medium');
          this.currentAnswer = '';
          this.interimText.set('');
          this.finalText.set('');
          this.phase.set('interviewing');
          if (this.ttsSupported) this._speak(res.follow_up_cue);
        } else {
          this.phase.set('interviewing');
          this._fetchNextQuestion();
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.phase.set('interviewing');
        this.error.set("Erreur d'évaluation. Réessayez.");
        console.error(err);
      },
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
        this._persistResultToBackend(res);
      },
      error: () => {
        this.loading.set(false);
        const fallback = { overall_score: this.avgScore, recommendation: 'borderline' };
        this.summary.set(fallback);
        sessionStorage.setItem('voiceInterviewResult', JSON.stringify(fallback));
        this.phase.set('results');
      },
    });
  }

  private _persistResultToBackend(res: any): void {
    if (!this.currentUserId) return;
    this.saveStatus.set('saving');
    this.api.saveInterviewResult(this.currentUserId, {
      overallScore: res.overall_score ?? this.avgScore,
      recommendation: res.recommendation ?? 'borderline',
      role: this.role,
      level: this.level,
      avgScores: res.avg_scores ?? {},
      summaryData: res,
    }).subscribe({
      next: () => this.saveStatus.set('saved'),
      error: () => this.saveStatus.set('error'),
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
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ?? (window as any).SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = this.language === 'fr' ? 'fr-FR' : 'en-US';

    let final = this.currentAnswer;
    this.listenStartTime = Date.now();

    this.recognition.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += t + ' ';
        } else {
          interim = t;
        }
      }
      this.currentAnswer = final + interim;
      this.finalText.set(final);
      this.interimText.set(interim);
    };

    this.recognition.onend = () => this.isListening.set(false);
    this.recognition.onerror = () => this.isListening.set(false);
    this.recognition.start();
    this.isListening.set(true);

    // Start waveform via MediaDevices
    navigator.mediaDevices?.getUserMedia({ audio: true }).then(stream => {
      this.mediaStream = stream;
      this._startWaveform(stream);
    }).catch(() => {});
  }

  private _stopListening(): void {
    if (this.recognition) {
      try { this.recognition.stop(); } catch {}
      this.recognition = null;
    }
    this.isListening.set(false);
    this._stopWaveform();
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(t => t.stop());
      this.mediaStream = undefined;
    }
  }

  // ── Waveform Visualizer ───────────────────────────────────────────────────

  private _startWaveform(stream: MediaStream): void {
    try {
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      const src = this.audioCtx.createMediaStreamSource(stream);
      src.connect(this.analyser);
      this._drawWave();
    } catch {}
  }

  private _drawWave(): void {
    const canvas = this.waveformCanvasRef?.nativeElement;
    if (!canvas || !this.analyser) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const bufferLen = this.analyser.frequencyBinCount;
    const data = new Uint8Array(bufferLen);

    const draw = () => {
      this.animFrameId = requestAnimationFrame(draw);
      this.analyser!.getByteFrequencyData(data);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLen) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLen; i++) {
        const barHeight = (data[i] / 255) * canvas.height;
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
        gradient.addColorStop(0, 'rgba(11,121,208,0.8)');
        gradient.addColorStop(1, 'rgba(20,169,160,0.9)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
        x += barWidth;
      }
    };
    draw();
  }

  private _stopWaveform(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = 0;
    }
    const canvas = this.waveformCanvasRef?.nativeElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.audioCtx?.close().catch(() => {});
    this.audioCtx = undefined;
    this.analyser = undefined;
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

  // ── PDF Export ─────────────────────────────────────────────────────────────

  async exportPdf(): Promise<void> {
    const sum = this.summary();
    if (!sum) return;

    // Dynamically load jsPDF (CDN fallback via dynamic import trick)
    // We generate a simple HTML blob and print instead as a reliable cross-browser approach
    const lang = this.language;
    const rec = this.getRecommendationLabel(sum.recommendation ?? '');
    const avgScores: Record<string, number> = sum.avg_scores ?? {};

    const rows = Object.entries(avgScores)
      .filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => `<tr><td>${k}</td><td><b>${v}/100</b></td></tr>`)
      .join('');

    const strengthsList = (sum.strengths ?? []).map((s: string) => `<li>${s}</li>`).join('');
    const improveList = (sum.areas_for_improvement ?? []).map((a: string) => `<li>${a}</li>`).join('');
    const turnRows = this.history().map((t, i) => {
      const avg = t.scores ? this.turnAvgScore(t.scores) : 'N/A';
      return `<tr>
        <td>${i + 1}</td>
        <td>${t.question}</td>
        <td>${t.answer}</td>
        <td><b>${avg}/100</b></td>
        <td>${t.feedback ?? ''}</td>
      </tr>`;
    }).join('');

    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8"/>
  <title>Rapport Entretien IA — TalentPredict</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #122433; padding: 32px; }
    h1 { font-size: 24px; color: #0b79d0; margin-bottom: 4px; }
    .subtitle { color: #4b6072; font-size: 14px; margin-bottom: 24px; }
    .badge { display:inline-block; padding: 4px 12px; border-radius: 20px; font-weight:700; font-size: 14px; margin-bottom: 16px; }
    .score-row { display:flex; gap:24px; margin-bottom: 20px; }
    .score-box { text-align:center; background:#f0f8ff; border:1px solid #cde3f5; border-radius:10px; padding:12px 20px; }
    .score-num { font-size: 28px; font-weight:800; color: #0b79d0; }
    table { width:100%; border-collapse: collapse; margin-bottom: 24px; font-size:13px; }
    th { background:#0b79d0; color:#fff; padding:8px; text-align:left; }
    td { padding: 7px 8px; border-bottom: 1px solid #e0eaf5; }
    h2 { font-size:16px; color:#122433; margin:20px 0 8px; border-bottom:2px solid #e0eaf5; padding-bottom:4px; }
    ul { padding-left:18px; } li { margin-bottom: 4px; font-size:13px; }
    .summary-p { background:#f8fbff; border-left:4px solid #0b79d0; padding:10px 14px; font-size:13px; color:#4b6072; line-height:1.6; }
    @media print { body { padding: 16px; } }
  </style>
</head>
<body>
  <h1>🎙️ Rapport Entretien IA — TalentPredict</h1>
  <p class="subtitle">${lang === 'fr' ? 'Entretien de Découverte' : 'Discovery Interview'} · ${this.role} · ${this.level} · ${new Date().toLocaleDateString()}</p>

  <div style="display:flex; gap:20px; margin-bottom:20px; flex-wrap:wrap;">
    <div class="score-box">
      <div class="score-num">${sum.overall_score ?? this.avgScore}</div>
      <div style="font-size:12px; color:#4b6072;">Score Global / 100</div>
    </div>
    <div class="score-box">
      <div style="font-size:18px; font-weight:700;">${rec}</div>
      <div style="font-size:12px; color:#4b6072;">Recommandation</div>
    </div>
    <div class="score-box">
      <div style="font-size:18px; font-weight:700;">${sum.confidence_level ?? 'Medium'}</div>
      <div style="font-size:12px; color:#4b6072;">Niveau de Confiance</div>
    </div>
  </div>

  <h2>${lang === 'fr' ? 'Scores par dimension' : 'Scores by dimension'}</h2>
  <table>
    <thead><tr><th>Dimension</th><th>Score</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>

  <h2>${lang === 'fr' ? 'Points forts' : 'Strengths'}</h2>
  <ul>${strengthsList}</ul>

  <h2>${lang === 'fr' ? "Axes d'amélioration" : 'Areas for improvement'}</h2>
  <ul>${improveList}</ul>

  <h2>${lang === 'fr' ? 'Synthèse' : 'Summary'}</h2>
  <div class="summary-p">${sum.summary_paragraph ?? ''}</div>

  ${sum.culture_fit_notes ? `<h2>${lang === 'fr' ? 'Adéquation culturelle' : 'Culture fit'}</h2><p style="font-size:13px;">${sum.culture_fit_notes}</p>` : ''}

  <h2>${lang === 'fr' ? 'Détail des réponses' : 'Answer breakdown'}</h2>
  <table>
    <thead><tr><th>#</th><th>Question</th><th>Réponse</th><th>Score</th><th>Feedback</th></tr></thead>
    <tbody>${turnRows}</tbody>
  </table>
</body>
</html>`;

    const w = window.open('', '_blank');
    if (w) {
      w.document.write(html);
      w.document.close();
      setTimeout(() => w.print(), 500);
    }
  }

  // ── Navigation ─────────────────────────────────────────────────────────────

  reset(): void {
    this._stopListening();
    this._stopSpeaking();
    this.phase.set('setup');
    this.history.set([]);
    this.summary.set(null);
    this.currentAnswer = '';
    this.interimText.set('');
    this.finalText.set('');
    this.error.set(null);
    this.saveStatus.set('idle');
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
    this._stopWaveform();
  }
}
