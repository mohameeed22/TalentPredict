import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AiAnalysisService } from '../../services/ai-analysis.service';
import { AuthService } from '../../../auth/services/auth.service';
import { CandidateAnalysis } from '../../../../core/models/candidate-analysis.model';
import { ProfileResponse } from '../../../auth/models/user.model';

@Component({
  selector: 'app-github-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './github-analyzer.component.html',
  styleUrl: './github-analyzer.component.scss'
})
export class GithubAnalyzerComponent implements OnInit {
  private aiService = inject(AiAnalysisService);
  private authService = inject(AuthService);

  // Form signals
  githubUsername = signal('');
  portfolioUrl = signal('');
  linkedinUrl = signal('');
  linkedinContent = signal('');
  cvFile = signal<File | null>(null);
  cvFileName = signal('');

  // Profile state
  profileLoading = signal(true);
  profile = signal<ProfileResponse | null>(null);

  // Analysis state
  analyzing = signal(false);
  error = signal<string | null>(null);
  analysis = signal<CandidateAnalysis | null>(null);
  analysisComplete = signal(false);

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.profileLoading.set(false);
      return;
    }

    this.authService.getProfile(String(user.id)).subscribe({
      next: (p) => {
        this.profile.set(p);
        if (p.githubUrl) {
          this.githubUsername.set(this.extractGithubUsername(p.githubUrl));
        }
        if (p.lienLinkedin) {
          this.linkedinUrl.set(p.lienLinkedin);
        }
        if (p.portfolioUrl) {
          this.portfolioUrl.set(p.portfolioUrl);
        }
        this.profileLoading.set(false);
        if (this.githubUsername()) {
          this.analyzeGithubProfile();
        }
      },
      error: () => {
        this.profileLoading.set(false);
      }
    });
  }

  private extractGithubUsername(url: string): string {
    if (!url) return '';
    const match = url.match(/github\.com\/([^\/\?#]+)/i);
    return match ? match[1] : url;
  }

  analyzeGithubProfile(): void {
    const username = this.githubUsername().trim();
    if (!username) {
      this.error.set('Veuillez entrer un nom d\'utilisateur GitHub');
      return;
    }

    this.analyzing.set(true);
    this.error.set(null);
    this.analysisComplete.set(false);
    this.analysis.set(null);

    const portfolio = this.portfolioUrl().trim() || undefined;
    const cv = this.cvFile() || undefined;
    const linkedin = this.linkedinUrl().trim() || undefined;
    const linkedinPaste = this.linkedinContent().trim() || undefined;

    this.aiService.analyzeCandidate(username, portfolio, cv, linkedin, linkedinPaste).subscribe({
      next: (result) => {
        this.analysis.set(result);
        this.analyzing.set(false);
        this.analysisComplete.set(true);
      },
      error: (err) => {
        this.error.set(err?.error?.detail || err?.error?.error || 'Erreur lors de l\'analyse. Vérifiez que le service AI est actif.');
        this.analyzing.set(false);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type !== 'application/pdf') {
        this.error.set('Seuls les fichiers PDF sont acceptés.');
        return;
      }
      this.cvFile.set(file);
      this.cvFileName.set(file.name);
      this.error.set(null);
    }
  }

  removeCvFile(): void {
    this.cvFile.set(null);
    this.cvFileName.set('');
  }

  reset(): void {
    this.error.set(null);
    this.analysis.set(null);
    this.analysisComplete.set(false);
  }

  onUsernameChange(value: string): void {
    this.githubUsername.set(value);
    if (this.error()) this.error.set(null);
  }

  onPortfolioChange(value: string): void {
    this.portfolioUrl.set(value);
  }

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert': return '#10b981';
      case 'Advanced': return '#6366f1';
      case 'Intermediate': return '#f59e0b';
      case 'Beginner': return '#94a3b8';
      default: return '#64748b';
    }
  }

  getLevelWidth(score: number): string {
    return `${Math.min(100, score)}%`;
  }

  getSourceColor(source: string): string {
    const s = source.toLowerCase();
    if (s.includes('github')) return '#24292f';
    if (s.includes('linkedin')) return '#0a66c2';
    if (s.includes('cv') || s.includes('pdf') || s.includes('resume')) return '#dc2626';
    if (s.includes('portfolio')) return '#059669';
    return '#64748b';
  }

  getSourceLabel(source: string): string {
    const s = source.toLowerCase();
    if (s.includes('github')) return 'GitHub';
    if (s.includes('linkedin')) return 'LinkedIn';
    if (s.includes('cv') || s.includes('pdf') || s.includes('resume')) return 'CV';
    if (s.includes('portfolio')) return 'Portfolio';
    return source;
  }

  hasGithubStats(): boolean {
    const p = this.profile();
    return !!p && (p.githubRepos > 0 || p.githubFollowers > 0 || !!p.githubName);
  }
}
