import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  PCMQuestion, 
  PCMTest, 
  PCMResult, 
  PCMSubmitRequest,
  PCMStatistics 
} from '../models/pcm.model';

/**
 * Service for PCM (Personality Test) operations.
 * Manages questions, test submissions, and result retrieval.
 */
@Injectable({
  providedIn: 'root'
})
export class PCMService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/pcm`;
  
  private questionsSubject = new BehaviorSubject<PCMQuestion[]>([]);
  public questions$ = this.questionsSubject.asObservable();
  
  private currentTestSubject = new BehaviorSubject<PCMTest | null>(null);
  public currentTest$ = this.currentTestSubject.asObservable();
  
  private lastResultSubject = new BehaviorSubject<PCMResult | null>(null);
  public lastResult$ = this.lastResultSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  /**
   * GET /api/pcm/questions — Fetch all PCM test questions
   */
  getQuestions(): Observable<PCMQuestion[]> {
    this.loadingSubject.next(true);
    return this.http.get<PCMQuestion[]>(`${this.baseUrl}/questions`).pipe(
      tap(questions => {
        this.questionsSubject.next(questions);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error('Error fetching PCM questions:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/pcm/questions/{id} — Get a specific question
   */
  getQuestionById(id: number): Observable<PCMQuestion> {
    return this.http.get<PCMQuestion>(`${this.baseUrl}/questions/${id}`).pipe(
      catchError(err => {
        console.error(`Error fetching question ${id}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * POST /api/pcm/test/start — Initiate a new PCM test
   */
  startTest(): Observable<PCMTest> {
    this.loadingSubject.next(true);
    return this.http.post<PCMTest>(`${this.baseUrl}/test/start`, {}).pipe(
      tap(test => {
        this.currentTestSubject.next(test);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error('Error starting PCM test:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * POST /api/pcm/test/submit — Submit PCM test answers
   */
  submitTest(request: PCMSubmitRequest): Observable<PCMResult> {
    this.loadingSubject.next(true);
    return this.http.post<PCMResult>(`${this.baseUrl}/test/submit`, request).pipe(
      tap(result => {
        this.lastResultSubject.next(result);
        this.currentTestSubject.next(null);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error('Error submitting PCM test:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/pcm/result/{userId} — Get user's latest PCM result
   */
  getUserResult(userId: number): Observable<PCMResult> {
    return this.http.get<PCMResult>(`${this.baseUrl}/result/${userId}`).pipe(
      tap(result => {
        this.lastResultSubject.next(result);
      }),
      catchError(err => {
        console.error(`Error fetching result for user ${userId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/pcm/results/{userId} — Get all PCM results for a user
   */
  getUserResults(userId: number): Observable<PCMResult[]> {
    return this.http.get<PCMResult[]>(`${this.baseUrl}/results/${userId}`).pipe(
      catchError(err => {
        console.error(`Error fetching results for user ${userId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/pcm/statistics/{userId} — Get user's PCM statistics
   */
  getUserStatistics(userId: number): Observable<PCMStatistics> {
    return this.http.get<PCMStatistics>(`${this.baseUrl}/statistics/${userId}`).pipe(
      catchError(err => {
        console.error(`Error fetching statistics for user ${userId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/pcm/test/{testId} — Get specific test details
   */
  getTestDetails(testId: number): Observable<PCMTest> {
    return this.http.get<PCMTest>(`${this.baseUrl}/test/${testId}`).pipe(
      catchError(err => {
        console.error(`Error fetching test ${testId}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Retrieve cached questions without API call
   */
  getCachedQuestions(): PCMQuestion[] {
    return this.questionsSubject.value;
  }

  /**
   * Get current test from cache
   */
  getCurrentTest(): PCMTest | null {
    return this.currentTestSubject.value;
  }

  /**
   * Get last result from cache
   */
  getLastResult(): PCMResult | null {
    return this.lastResultSubject.value;
  }

  /**
   * Get loading state
   */
  isLoading(): boolean {
    return this.loadingSubject.value;
  }

  /**
   * Clear cached test data (on logout or navigation)
   */
  clearCache(): void {
    this.currentTestSubject.next(null);
    this.lastResultSubject.next(null);
    this.questionsSubject.next([]);
  }
}
