import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Notification } from '../../../core/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for (notification of notifications; track notification; let i = $index) {
      <div class="toast" [class]="'toast-' + notification.type" (click)="dismiss(i)">
        <span class="toast-icon">
          @switch (notification.type) {
            @case ('success') { ✅ }
            @case ('error') { ❌ }
            @case ('warning') { ⚠️ }
            @case ('info') { ℹ️ }
          }
        </span>
        <span class="toast-message">{{ notification.message }}</span>
        <button class="toast-close" (click)="dismiss(i); $event.stopPropagation()">×</button>
      </div>
    }
  `,
  styles: [`
    :host {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 420px;
    }

    .toast {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.875rem 1.25rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      animation: slideIn 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .toast-success {
      background: #f0fff4;
      border-left: 4px solid #38a169;
      color: #22543d;
    }

    .toast-error {
      background: #fff5f5;
      border-left: 4px solid #e53e3e;
      color: #742a2a;
    }

    .toast-warning {
      background: #fffff0;
      border-left: 4px solid #d69e2e;
      color: #744210;
    }

    .toast-info {
      background: #ebf8ff;
      border-left: 4px solid #3182ce;
      color: #2a4365;
    }

    .toast-icon {
      flex-shrink: 0;
      font-size: 1.1rem;
    }

    .toast-message {
      flex: 1;
      line-height: 1.4;
    }

    .toast-close {
      flex-shrink: 0;
      background: none;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      opacity: 0.5;
      padding: 0 0.25rem;
      line-height: 1;
      color: inherit;
    }

    .toast-close:hover {
      opacity: 1;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `]
})
export class NotificationToastComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private subscription!: Subscription;

  notifications: Notification[] = [];

  ngOnInit(): void {
    this.subscription = this.notificationService.notifications$.subscribe(notification => {
      this.notifications.push(notification);

      // Auto-dismiss after duration
      const duration = notification.duration || 3000;
      setTimeout(() => {
        this.dismiss(this.notifications.indexOf(notification));
      }, duration);
    });
  }

  dismiss(index: number): void {
    if (index >= 0 && index < this.notifications.length) {
      this.notifications.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
