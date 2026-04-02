import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface RecruiterCandidateRow {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  realScore: number | null;
  fraudRisk: string | null;
  publicSlug: string | null;
}

@Injectable({ providedIn: 'root' })
export class RecruiterApiService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/recruiter`;

  listCandidates(): Observable<RecruiterCandidateRow[]> {
    return this.http.get<RecruiterCandidateRow[]>(`${this.base}/candidates`);
  }

  fraudAlerts(): Observable<RecruiterCandidateRow[]> {
    return this.http.get<RecruiterCandidateRow[]>(`${this.base}/fraud-alerts`);
  }

  interviewQuestions(body: {
    weak_skills: string[];
    strong_skills: string[];
    job_title: string;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/interview-questions`, body);
  }
}
