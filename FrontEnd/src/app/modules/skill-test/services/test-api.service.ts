import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TestApiService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}`;

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
    return this.http.post(`${this.base}/test/generate`, body);
  }

  evaluateTest(body: unknown): Observable<unknown> {
    return this.http.post(`${this.base}/test/evaluate`, body);
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

    return this.http.post(`${this.base}/test/code-challenge/generate`, payload);
  }

  evaluateCodeChallenge(body: unknown): Observable<unknown> {
    return this.http.post(`${this.base}/test/code-challenge/evaluate`, body);
  }
}
