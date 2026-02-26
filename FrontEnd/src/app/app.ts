import { Component, inject, OnInit, OnDestroy, signal, computed, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthService } from './modules/auth/services/auth.service';
import { NotificationToastComponent } from './shared/components/notification-toast/notification-toast.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private appRef = inject(ApplicationRef);
  private subscriptions: Subscription[] = [];
  
  title = 'TalentPredict';
  
  /** Signal: true when the current route IS an auth page or landing page */
  private isPublicPage = signal(true);
  /** Signal: true when the user is logged in */
  private authenticated = signal(false);
  
  sidebarCollapsed = signal(false);

  /** Computed signal — sidebar shows when logged in AND not on public pages */
  showSidebar = computed(() => !this.isPublicPage() && this.authenticated());

  ngOnInit(): void {
    // Set initial values from current URL
    this.isPublicPage.set(this.isPublicRoute(this.router.url));
    this.authenticated.set(this.authService.isAuthenticated());

    // Update isPublicPage on every navigation
    this.subscriptions.push(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.isPublicPage.set(this.isPublicRoute(url));
        this.authenticated.set(this.authService.isAuthenticated());
      })
    );

    // React immediately to auth state changes (login/logout)
    this.subscriptions.push(
      this.authService.currentUser$.subscribe(user => {
        this.authenticated.set(!!user && this.authService.isAuthenticated());
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private isPublicRoute(url: string): boolean {
    return url.includes('/auth/') || url === '/' || url === '';
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login').then(() => this.appRef.tick());
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
  }

  getUserInitials(): string {
    const user = this.authService.getCurrentUser();
    if (!user) return '?';
    return `${user.prenom?.charAt(0) || ''}${user.nom?.charAt(0) || ''}`.toUpperCase();
  }
}
