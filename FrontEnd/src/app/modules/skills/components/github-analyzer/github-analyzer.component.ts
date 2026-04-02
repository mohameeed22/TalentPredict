import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AiAnalysisService } from '../../services/ai-analysis.service';
import { SkillsService } from '../../services/skills.service';
import { AuthService } from '../../../auth/services/auth.service';
import { CandidateAnalysis } from '../../../../core/models/candidate-analysis.model';
import { ProfileResponse } from '../../../auth/models/user.model';
import { SkillResponse, TypeSkill } from '../../models/skill.model';

@Component({
  selector: 'app-github-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './github-analyzer.component.html',
  styleUrl: './github-analyzer.component.scss'
})
export class GithubAnalyzerComponent implements OnInit {
  private aiService = inject(AiAnalysisService);
  private skillsService = inject(SkillsService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private readonly fallbackPollDelayMs = 2000;
  private readonly fallbackMaxAttempts = 12;

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
        if (this.shouldUseBackendFallback(err)) {
          this.runBackendFallbackAnalysis(username);
          return;
        }
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

  private shouldUseBackendFallback(err: unknown): boolean {
    const status = (err as { status?: number } | null)?.status;
    return status === 0 || status === 502 || status === 503;
  }

  private runBackendFallbackAnalysis(username: string): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id) {
      this.error.set('Analyse indisponible. Vérifiez que le service AI est démarré sur le port 8000.');
      this.analyzing.set(false);
      return;
    }

    const userId = String(user.id);
    this.error.set('Service IA principal indisponible. Bascule vers l\'analyse backend...');

    this.authService.triggerProfileAnalysis(userId).pipe(
      catchError(() => of({ message: '', status: 'PROCESSING' })),
      switchMap(() => this.pollAnalysisStatus(userId)),
      switchMap(() => this.skillsService.getUserSkills(userId)),
      map(skills => this.buildFallbackAnalysis(username, skills)),
      catchError(() => of(this.buildFallbackAnalysis(username, [])))
    ).subscribe({
      next: (fallbackAnalysis) => {
        this.analysis.set(fallbackAnalysis);
        this.analysisComplete.set(true);
        this.error.set(null);
        this.analyzing.set(false);
      },
      error: () => {
        this.error.set('Analyse indisponible. Vérifiez que le service AI est démarré sur le port 8000.');
        this.analyzing.set(false);
      }
    });
  }

  private pollAnalysisStatus(userId: string, attempt = 0): Observable<void> {
    if (attempt >= this.fallbackMaxAttempts) {
      return of(void 0);
    }

    return this.authService.getAnalysisStatus(userId).pipe(
      catchError(() => of({ status: 'IDLE' })),
      switchMap(status => {
        const currentStatus = (status?.status ?? 'IDLE').toUpperCase();
        if (currentStatus === 'COMPLETED' || currentStatus === 'FAILED' || currentStatus === 'IDLE') {
          return of(void 0);
        }

        return timer(this.fallbackPollDelayMs).pipe(
          switchMap(() => this.pollAnalysisStatus(userId, attempt + 1))
        );
      })
    );
  }

  private buildFallbackAnalysis(username: string, skills: SkillResponse[]): CandidateAnalysis {
    const techSkills = skills
      .filter(skill => skill.type === TypeSkill.TECH)
      .sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0));

    const mappedSkills = techSkills.map(skill => ({
      name: skill.nom,
      level: this.mapNiveauToLevel(skill.niveau),
      score: Math.max(0, Math.min(100, (skill.niveau ?? 0) * 20)),
      sources: [skill.source || 'BACKEND']
    }));

    const repositoriesAnalyzed = this.profile()?.githubRepos ?? 0;
    const averageScore = mappedSkills.length
      ? Math.round(mappedSkills.reduce((acc, skill) => acc + skill.score, 0) / mappedSkills.length)
      : 0;
    const topLanguages = mappedSkills.slice(0, 5).map(skill => skill.name);
    const matchedSkills = mappedSkills.filter(skill => skill.score >= 70).slice(0, 5).map(skill => skill.name);
    const missingSkills = mappedSkills.filter(skill => skill.score < 50).slice(0, 5).map(skill => skill.name);
    const profileSummary = this.profile()?.aiSummary?.trim();

    return {
      candidate: username,
      data_sources: ['GitHub', 'Backend Fallback'],
      summary: profileSummary || 'Analyse de secours basée sur les compétences enregistrées côté backend.',
      skills: mappedSkills,
      experience_score: averageScore,
      repositories_analyzed: repositoriesAnalyzed,
      top_languages: topLanguages,
      linkedin_analysis: this.profile()?.lienLinkedin
        ? 'Profil LinkedIn détecté et pris en compte via votre profil TalentPredict.'
        : undefined,
      job_match: {
        profile: 'Développeur logiciel',
        score: averageScore,
        matched_skills: matchedSkills,
        missing_skills: missingSkills,
        recommendations: missingSkills.length
          ? ['Renforcer les compétences manquantes pour améliorer le score global.']
          : ['Compétences alignées avec les attentes techniques générales.']
      },
      cv_warning: 'Service IA principal indisponible: résultats de secours chargés depuis le backend.'
    };
  }

  private mapNiveauToLevel(niveau: number): 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' {
    if (niveau >= 5) {
      return 'Expert';
    }
    if (niveau >= 3) {
      return 'Advanced';
    }
    if (niveau >= 2) {
      return 'Intermediate';
    }
    return 'Beginner';
  }

  goToTechTest(): void {
    void this.router.navigate(['/skill-test']);
  }
}
