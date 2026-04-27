import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface JobMatchRequest {
  candidate_id: string;
  job_url?: string;
  job_description?: string;
}

export interface SkillBreakdownItem {
  skill: string;
  candidate_score?: number;
  required_score?: number;
  match?: number;
  gap?: number;
}

export interface JobMatchResponse {
  overall_match: number;
  match_label?: string;
  summary?: string;
  skill_breakdown?: SkillBreakdownItem[];
  extracted_requirements?: {
    domain?: string;
    required_skills?: string[];
    nice_to_have?: string[];
  };
  recommendation?: string;
}

@Injectable({ providedIn: 'root' })
export class JobMatchService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/jobs`;

  /**
   * POST /api/jobs/match
   * Matches a candidate's skill profile against a job description or URL.
   * Spring Boot enriches the payload with the candidate's persisted skills before
   * forwarding to the Python AI service.
   */
  matchJob(payload: JobMatchRequest): Observable<JobMatchResponse> {
    return this.http.post<JobMatchResponse>(`${this.base}/match`, payload);
  }
}
