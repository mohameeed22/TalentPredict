import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { 
  Formation, 
  FormationRequest, 
  FormationResponse 
} from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/formations`;

  createFormation(userId: number, request: FormationRequest): Observable<FormationResponse> {
    return this.http.post<FormationResponse>(
      `${this.baseUrl}/utilisateur/${userId}`,
      request
    );
  }

  getUserFormations(userId: number): Observable<FormationResponse[]> {
    return this.http.get<FormationResponse[]>(
      `${this.baseUrl}/utilisateur/${userId}`
    );
  }

  getFormationById(formationId: number): Observable<FormationResponse> {
    return this.http.get<FormationResponse>(`${this.baseUrl}/${formationId}`);
  }

  getFormationsByStatus(userId: number, statut: string): Observable<FormationResponse[]> {
    return this.http.get<FormationResponse[]>(
      `${this.baseUrl}/utilisateur/${userId}/statut/${statut}`
    );
  }

  updateFormationProgress(formationId: number, progression: number): Observable<FormationResponse> {
    return this.http.put<FormationResponse>(
      `${this.baseUrl}/${formationId}/progression`,
      { progression }
    );
  }

  updateFormationStatus(formationId: number, statut: string): Observable<FormationResponse> {
    return this.http.put<FormationResponse>(
      `${this.baseUrl}/${formationId}/statut`,
      { statut }
    );
  }

  deleteFormation(formationId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${formationId}`);
  }

  getAllFormations(): Observable<FormationResponse[]> {
    return this.http.get<FormationResponse[]>(this.baseUrl);
  }
}
