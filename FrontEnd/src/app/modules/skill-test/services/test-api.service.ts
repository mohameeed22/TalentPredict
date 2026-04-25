import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TestApiService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}`;
  // Keep UI responsive when AI/model calls take too long, but allow enough time for local LLMs (Ollama)
  private readonly generateTimeoutMs = 60_000;
  private readonly evaluateTimeoutMs = 60_000;
  private readonly codeGenerateTimeoutMs = 60_000;
  private readonly codeEvaluateTimeoutMs = 60_000;

  private normalizeCodeChallengeLevel(level?: string, difficulty?: string): string {
    const raw = (level ?? difficulty ?? 'EXPERT').toString().trim();
    return raw ? raw.toUpperCase() : 'EXPERT';
  }

  generateTest(body: {
    skills: string[];
    level: string;
    candidate_id: string;
    skill_scores?: Record<string, number>;
    question_count?: number;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/test/generate`, body).pipe(
      timeout({ first: this.generateTimeoutMs })
    );
  }

  evaluateTest(body: unknown): Observable<unknown> {
    return this.http.post(`${this.base}/test/evaluate`, body).pipe(
      timeout({ first: this.evaluateTimeoutMs })
    );
  }

  generateCodeChallenge(body: {
    skill: string;
    level?: string;
    difficulty?: string;
    candidate_id: string;
  }): Observable<unknown> {
    const payload = {
      skill: (body.skill ?? '').toString().trim(),
      level: this.normalizeCodeChallengeLevel(body.level, body.difficulty),
      candidate_id: String(body.candidate_id ?? '').trim()
    };

    if (!environment.production) {
      // Helps debug 400/422 mismatches by exposing exact outbound body.
      console.info('[TestApiService] POST /api/test/code-challenge/generate payload', payload);
    }

    return this.http.post(`${this.base}/test/code-challenge/generate`, payload).pipe(
      timeout({ first: this.codeGenerateTimeoutMs })
    );
  }

  evaluateCodeChallenge(body: unknown): Observable<unknown> {
    return this.http.post(`${this.base}/test/code-challenge/evaluate`, body).pipe(
      timeout({ first: this.codeEvaluateTimeoutMs })
    );
  }

  // ── GitHub Code Analyzer ─────────────────────────────────────────
  analyzeGithub(body: { username: string; claimedSkills: string[] }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/github/analyze`, body).pipe(
      timeout({ first: this.generateTimeoutMs })
    );
  }

  // ── Scenario Simulator ───────────────────────────────────────────
  generateScenario(body: { role: string; level: string }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/scenario/generate`, body).pipe(
      timeout({ first: this.generateTimeoutMs })
    );
  }

  evaluateScenario(body: {
    scenario: string;
    response: string;
    fraudContext?: Record<string, unknown>;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/scenario/evaluate`, body).pipe(
      timeout({ first: this.evaluateTimeoutMs })
    );
  }

  // ── Standalone Fraud Check (mini-quiz / course test) ─────────────
  checkFraud(body: {
    candidateId?: string;
    testType?: string;
    fraudContext?: Record<string, unknown>;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/fraud/check`, body).pipe(
      timeout({ first: this.evaluateTimeoutMs })
    );
  }

  // ── AI Voice Interview ────────────────────────────────────────────
  private readonly interviewTimeoutMs = 30_000;

  getInterviewQuestion(body: {
    role: string;
    level?: string;
    focus_area?: string;
    history?: unknown[];
    language?: string;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/interview/question`, body).pipe(
      timeout({ first: this.interviewTimeoutMs })
    );
  }

  evaluateInterviewTurn(body: {
    role: string;
    level?: string;
    question: string;
    answer: string;
    turn_number?: number;
    max_turns?: number;
    language?: string;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/interview/evaluate-turn`, body).pipe(
      timeout({ first: this.interviewTimeoutMs })
    );
  }

  getInterviewSummary(body: {
    role: string;
    level?: string;
    history: unknown[];
    language?: string;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/assessment/interview/summary`, body).pipe(
      timeout({ first: this.interviewTimeoutMs })
    );
  }

  // ── Advanced Forensics & Analysis ──────────────────────────────────
  analyzeGithubDeep(body: {
    github_username: string;
    candidate_id: string;
    github_data?: any;
  }): Observable<unknown> {
    // We map to the Spring Boot proxy endpoint if available, else directly to Python
    return this.http.post(`${this.base}/analysis/github-deep`, body).pipe(
      timeout({ first: this.generateTimeoutMs })
    );
  }

  checkCvAuthenticity(body: {
    candidate_id: string;
    cv_text: string;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/analysis/cv-authenticity`, body).pipe(
      timeout({ first: this.evaluateTimeoutMs })
    );
  }
}
