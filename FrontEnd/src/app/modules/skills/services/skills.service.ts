import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SkillRequest, SkillResponse } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/skills`;

  getUserSkills(userId: string): Observable<SkillResponse[]> {
    return this.http.get<SkillResponse[]>(`${this.baseUrl}/accounts/${userId}`);
  }

  addSkill(userId: string, request: SkillRequest): Observable<SkillResponse> {
    return this.http.post<SkillResponse>(`${this.baseUrl}/accounts/${userId}`, request);
  }

  deleteSkill(skillId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${skillId}`);
  }

  validateSkill(skillId: string): Observable<SkillResponse> {
    return this.http.put<SkillResponse>(`${this.baseUrl}/${skillId}/valider`, {});
  }
}
