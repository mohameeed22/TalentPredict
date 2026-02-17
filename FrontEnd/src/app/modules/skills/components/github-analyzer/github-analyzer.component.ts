import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';
import { SkillResponse } from '../../models/skill.model';

@Component({
  selector: 'app-github-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './github-analyzer.component.html',
  styleUrl: './github-analyzer.component.scss'
})
export class GithubAnalyzerComponent {
  private skillsService = inject(SkillsService);
  
  githubUsername = signal('');
  analyzing = signal(false);
  error = signal<string | null>(null);
  analyzedSkills = signal<SkillResponse[]>([]);
  analysisComplete = signal(false);

  analyzeGithubProfile(): void {
    const username = this.githubUsername().trim();
    
    if (!username) {
      this.error.set('Veuillez entrer un nom d\'utilisateur GitHub');
      return;
    }

    this.analyzing.set(true);
    this.error.set(null);
    this.analysisComplete.set(false);

    // Simulate GitHub analysis (replace with actual API call)
    setTimeout(() => {
      // TODO: Implement actual GitHub analysis
      // For now, just mock the analysis
      this.analyzedSkills.set([
        {
          id: 1,
          userId: 1,
          nom: 'JavaScript',
          type: 'TECH' as any,
          niveau: 4,
          dateAjout: new Date()
        },
        {
          id: 2,
          userId: 1,
          nom: 'TypeScript',
          type: 'TECH' as any,
          niveau: 4,
          dateAjout: new Date()
        },
        {
          id: 3,
          userId: 1,
          nom: 'Angular',
          type: 'TECH' as any,
          niveau: 3,
          dateAjout: new Date()
        }
      ]);
      this.analyzing.set(false);
      this.analysisComplete.set(true);
    }, 2000);
  }

  reset(): void {
    this.githubUsername.set('');
    this.error.set(null);
    this.analyzedSkills.set([]);
    this.analysisComplete.set(false);
  }

  onUsernameChange(value: string): void {
    this.githubUsername.set(value);
    if (this.error()) {
      this.error.set(null);
    }
  }
}
