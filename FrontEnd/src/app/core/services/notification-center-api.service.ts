import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface ServerNotificationResponse {
  id: string;
  type: string;
  category: string;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
  readAt: string | null;
  emailAlert: boolean;
  emailedAt: string | null;
  targetUrl: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationCenterApiService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/notifications`;

  list(unreadOnly: boolean = false): Observable<ServerNotificationResponse[]> {
    return this.http.get<ServerNotificationResponse[]>(this.baseUrl, {
      params: { unreadOnly }
    });
  }

  getUnreadCount(): Observable<{ unreadCount: number }> {
    return this.http.get<{ unreadCount: number }>(`${this.baseUrl}/unread-count`);
  }

  markRead(notificationId: string): Observable<ServerNotificationResponse> {
    return this.http.patch<ServerNotificationResponse>(`${this.baseUrl}/${notificationId}/read`, {});
  }

  markAllRead(): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(`${this.baseUrl}/read-all`, {});
  }

  delete(notificationId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${notificationId}`);
  }

  clearAll(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/clear`);
  }
}
