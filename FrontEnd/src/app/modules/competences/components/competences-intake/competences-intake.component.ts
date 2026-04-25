import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CvExtractorService } from '../../../../core/services/cv-extractor.service';
import { TestApiService } from '../../../skill-test/services/test-api.service';
import { SkillsService } from '../../../skills/services/skills.service';
import { TestStateService } from '../../../skill-test/services/test-state.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { AiAnalysisService } from '../../../skills/services/ai-analysis.service';
import { CandidateAnalysis } from '../../../../core/models/candidate-analysis.model';

@Component({
  selector: 'app-competences-intake',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './competences-intake.component.html',
  styleUrl: './competences-intake.component.scss'
})
export class CompetencesIntakeComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private cvExtractor = inject(CvExtractorService);
  private testApi = inject(TestApiService);
  private skillsService = inject(SkillsService);
  private testState = inject(TestStateService);
  private notify = inject(NotificationService);
  private aiService = inject(AiAnalysisService);

  form!: FormGroup;
  selectedFile: File | null = null;
  fileError: string | null = null;
  extractedCvText = '';
  isExtracting = false;
  extractionError: string | null = null;
  currentUser: any;

  // Analysis state
  isAnalyzing = false;
  analyzeError: string | null = null;
  aiAnalysis: CandidateAnalysis | null = null;

  // Detected skills for test generation
  detectedSkills: string[] = [];
  existingSkills: string[] = [];

  step: 'input' | 'analyzing' | 'done' = 'input';

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.form = this.fb.group({
      linkedinUrl: [''],
      githubUrl: ['', Validators.required],
      portfolioUrl: [''],
    });

    // Auto-fill URLs from profile cache
    try {
      const cached = sessionStorage.getItem('userProfileUrls');
      if (cached) {
        const urls = JSON.parse(cached);
        if (urls.githubUrl) this.form.patchValue({ githubUrl: urls.githubUrl });
        if (urls.linkedinUrl) this.form.patchValue({ linkedinUrl: urls.linkedinUrl });
        if (urls.portfolioUrl) this.form.patchValue({ portfolioUrl: urls.portfolioUrl });
      }
    } catch {}

    // Pre-fill GitHub from stored skills if available
    if (this.currentUser?.id) {
      this.skillsService.getUserSkills(String(this.currentUser.id)).subscribe({
        next: (skills) => {
          this.existingSkills = skills
            .filter(s => s.type === 'TECH' || (s.type as string) === 'TECH')
            .sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0))
            .map(s => s.nom);
        }
      });
    }
  }

  get githubUsername(): string {
    const raw = this.form.get('githubUrl')?.value ?? '';
    return this.normalizeGithubUrl(raw);
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    this.fileError = null;
    this.extractionError = null;
    this.extractedCvText = '';

    const lowerName = file.name.toLowerCase();
    const isPdf = file.type === 'application/pdf' || lowerName.endsWith('.pdf');
    const isTxt = file.type === 'text/plain' || lowerName.endsWith('.txt');

    if (!isPdf && !isTxt) {
      this.fileError = 'Seuls les fichiers PDF ou TXT sont acceptés.';
      this.selectedFile = null;
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.fileError = 'Fichier trop volumineux (max 5 Mo).';
      this.selectedFile = null;
      return;
    }

    this.fileError = null;
    this.selectedFile = file;
    this.isExtracting = true;

    try {
      const extracted = await this.cvExtractor.extractFromFile(file);
      this.extractedCvText = extracted.text || '';
      if (!this.extractedCvText.trim()) {
        this.extractionError = 'CV lisible mais aucun texte exploitable extrait.';
      } else {
        // Try to auto-detect github URL from CV text
        const githubMatch = this.extractedCvText.match(/github\.com\/([a-zA-Z0-9-]+)/i);
        if (githubMatch && githubMatch[1]) {
          const detectedHandle = githubMatch[1].trim();
          if (!this.form.get('githubUrl')?.value) {
            this.form.patchValue({ githubUrl: `https://github.com/${detectedHandle}` });
            this.notify.success(`Profil GitHub détecté : ${detectedHandle}`);
          }
        }
      }
    } catch (err) {
      this.extractionError = `Extraction impossible : ${err instanceof Error ? err.message : String(err)}`;
      this.extractedCvText = '';
    } finally {
      this.isExtracting = false;
    }
  }

  clearFile(): void {
    this.selectedFile = null;
    this.extractedCvText = '';
    this.fileError = null;
    this.extractionError = null;
  }

  analyzeAndLaunch(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const username = this.githubUsername;
    if (!username || !/^[a-zA-Z0-9-]+$/.test(username)) {
      this.notify.warning('Veuillez entrer un nom d\'utilisateur GitHub valide (alphanumérique et tirets uniquement, sans espaces).');
      return;
    }

    this.step = 'analyzing';
    this.isAnalyzing = true;
    this.analyzeError = null;

    const portfolio = this.form.get('portfolioUrl')?.value;
    const linkedin = this.form.get('linkedinUrl')?.value;
    const cvFile = this.selectedFile || undefined;

    this.aiService.analyzeCandidate(username, portfolio, cvFile, linkedin).subscribe({
      next: (res: CandidateAnalysis) => {
        this.isAnalyzing = false;
        this.aiAnalysis = res;
        this.step = 'done';

        // Extract technical skills for the test
        const aiSkills = (res.skills || []).map(s => s.name);
        this.detectedSkills = [...new Set([...aiSkills, ...this.existingSkills])];

        // Save context to sessionStorage so tech results page can read it
        sessionStorage.setItem('techIntakeContext', JSON.stringify({
          linkedinUrl: linkedin,
          githubUrl: this.form.get('githubUrl')?.value,
          portfolioUrl: portfolio,
          githubUsername: username,
          cvText: this.extractedCvText,
          aiAnalysis: res,
          detectedSkills: this.detectedSkills,
        }));
      },
      error: (err: any) => {
        this.isAnalyzing = false;
        this.step = 'input';
        this.analyzeError = err?.error?.detail || err?.error?.error || 'Analyse échouée. Vérifiez le service AI.';
        this.notify.error(this.analyzeError!);
      }
    });
  }

  launchTest(): void {
    // Dynamically fetch user at the moment of click, in case it was loaded late
    const user = this.authService.getCurrentUser() || this.currentUser;
    const userId = user?.id ? String(user.id) : '';
    
    if (!userId) {
      this.notify.error('Erreur: Impossible d\'identifier l\'utilisateur pour lancer le test.');
      return;
    }

    let skills = this.detectedSkills.length > 0 ? this.detectedSkills : this.existingSkills;
    if (!skills || skills.length === 0) {
      // Robust fallback to ensure the AI always has something to generate questions for
      skills = ['JavaScript', 'Python', 'Architecture Logicielle'];
    }
    
    const level = this.mapLevelToString((user as any)?.level);

    // Generate test with detected skills and navigate to quiz
    this.testApi.generateTest({
      skills,
      level,
      candidate_id: userId,
      question_count: 8 + Math.floor(Math.random() * 5), // 8-12 random
    }).subscribe({
      next: (res: any) => {
        const questions = res?.questions ?? res?.data?.questions ?? [];
        if (!questions.length) {
          this.notify.error('Impossible de générer le test. Réessayez.');
          return;
        }
        this.testState.setSession(res?.test_id ?? res?.data?.test_id ?? 'local', questions, level, userId);
        this.router.navigate(['/competences/test']);
      },
      error: (err: any) => {
        this.notify.error(err?.error?.message ?? 'Impossible de générer le test. Réessayez.');
      }
    });
  }

  resetAnalysis(): void {
    this.step = 'input';
    this.aiAnalysis = null;
    this.detectedSkills = [];
  }

  // UI Helpers mapped from github-analyzer
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

  private normalizeGithubUrl(input: string): string {
    const raw = (input ?? '').trim();
    if (!raw) return '';
    let username = raw;
    if (raw.match(/github\.com\//i)) {
      username = raw.replace(/.*github\.com\//i, '');
    }
    username = username.split(/[\/\?#\s]/)[0].replace(/^@/, '').trim();
    return username;
  }

  private mapLevelToString(level?: number): string {
    const lvl = Number(level ?? 2);
    if (lvl <= 1) return 'BEGINNER';
    if (lvl <= 2) return 'INTERMEDIATE';
    if (lvl <= 4) return 'ADVANCED';
    return 'EXPERT';
  }
}
