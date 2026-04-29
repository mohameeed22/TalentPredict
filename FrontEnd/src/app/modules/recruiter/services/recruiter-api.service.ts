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
  latestFraudCaseId?: string | null;
  fraudScore?: number | null;
  fraudScoreConfidence?: number | null;
  fraudRecommendation?: string | null;
  fraudExplanation?: string | null;
  fraudCheckedAt?: string | null;
  fraudReviewStatus?: string | null;
  fraudSource?: string | null;
  fraudFlags?: FraudFlags;
}

export interface FraudFlags {
  score: number | null;
  flags: { type: string; description: string; severity: string }[];
  severity: string;
  message?: string;
}

export interface FraudCaseHistoryItem {
  caseId: string;
  source: string;
  riskLevel: string;
  fraudScore: number | null;
  scoreConfidence: number | null;
  recommendation: string | null;
  explanation: string | null;
  reviewStatus: string;
  reviewNote: string | null;
  createdAt: string;
  reviewedAt: string | null;
  reviewedByUserId: string | null;
  fraudFlags: FraudFlags;
}

export interface FraudCaseReviewRequest {
  decision: 'CONFIRMED_FRAUD' | 'FALSE_POSITIVE' | 'MONITORING' | 'OPEN';
  note?: string;
}

export interface FraudCaseReviewResponse {
  caseId: string;
  reviewStatus: string;
  reviewedAt: string | null;
  reviewedByUserId: string | null;
  reviewNote: string | null;
}

export interface FraudKpiResponse {
  precisionAtTopK: number;
  falsePositiveRate: number;
  avgReviewTurnaroundHours: number;
  labeledCases: number;
  totalCasesLastWindow: number;
  driftBySource: Record<string, number>;
  signalContributionDistribution: Record<string, number>;
}

export interface FraudCalibrationResponse {
  suggestedMediumThreshold: number;
  suggestedHighThreshold: number;
  labeledCases: number;
  confirmedFraudCases: number;
  falsePositiveCases: number;
  falsePositiveRate: number;
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

export interface InterviewQuestionsRequest {
  weak_skills: string[];
  strong_skills: string[];
  job_title: string;
}

@Injectable({ providedIn: 'root' })
export class RecruiterApiService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/recruiter`;
  private readonly analysisBase = `${environment.apiUrl}/analysis`;
  private readonly aiBase = environment.aiServiceUrl;

  listCandidates(): Observable<RecruiterCandidateRow[]> {
    return this.http.get<RecruiterCandidateRow[]>(`${this.base}/candidates`);
  }

  fraudAlerts(): Observable<RecruiterCandidateRow[]> {
    return this.http.get<RecruiterCandidateRow[]>(`${this.base}/fraud-alerts`);
  }

  fraudCaseHistory(candidateId: string, limit = 20): Observable<FraudCaseHistoryItem[]> {
    return this.http.get<FraudCaseHistoryItem[]>(`${this.base}/fraud-cases/${candidateId}`, {
      params: { limit }
    });
  }

  reviewFraudCase(caseId: string, body: FraudCaseReviewRequest): Observable<FraudCaseReviewResponse> {
    return this.http.patch<FraudCaseReviewResponse>(`${this.base}/fraud-cases/${caseId}/review`, body);
  }

  fraudKpis(): Observable<FraudKpiResponse> {
    return this.http.get<FraudKpiResponse>(`${this.base}/fraud-kpis`);
  }

  fraudCalibration(): Observable<FraudCalibrationResponse> {
    return this.http.get<FraudCalibrationResponse>(`${this.base}/fraud-calibration`);
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

  interviewQuestions(body: InterviewQuestionsRequest): Observable<string[] | Record<string, unknown>> {
    return this.http.post<string[] | Record<string, unknown>>(`${this.base}/interview-questions`, body);
  }

  /** GET /api/candidates/{userId}/progress — Fetch a candidate's full assessment progress */
  getCandidateProgress(userId: string): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${environment.apiUrl}/candidates/${userId}/progress`);
  }

  /** POST /api/candidates/{userId}/generate-report — Generate a full AI assessment report (PDF/JSON) */
  generateCandidateReport(userId: string, body: { format?: 'pdf' | 'json' } = {}): Observable<Blob> {
    return this.http.post(
      `${environment.apiUrl}/candidates/${userId}/generate-report`,
      body,
      { responseType: 'blob' }
    );
  }
}
