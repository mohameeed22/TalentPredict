import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  AuthRequest, AuthResponse, AuthUser, InscriptionRequest,
  Role, User, ProfileResponse, ProfileUpdateRequest
} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/auth`;
  private usersUrl = `${environment.apiUrl}/users`;
  private profilesUrl = `${environment.apiUrl}/profiles`;

  private currentUserSubject = new BehaviorSubject<AuthUser | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  private userProfileSubject = new BehaviorSubject<User | null>(null);
  public userProfile$ = this.userProfileSubject.asObservable();

  constructor() { }

  /**
   * TASK 1: Login — redirects based on role returned from backend.
   */
  login(credentials: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, credentials).pipe(
      tap(response => {
        this.setSession(response);
      }),
      catchError(err => throwError(() => err))
    );
  }

  /**
   * TASK 1: Register — sends role in payload, redirectUrl returned by backend.
   */
  register(data: InscriptionRequest): Observable<AuthResponse> {
    const backendPayload = {
      lastName: data.nom,
      firstName: data.prenom,
      email: data.email,
      password: data.password,
      role: data.role  // ← sends USER or ADMIN
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, backendPayload).pipe(
      tap(response => {
        this.setSession(response);
      })
    );
  }

  /**
   * TASK 3: Fetch the authenticated user's full user info.
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

  /**
   * TASK 3: Get profile (editable) by userId.
   */
  getProfile(userId: string): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${this.profilesUrl}/users/${userId}`);
  }

  /**
   * TASK 3: Update profile (editable fields only).
   */
  updateProfile(userId: string, data: ProfileUpdateRequest): Observable<ProfileResponse> {
    return this.http.put<ProfileResponse>(`${this.profilesUrl}/users/${userId}`, data);
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

  /**
   * TASK 1: Get the redirect URL based on role.
   */
  getRedirectUrl(): string {
    return this.isAdmin() ? '/admin/dashboard' : '/dashboard';
  }

  private setSession(authResponse: AuthResponse): void {
    localStorage.setItem('token', authResponse.token);
    const user: AuthUser = {
      id: authResponse.id as string,
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
