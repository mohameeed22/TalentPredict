import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SoftSkillsService } from '../../services/soft-skills.service';
import { CvExtractorService } from '../../../../core/services/cv-extractor.service';
import {
  SoftSkillsAnalysisRequest,
  SoftSkillsResult
} from '../../models/soft-skills.model';

@Component({
  selector: 'app-soft-skills-test',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './soft-skills-test.component.html',
  styleUrls: ['./soft-skills-test.component.scss']
})
export class SoftSkillsTestComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  result: SoftSkillsResult | null = null;
  error: string | null = null;
  isSubmitting = false;

  extractedCvText: string = '';
  cvFileName: string = '';
  isExtracting: boolean = false;
  extractionError: string = '';

  readonly skillSections = [
    { label: 'Communication',  icon: '💬', questions: ['q1', 'q2', 'q3'], labels: [
      'Je communique clairement mes idées en réunion',
      "J'écoute activement mes collègues avant de répondre",
      "Je rédige des emails/documents faciles à comprendre"
    ]},
    { label: 'Discipline',     icon: '⏰', questions: ['q4', 'q5', 'q6'], labels: [
      'Je respecte toujours mes deadlines',
      "Je planifie mon travail et m'y tiens",
      "Je suis rigoureux dans l'exécution de mes tâches"
    ]},
    { label: 'Curiosité',      icon: '🔍', questions: ['q7', 'q8', 'q9'], labels: [
      "J'aime apprendre de nouvelles technologies/méthodes",
      "Je pose souvent des questions pour comprendre en profondeur",
      "Je cherche activement des solutions innovantes"
    ]},
    { label: 'Collaboration',  icon: '🤝', questions: ['q10', 'q11', 'q12'], labels: [
      "Je préfère travailler en équipe que seul",
      "Je partage volontiers mes connaissances",
      "Je m'adapte facilement aux styles de travail des autres"
    ]},
    { label: 'Ownership',      icon: '🎯', questions: ['q13', 'q14', 'q15'], labels: [
      "Je prends des initiatives sans attendre qu'on me le demande",
      "J'assume la responsabilité de mes erreurs",
      "Je vais au bout de mes projets sans supervision"
    ]},
    { label: 'Leadership',     icon: '👑', questions: ['q16', 'q17', 'q18'], labels: [
      "Je prends naturellement des décisions dans les groupes",
      "Je motive et inspire mes collègues",
      "J'ai une vision claire de mes objectifs professionnels"
    ]}
  ];

  readonly scaleHints = {
    min: '0 = jamais',
    max: '5 = toujours'
  };

  constructor(
    private fb: FormBuilder,
    private softSkillsService: SoftSkillsService,
    private cvExtractorService: CvExtractorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName:       ['', Validators.required],
      email:          ['', [Validators.required, Validators.email]],
      githubUsername: [''],
      // PCM questions default to 3 (0-5 scale)
      q1: [3], q2: [3], q3: [3], q4: [3], q5: [3], q6: [3],
      q7: [3], q8: [3], q9: [3], q10:[3], q11:[3], q12:[3],
      q13:[3], q14:[3], q15:[3], q16:[3], q17:[3], q18:[3]
    });
  }

  async onCvFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.isExtracting = true;
    this.extractionError = '';

    try {
      const extracted = await this.cvExtractorService.extractFromFile(file);
      this.extractedCvText = extracted.text;
      this.cvFileName = extracted.fileName;
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      this.extractionError = errorMsg;
      this.extractedCvText = '';
      this.cvFileName = '';
    } finally {
      this.isExtracting = false;
    }
  }

  clearCvFile(): void {
    this.extractedCvText = '';
    this.cvFileName = '';
    this.extractionError = '';
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    if (!this.extractedCvText) {
      alert('Please upload and extract a CV first');
      return;
    }

    this.loading = true;
    this.isSubmitting = true;
    this.error = null;

    const formValue = this.form.value;
    const payload = {
      full_name: formValue.fullName,
      email: formValue.email,
      extracted_cv_text: this.extractedCvText,
      q1: formValue.q1,
      q2: formValue.q2,
      q3: formValue.q3,
      q4: formValue.q4,
      q5: formValue.q5,
      q6: formValue.q6,
      q7: formValue.q7,
      q8: formValue.q8,
      q9: formValue.q9,
      q10: formValue.q10,
      q11: formValue.q11,
      q12: formValue.q12,
      q13: formValue.q13,
      q14: formValue.q14,
      q15: formValue.q15,
      q16: formValue.q16,
      q17: formValue.q17,
      q18: formValue.q18,
      github_username: this.normalizeGithubUsername(formValue.githubUsername)
    };

    this.softSkillsService.analyzeSoftSkillsWithExtractedText(payload).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
        this.isSubmitting = false;
        this.displayResults(res);
      },
      error: (err) => {
        const details = err?.error?.message || err?.message || '';
        this.error = details
          ? `Analyse impossible: ${details}`
          : "Analyse impossible. Vérifiez la connexion backend -> n8n (webhook master-agent).";
        this.loading = false;
        this.isSubmitting = false;
      }
    });
  }

  private displayResults(res: SoftSkillsResult): void {
    this.router.navigate(['/evaluation/soft-skills-results'],
      { state: { result: res } });
  }

  getSliderValue(controlName: string): number {
    return this.form.get(controlName)?.value ?? 3;
  }

  trackByQuestion(_index: number, question: string): string {
    return question;
  }

  private normalizeGithubUsername(input: string): string {
    const raw = (input || '').trim();
    if (!raw) return '';

    const cleaned = raw.replace(/^(https?:\/\/)?(www\.)?github\.com\//i, '');
    return cleaned.split('/')[0].replace(/^@/, '').trim();
  }
}
