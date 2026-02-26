import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthRequest, AuthResponse, AuthUser, InscriptionRequest, Role, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/auth`;
  private usersUrl = `${environment.apiUrl}/utilisateurs`;
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  /** Full user profile fetched from /api/utilisateurs/{id} */
  private userProfileSubject = new BehaviorSubject<User | null>(null);
  public userProfile$ = this.userProfileSubject.asObservable();

  constructor() {}

  /**
   * Authenticate via POST /api/auth/login
   * Stores JWT token & basic user info in localStorage.
   */
  login(credentials: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials).pipe(
      tap(response => {
        this.setSession(response);
      }),
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  /**
   * Register via POST /api/auth/inscription
   */
  register(data: InscriptionRequest): Observable<AuthResponse> {
    // Map frontend field names (nom/prenom) to backend field names (lastName/firstName)
    const backendPayload = {
      lastName: data.nom,
      firstName: data.prenom,
      email: data.email,
      password: data.password
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, backendPayload).pipe(
      tap(response => {
        this.setSession(response);
      })
    );
  }

  /**
   * Fetch the authenticated user's full profile.
   * Uses GET /api/utilisateurs/{id} with the current user's ID.
   */
  fetchMyProfile(): Observable<User> {
    const user = this.getCurrentUser();
    if (!user) {
      return throwError(() => new Error('Not authenticated'));
    }
    return this.http.get<User>(`${this.usersUrl}/${user.id}`).pipe(
      tap(profile => {
        this.userProfileSubject.next(profile);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.userProfileSubject.next(null);
  }

  getToken(): string | null {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem('token');
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  getUserProfile(): User | null {
    return this.userProfileSubject.value;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    // Check if token is expired
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000;
      if (Date.now() >= expiry) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === Role.ADMIN || user?.role === ('ADMIN' as any);
  }

  private setSession(authResponse: AuthResponse): void {
    localStorage.setItem('token', authResponse.token);
    const user: AuthUser = {
      id: authResponse.id,
      nom: authResponse.nom,
      prenom: authResponse.prenom,
      email: authResponse.email,
      role: authResponse.role as Role,
      dateInscription: new Date()
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private getUserFromStorage(): AuthUser | null {
    if (typeof localStorage === 'undefined') return null;
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
}
