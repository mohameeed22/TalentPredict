import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// Test summary (matches DashboardDto.TestSummaryDto)
export interface TestSummary {
  id: string;
  dateTest: Date;
  personalityType?: string;
  overallScore?: number;
  softSkillsScores?: { [key: string]: number };
  summary?: string;
}

// Employee dashboard response (matches DashboardDto.Response)
export interface EmployeeDashboardResponse {
  userId: string;
  nomComplet: string;
  firstName: string;
  lastName: string;
  nombreTests: number;
  nombreSkillsSoft: number;
  nombreSkillsTech: number;
  nombreFormationsTotal: number;
  nombreFormationsEnCours: number;
  nombreFormationsTerminees: number;
  scoreEvaluationMoyen: number;
  topSkills: any[];
  formationsRecentes: any[];
  testsRecents: TestSummary[];
  dernierePrediction: any;
}

// Admin overview response (matches DashboardDto.AdminOverviewDto)
export interface AdminOverviewResponse {
  totalEmployees: number;
  totalFormationsEnCours: number;
  totalTestsCompleted: number;
  totalPredictions: number;
  employees: EmployeeSummary[];
}

export interface EmployeeSummary {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  email: string;
  formationCount: number;
  testCount: number;
  personalityType?: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private dashboardUrl = `${environment.apiUrl}/dashboard`;

  /**
   * TASK 2: Employee dashboard — GET /api/dashboard/users/{userId}
   */
  getEmployeeDashboard(userId: string): Observable<EmployeeDashboardResponse> {
    return this.http.get<EmployeeDashboardResponse>(`${this.dashboardUrl}/users/${userId}`);
  }

  /**
   * TASK 2: Admin overview — GET /api/dashboard/admin/overview
   */
  getAdminOverview(): Observable<AdminOverviewResponse> {
    return this.http.get<AdminOverviewResponse>(`${this.dashboardUrl}/admin/overview`);
  }
}
