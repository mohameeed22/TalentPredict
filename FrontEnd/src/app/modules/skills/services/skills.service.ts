import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface SkillResponse {
  id: string;
  userId: string;
  nom: string;
  type: 'HARD' | 'SOFT' | 'TECHNICAL' | 'MANAGEMENT';
  niveau: number;
  description: string;
  source: string;
  dateEvaluation: string;
  validee: boolean;
}

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/skills`;

  getSkillsByUser(userId: string): Observable<SkillResponse[]> {
    return this.http.get<SkillResponse[]>(`${this.baseUrl}/accounts/${userId}`);
  }

  getById(id: string): Observable<SkillResponse> {
    return this.http.get<SkillResponse>(`${this.baseUrl}/${id}`);
  }

  validerSkill(id: string): Observable<SkillResponse> {
    return this.http.put<SkillResponse>(`${this.baseUrl}/${id}/valider`, {});
  }

  deleteSkill(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
