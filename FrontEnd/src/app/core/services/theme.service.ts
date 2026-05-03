import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');
  public theme$ = this.themeSubject.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /** Call once in the root component's ngOnInit */
  initTheme(): void {
    if (!this.isBrowser) return;

    // 1. Check localStorage
    const saved = localStorage.getItem('tp-theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      this.applyTheme(saved);
      return;
    }

    // 2. Respect OS preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    const next: Theme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
  }

  setTheme(theme: Theme): void {
    this.applyTheme(theme);
  }

  get isDark(): boolean {
    return this.themeSubject.value === 'dark';
  }

  private applyTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('tp-theme', theme);
    }
  }
}
