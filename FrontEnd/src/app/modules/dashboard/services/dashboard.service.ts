import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DashboardResponse } from '../models/stats.model';
import { PredictionResponse } from '../models/prediction.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private dashboardUrl = `${environment.apiUrl}/dashboard`;
  private predictionsUrl = `${environment.apiUrl}/predictions`;

  getDashboardStats(userId: number): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(`${this.dashboardUrl}/utilisateur/${userId}`);
  }

  generatePrediction(userId: number): Observable<PredictionResponse> {
    return this.http.post<PredictionResponse>(
      `${this.predictionsUrl}/utilisateur/${userId}/generer`,
      {}
    );
  }

  getUserPredictions(userId: number): Observable<PredictionResponse[]> {
    return this.http.get<PredictionResponse[]>(
      `${this.predictionsUrl}/utilisateur/${userId}`
    );
  }

  getLatestPrediction(userId: number): Observable<PredictionResponse> {
    return this.http.get<PredictionResponse>(
      `${this.predictionsUrl}/utilisateur/${userId}/derniere`
    );
  }
}
