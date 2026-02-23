import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, UserRequest } from '../../modules/auth/models/user.model';

/**
 * Service layer for User CRUD operations.
 * Connects to the backend /api/utilisateurs endpoints.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/utilisateurs`;

  /**
   * GET /api/utilisateurs — List all users (ADMIN only)
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  /**
   * GET /api/utilisateurs/{id} — Get a single user by ID
   */
  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  /**
   * POST /api/utilisateurs — Create a new user (ADMIN only)
   */
  create(data: UserRequest): Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }

  /**
   * PUT /api/utilisateurs/{id} — Update an existing user
   */
  update(id: number, data: Partial<UserRequest>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data);
  }

  /**
   * DELETE /api/utilisateurs/{id} — Delete a user (ADMIN only)
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
