import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User, UserRequest } from '../../auth/models/user.model';

/**
 * Admin-specific service that wraps /api/utilisateurs endpoints.
 * All methods require ADMIN role.
 */
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/utilisateurs`;

  /** GET /api/utilisateurs — List all users */
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  /** GET /api/utilisateurs/{id} — Get user by ID */
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`);
  }

  /** POST /api/utilisateurs — Create a new user */
  createUser(data: UserRequest): Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }

  /** PUT /api/utilisateurs/{id} — Update user (including role) */
  updateUser(userId: number, data: Partial<UserRequest>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${userId}`, data);
  }

  /** PUT /api/utilisateurs/{id} — Update user role */
  updateUserRole(userId: number, role: string): Observable<User> {
    return this.http.put<User>(
      `${this.baseUrl}/${userId}`,
      { role }
    );
  }

  /** DELETE /api/utilisateurs/{id} — Delete user */
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`);
  }

  /** GET /api/admin/stats — System-wide statistics */
  getSystemStats(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/admin/stats`);
  }
}
