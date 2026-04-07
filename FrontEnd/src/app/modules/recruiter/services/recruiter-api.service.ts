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
  githubUsername: string | null;
}

export interface GithubDeepRequest {
  github_username: string;
  candidate_id: string;
}

export interface FraudCheckRequest {
  candidate_id: string;
  cv_text?: string;
  candidate_skills?: string[];
  repos_languages?: string[];
  github_activity_years?: number[];
}

export interface CampaignEmailRequest {
  userId: string;
  candidateUsername: string;
  campaignContext: string;
  targetUrl: string;
  subject: string;
  body: string;
}

export interface CampaignEmailResponse {
  status: string;
  recipientEmail: string;
  subject: string;
  generatedFromContext: boolean;
}

@Injectable({ providedIn: 'root' })
export class RecruiterApiService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/recruiter`;
  private readonly analysisBase = `${environment.apiUrl}/analysis`;

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

  githubDeep(body: GithubDeepRequest): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(`${this.analysisBase}/github-deep`, body);
  }

  fraudCheck(body: FraudCheckRequest): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(`${this.analysisBase}/fraud-check`, body);
  }

  sendCampaignEmail(body: CampaignEmailRequest): Observable<CampaignEmailResponse> {
    return this.http.post<CampaignEmailResponse>(`${this.base}/campaign-email`, body);
  }
}
