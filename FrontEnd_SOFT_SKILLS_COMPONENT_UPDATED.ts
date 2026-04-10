/**
 * @name Soft Skills Analysis Component (Updated)
 * @description Collects user data, extracts CV text locally, sends to n8n for analysis
 * @location FrontEnd/src/app/modules/evaluation/soft-skills/soft-skills.component.ts
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoftSkillsService } from '../services/soft-skills.service';
import { CvExtractorService } from '../../../core/services/cv-extractor.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css'],
})
export class SoftSkillsComponent implements OnInit {
  softSkillsForm: FormGroup;
  isSubmitting = false;
  extractedCvText = '';
  cvFileName = '';
  cvFileSize = '';
  cvPages = 0;

  // PCM Questions (18 total, 3 per skill)
  pcmQuestions = [
    // Communication (q1-q3)
    {
      id: 'q1',
      text: 'Je préfère communiquer mes idées clairement et directement',
      skill: 'communication',
    },
    {
      id: 'q2',
      text: 'J\'écoute attentivement ce que disent les autres',
      skill: 'communication',
    },
    { id: 'q3', text: 'J\'exprime mes sentiments ouvertement', skill: 'communication' },

    // Discipline (q4-q6)
    {
      id: 'q4',
      text: 'J\'organise mon travail de manière structurée et méthodique',
      skill: 'discipline',
    },
    {
      id: 'q5',
      text: 'Je respecte les délais et les engagements que je prends',
      skill: 'discipline',
    },
    {
      id: 'q6',
      text: 'Je suis attentif aux détails et à la qualité du travail',
      skill: 'discipline',
    },

    // Curiosity (q7-q9)
    {
      id: 'q7',
      text: 'J\'aime apprendre de nouvelles choses et explorer de nouveaux domaines',
      skill: 'curiosity',
    },
    {
      id: 'q8',
      text: 'Je pose beaucoup de questions pour mieux comprendre',
      skill: 'curiosity',
    },
    {
      id: 'q9',
      text: 'J\'aime relever des défis et sortir de ma zone de confort',
      skill: 'curiosity',
    },

    // Collaboration (q10-q12)
    {
      id: 'q10',
      text: 'J\'aime travailler en équipe et collaborer avec d\'autres',
      skill: 'collaboration',
    },
    {
      id: 'q11',
      text: 'Je suis sensible aux émotions et aux préoccupations des autres',
      skill: 'collaboration',
    },
    {
      id: 'q12',
      text: 'Je contribue activement aux discussions de groupe',
      skill: 'collaboration',
    },

    // Ownership (q13-q15)
    {
      id: 'q13',
      text: 'Je prends l\'initiative et l\'responsabilité de mes projets',
      skill: 'ownership',
    },
    {
      id: 'q14',
      text: 'Je vise l\'excellence dans tout ce que je fais',
      skill: 'ownership',
    },
    {
      id: 'q15',
      text: 'Je suis déterminé à atteindre mes objectifs',
      skill: 'ownership',
    },

    // Leadership (q16-q18)
    {
      id: 'q16',
      text: 'J\'inspire et motiv les autres à donner le meilleur d\'eux-mêmes',
      skill: 'leadership',
    },
    {
      id: 'q17',
      text: 'Je prends les décisions avec assurance et conviction',
      skill: 'leadership',
    },
    {
      id: 'q18',
      text: 'Je guide naturellement les autres vers les objectifs communs',
      skill: 'leadership',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private softSkillsService: SoftSkillsService,
    private cvExtractorService: CvExtractorService,
    private messageService: MessageService
  ) {
    this.softSkillsForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  /**
   * Create reactive form with all required fields
   */
  private createForm(): FormGroup {
    const formGroup: any = {
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      githubUsername: [''],
      cvFile: [null],
    };

    // Add PCM questions (q1-q18)
    for (let i = 1; i <= 18; i++) {
      formGroup[`q${i}`] = [5, [Validators.required, Validators.min(1), Validators.max(10)]];
    }

    return this.fb.group(formGroup);
  }

  /**
   * Load existing user data if available
   */
  private loadUserData(): void {
    // Load from localStorage or user service
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.fullName) {
      this.softSkillsForm.patchValue(userData);
    }
  }

  /**
   * Handle CV file selection and extract text
   */
  async onCvFileSelected(event: any): Promise<void> {
    const file = event.target.files?.[0];
    if (!file) return;

    this.isSubmitting = true;

    try {
      // ✅ EXTRACT TEXT LOCALLY (NEW APPROACH)
      const extracted = await this.cvExtractorService.extractFromFile(file);

      this.extractedCvText = extracted.text;
      this.cvFileName = extracted.fileName;
      this.cvFileSize = this.cvExtractorService.formatFileSize(extracted.fileSize);
      this.cvPages = extracted.pages || 0;

      // Show success message
      this.messageService.add({
        severity: 'success',
        summary: 'CV Extracted',
        detail: `✅ Extracted ${this.cvPages || 1} page(s) (${this.cvFileSize})`,
        life: 3000,
      });

      console.log('✅ CV extracted successfully');
      console.log(`Text preview: ${this.extractedCvText.substring(0, 100)}...`);
    } catch (error) {
      console.error('❌ CV extraction error:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Extraction Failed',
        detail: `Error: ${error}`,
        life: 5000,
      });
      this.extractedCvText = '';
      this.cvFileName = '';
    } finally {
      this.isSubmitting = false;
    }
  }

  /**
   * Clear extracted CV data
   */
  clearCvFile(): void {
    this.extractedCvText = '';
    this.cvFileName = '';
    this.cvFileSize = '';
    this.cvPages = 0;
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  /**
   * Submit form to n8n with extracted CV text
   */
  async onSubmit(): Promise<void> {
    if (this.softSkillsForm.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Validation Error',
        detail: 'Please fill all required fields correctly',
      });
      return;
    }

    this.isSubmitting = true;

    try {
      const formData = this.softSkillsForm.value;

      // Build payload for n8n (with extracted CV text, not binary)
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        github_username: formData.githubUsername || '',
        extracted_cv_text: this.extractedCvText, // ✅ Already extracted!
        q1: formData.q1,
        q2: formData.q2,
        q3: formData.q3,
        q4: formData.q4,
        q5: formData.q5,
        q6: formData.q6,
        q7: formData.q7,
        q8: formData.q8,
        q9: formData.q9,
        q10: formData.q10,
        q11: formData.q11,
        q12: formData.q12,
        q13: formData.q13,
        q14: formData.q14,
        q15: formData.q15,
        q16: formData.q16,
        q17: formData.q17,
        q18: formData.q18,
      };

      console.log('📤 Sending to n8n:', { ...payload, extracted_cv_text: '...' });

      // ✅ Send to n8n (text already extracted)
      const result = await this.softSkillsService.analyzeSoftSkills(payload);

      // Save user data
      localStorage.setItem('userData', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        githubUsername: formData.githubUsername,
      }));

      // Show success and navigate to results
      this.messageService.add({
        severity: 'success',
        summary: 'Analysis Complete!',
        detail: '✅ Results ready',
        life: 3000,
      });

      // Navigate to results page
      // this.router.navigate(['/evaluation/results']);
    } catch (error) {
      console.error('❌ Submission error:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Analysis Failed',
        detail: `Error: ${error}`,
      });
    } finally {
      this.isSubmitting = false;
    }
  }

  /**
   * Get PCM questions for a specific skill
   */
  getQuestionsForSkill(skill: string): any[] {
    return this.pcmQuestions.filter((q) => q.skill === skill);
  }

  /**
   * Reset form
   */
  resetForm(): void {
    this.softSkillsForm.reset();
    this.clearCvFile();
    for (let i = 1; i <= 18; i++) {
      this.softSkillsForm.patchValue({ [`q${i}`]: 5 });
    }
  }
}
