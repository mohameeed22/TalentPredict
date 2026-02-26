import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, UserRequest } from '../../modules/auth/models/user.model';

/**
 * Service layer for User CRUD operations.
 * Connects to the backend /api/utilisateurs endpoints.
 * Provides caching and state management for users.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/utilisateurs`;
  
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();
  
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  /**
   * GET /api/utilisateurs — List all users (ADMIN only)
   * Caches the result in memory
   */
  getAll(): Observable<User[]> {
    this.loadingSubject.next(true);
    return this.http.get<User[]>(this.baseUrl).pipe(
      tap(users => {
        this.usersSubject.next(users);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error('Error fetching all users:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * GET /api/utilisateurs/{id} — Get a single user by ID
   */
  getById(id: number): Observable<User> {
    this.loadingSubject.next(true);
    return this.http.get<User>(`${this.baseUrl}/${id}`).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error(`Error fetching user ${id}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * POST /api/utilisateurs — Create a new user (ADMIN only)
   */
  create(data: UserRequest): Observable<User> {
    this.loadingSubject.next(true);
    return this.http.post<User>(this.baseUrl, data).pipe(
      tap(newUser => {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next([...currentUsers, newUser]);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error('Error creating user:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * PUT /api/utilisateurs/{id} — Update an existing user
   */
  update(id: number, data: Partial<UserRequest>): Observable<User> {
    this.loadingSubject.next(true);
    return this.http.put<User>(`${this.baseUrl}/${id}`, data).pipe(
      tap(updatedUser => {
        const users = this.usersSubject.value;
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
          users[index] = updatedUser;
          this.usersSubject.next([...users]);
        }
        if (this.currentUserSubject.value?.id === id) {
          this.currentUserSubject.next(updatedUser);
        }
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error(`Error updating user ${id}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * DELETE /api/utilisateurs/{id} — Delete a user (ADMIN only)
   */
  delete(id: number): Observable<void> {
    this.loadingSubject.next(true);
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const users = this.usersSubject.value.filter(u => u.id !== id);
        this.usersSubject.next(users);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        console.error(`Error deleting user ${id}:`, err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Get cached users without API call
   */
  getCachedUsers(): User[] {
    return this.usersSubject.value;
  }

  /**
   * Get loading state
   */
  isLoading(): boolean {
    return this.loadingSubject.value;
  }
}
