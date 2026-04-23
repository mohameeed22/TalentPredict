import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { TestApiService } from '../../services/test-api.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { NotificationService } from '../../../../core/services/notification.service';

interface VerifiedSkill {
  skill: string;
  confidence: string;
  evidence: string;
}

interface GithubAnalysisResult {
  status: string;
  username: string;
  data: {
    verified_skills: VerifiedSkill[];
    missing_claimed_skills: string[];
    code_complexity_estimate: string;
    summary: string;
  };
}

@Component({
  selector: 'app-github-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './github-analyzer.component.html',
  styleUrl: './github-analyzer.component.scss'
})
export class GithubAnalyzerComponent {
  private auth    = inject(AuthService);
  private testApi = inject(TestApiService);
  private skills  = inject(SkillsService);
  private notify  = inject(NotificationService);
  private router  = inject(Router);
  private cdr     = inject(ChangeDetectorRef);

  githubUsername = '';
  claimedSkills: string[] = [];
  allUserSkills: string[] = [];
  loadingSkills = true;
  analyzing = false;
  result: GithubAnalysisResult | null = null;

  ngOnInit(): void {
    const user = this.auth.getCurrentUser();
    if (!user?.id) {
      this.loadingSkills = false;
      return;
    }

    this.skills.getUserSkills(String(user.id))
      .pipe(take(1))
      .subscribe({
        next: (list) => {
          this.allUserSkills = list
            .filter(s => s.type === 'TECH' || (s.type as string) === 'TECH')
            .sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0))
            .map(s => s.nom);
          this.claimedSkills = [...this.allUserSkills];
          this.loadingSkills = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.loadingSkills = false;
          this.cdr.markForCheck();
        }
      });
  }

  toggleSkill(skill: string): void {
    const idx = this.claimedSkills.indexOf(skill);
    if (idx >= 0) {
      this.claimedSkills.splice(idx, 1);
    } else {
      this.claimedSkills.push(skill);
    }
  }

  isSkillSelected(skill: string): boolean {
    return this.claimedSkills.includes(skill);
  }

  analyze(): void {
    if (!this.githubUsername.trim()) {
      this.notify.warning('Veuillez entrer un nom d\'utilisateur GitHub.');
      return;
    }
    if (this.claimedSkills.length === 0) {
      this.notify.warning('Sélectionnez au moins une compétence à vérifier.');
      return;
    }

    this.analyzing = true;
    this.result = null;
    this.cdr.markForCheck();

    this.testApi.analyzeGithub({
      username: this.githubUsername.trim(),
      claimedSkills: this.claimedSkills
    }).pipe(take(1)).subscribe({
      next: (res: any) => {
        this.analyzing = false;
        this.result = res as GithubAnalysisResult;
        this.cdr.markForCheck();
      },
      error: (err: any) => {
        this.analyzing = false;
        this.notify.error(err?.error?.message ?? 'Analyse GitHub échouée. Vérifiez le nom d\'utilisateur.');
        this.cdr.markForCheck();
      }
    });
  }

  reset(): void {
    this.result = null;
    this.githubUsername = '';
    this.claimedSkills = [...this.allUserSkills];
  }

  getConfidenceClass(confidence: string): string {
    switch (confidence?.toLowerCase()) {
      case 'high': return 'confidence-high';
      case 'medium': return 'confidence-medium';
      case 'low': return 'confidence-low';
      default: return 'confidence-medium';
    }
  }

  getComplexityClass(level: string): string {
    switch (level?.toLowerCase()) {
      case 'advanced': return 'complexity-advanced';
      case 'intermediate': return 'complexity-intermediate';
      case 'beginner': return 'complexity-beginner';
      default: return 'complexity-intermediate';
    }
  }

  parseSkillsInput(value: string): void {
    this.claimedSkills = value.split(',').map(s => s.trim()).filter(Boolean);
  }

  goBack(): void { void this.router.navigate(['/skill-test']); }
}
