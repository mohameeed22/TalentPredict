import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TestResult, UserPerformance, ComparisonResult } from '../models/result.model';

/**
 * Service for managing test results and user performance data.
 */
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private http = inject(HttpClient);
  private resultsUrl = `${environment.apiUrl}/results`;
  private performanceUrl = `${environment.apiUrl}/performance`;
  
  private resultsSubject = new BehaviorSubject<TestResult[]>([]);
  public results$ = this.resultsSubject.asObservable();
  
  private performanceSubject = new BehaviorSubject<UserPerformance | null>(null);
  public performance$ = this.performanceSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  /**
   * GET /api/results/user/{userId} — Get all results for a user
   */
  getUserResults(userId: number): Observable<TestResult[]> {
    this.loadingSubject.next(true);
    return this.http.get<TestResult[]>(`${this.resultsUrl}/user/${userId}`).pipe(
      tap(results => {
        this.resultsSubject.next(results);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error(`Error fetching results for user ${userId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/results/{resultId} — Get a specific result
   */
  getResultById(resultId: number): Observable<TestResult> {
    return this.http.get<TestResult>(`${this.resultsUrl}/${resultId}`).pipe(
      catchError(err => {
        console.error(`Error fetching result ${resultId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/performance/user/{userId} — Get user performance data
   */
  getUserPerformance(userId: number): Observable<UserPerformance> {
    this.loadingSubject.next(true);
    return this.http.get<UserPerformance>(`${this.performanceUrl}/user/${userId}`).pipe(
      tap(performance => {
        this.performanceSubject.next(performance);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error(`Error fetching performance for user ${userId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/performance/comparison — Compare two users' performance
   */
  comparePerformance(userId1: number, userId2: number): Observable<ComparisonResult> {
    return this.http.get<ComparisonResult>(
      `${this.performanceUrl}/comparison?user1=${userId1}&user2=${userId2}`
    ).pipe(
      catchError(err => {
        console.error('Error comparing performance:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * POST /api/results — Create a new result record
   */
  createResult(result: Partial<TestResult>): Observable<TestResult> {
    this.loadingSubject.next(true);
    return this.http.post<TestResult>(this.resultsUrl, result).pipe(
      tap(newResult => {
        const currentResults = this.resultsSubject.value;
        this.resultsSubject.next([...currentResults, newResult]);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error('Error creating result:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Get cached results without API call
   */
  getCachedResults(): TestResult[] {
    return this.resultsSubject.value;
  }

  /**
   * Get cached performance without API call
   */
  getCachedPerformance(): UserPerformance | null {
    return this.performanceSubject.value;
  }

  /**
   * Get loading state
   */
  isLoading(): boolean {
    return this.loadingSubject.value;
  }

  /**
   * Clear cached data
   */
  clearCache(): void {
    this.resultsSubject.next([]);
    this.performanceSubject.next(null);
  }
}
