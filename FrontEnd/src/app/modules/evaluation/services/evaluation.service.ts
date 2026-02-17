import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { 
  PersonalityTest, 
  PersonalityTestRequest, 
  PersonalityTestResponse 
} from '../models/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/tests-personnalite`;

  submitTest(userId: number, request: PersonalityTestRequest): Observable<PersonalityTestResponse> {
    return this.http.post<PersonalityTestResponse>(
      `${this.baseUrl}/utilisateur/${userId}`,
      request
    );
  }

  getUserTests(userId: number): Observable<PersonalityTestResponse[]> {
    return this.http.get<PersonalityTestResponse[]>(
      `${this.baseUrl}/utilisateur/${userId}`
    );
  }

  getTestById(testId: number): Observable<PersonalityTestResponse> {
    return this.http.get<PersonalityTestResponse>(`${this.baseUrl}/${testId}`);
  }

  getLatestTest(userId: number): Observable<PersonalityTestResponse> {
    return this.http.get<PersonalityTestResponse>(
      `${this.baseUrl}/utilisateur/${userId}/dernier`
    );
  }

  getAllTests(): Observable<PersonalityTestResponse[]> {
    return this.http.get<PersonalityTestResponse[]>(this.baseUrl);
  }
}
