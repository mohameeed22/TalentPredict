import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Skill, SkillRequest, SkillResponse } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/skills`;

  addSkill(userId: number, request: SkillRequest): Observable<SkillResponse> {
    return this.http.post<SkillResponse>(
      `${this.baseUrl}/utilisateur/${userId}`,
      request
    );
  }

  getUserSkills(userId: number): Observable<SkillResponse[]> {
    return this.http.get<SkillResponse[]>(
      `${this.baseUrl}/utilisateur/${userId}`
    );
  }

  getSkillsByType(userId: number, type: string): Observable<SkillResponse[]> {
    return this.http.get<SkillResponse[]>(
      `${this.baseUrl}/utilisateur/${userId}/type/${type}`
    );
  }

  updateSkill(skillId: number, niveau: number): Observable<SkillResponse> {
    return this.http.put<SkillResponse>(
      `${this.baseUrl}/${skillId}`,
      { niveau }
    );
  }

  deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${skillId}`);
  }

  getAllSkills(): Observable<SkillResponse[]> {
    return this.http.get<SkillResponse[]>(this.baseUrl);
  }
}
