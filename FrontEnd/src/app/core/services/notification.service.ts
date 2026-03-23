import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export interface Notification {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

export interface AppNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  body: string;
  timestamp: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // Toast notifications
  private notificationSubject = new Subject<Notification>();
  public notifications$: Observable<Notification> = this.notificationSubject.asObservable();

  // Center app notifications
  private appNotifSubject = new BehaviorSubject<AppNotification[]>([]);
  public appNotifications$: Observable<AppNotification[]> = this.appNotifSubject.asObservable();
  
  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$: Observable<number> = this.unreadCountSubject.asObservable();

  success(message: string, duration: number = 3000): void {
    this.show({ type: 'success', message, duration });
    this.addAppNotification('success', 'Succès', message);
  }

  error(message: string, duration: number = 5000): void {
    this.show({ type: 'error', message, duration });
    this.addAppNotification('error', 'Erreur', message);
  }

  info(message: string, duration: number = 3000): void {
    this.show({ type: 'info', message, duration });
    this.addAppNotification('info', 'Information', message);
  }

  warning(message: string, duration: number = 4000): void {
    this.show({ type: 'warning', message, duration });
    this.addAppNotification('warning', 'Attention', message);
  }

  private show(notification: Notification): void {
    this.notificationSubject.next(notification);
  }

  // ---- App Notifications Center Methods ----

  private addAppNotification(type: 'success' | 'error' | 'warning' | 'info', title: string, body: string): void {
    const newNotif: AppNotification = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      title,
      body,
      timestamp: Date.now(),
      read: false
    };
    
    const current = this.appNotifSubject.value;
    const updated = [newNotif, ...current].slice(0, 50); // Keep last 50
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }

  markRead(id: string): void {
    const current = this.appNotifSubject.value;
    const updated = current.map(n => n.id === id ? { ...n, read: true } : n);
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }

  markAllRead(): void {
    const current = this.appNotifSubject.value;
    const updated = current.map(n => ({ ...n, read: true }));
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }

  clearAll(): void {
    this.appNotifSubject.next([]);
    this.updateUnreadCount();
  }

  removeNotification(id: string): void {
    const current = this.appNotifSubject.value;
    const updated = current.filter(n => n.id !== id);
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }

  private updateUnreadCount(): void {
    const current = this.appNotifSubject.value;
    const count = current.filter(n => !n.read).length;
    this.unreadCountSubject.next(count);
  }
}
