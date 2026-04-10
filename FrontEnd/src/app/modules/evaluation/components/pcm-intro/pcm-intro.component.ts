import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { CvExtractorService } from '../../../../core/services/cv-extractor.service';

@Component({
  selector: 'app-pcm-intro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './pcm-intro.component.html',
  styleUrl: './pcm-intro.component.scss'
})
export class PcmIntroComponent implements OnInit {
  profileForm!: FormGroup;
  selectedFile: File | null = null;
  fileError: string | null = null;
  extractionError: string | null = null;
  isExtracting = false;
  extractedCvText = '';
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cvExtractorService: CvExtractorService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.profileForm = this.fb.group({
      fullName: [this.currentUser?.username || '', Validators.required],
      email: [this.currentUser?.email || '', [Validators.required, Validators.email]],
      githubUsername: [''],
    });
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
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
      this.fileError = 'Fichier trop volumineux (max 5MB).';
      this.selectedFile = null;
      return;
    }

    this.fileError = null;
    this.selectedFile = file;

    this.isExtracting = true;
    try {
      const extracted = await this.cvExtractorService.extractFromFile(file);
      this.extractedCvText = extracted.text || '';
      if (!this.extractedCvText.trim()) {
        this.extractionError = 'Le CV est lisible mais aucun texte exploitable n\'a été extrait.';
      }
    } catch (error) {
      const details = error instanceof Error ? error.message : String(error);
      this.extractionError = `Extraction CV impossible: ${details}`;
      this.extractedCvText = '';
    } finally {
      this.isExtracting = false;
    }
  }

  startTest(): void {
    if (this.profileForm.invalid) return;

    if (this.selectedFile && !this.extractedCvText.trim()) {
      this.fileError = 'Veuillez attendre la fin de l\'extraction ou choisir un autre CV.';
      return;
    }

    const githubUsername = this.normalizeGithubUsername(
      this.profileForm.value.githubUsername || ''
    );

    const profileData = {
      ...this.profileForm.value,
      githubUsername,
      userId: this.currentUser?.id,
      cvFile: this.selectedFile ? this.selectedFile.name : null,
      cvText: this.extractedCvText
    };
    sessionStorage.setItem('softSkillsProfile', JSON.stringify(profileData));

    this.router.navigate(['/evaluation/test'], {
      state: { profileData, cvFile: this.selectedFile }
    });
  }

  hasGithub(): boolean {
    return !!this.profileForm.get('githubUsername')?.value?.trim();
  }

  clearSelectedFile(event?: Event): void {
    if (event) event.stopPropagation();
    this.selectedFile = null;
    this.extractedCvText = '';
    this.extractionError = null;
    this.fileError = null;
  }

  private normalizeGithubUsername(input: string): string {
    const raw = (input || '').trim();
    if (!raw) return '';

    const cleaned = raw.replace(/^(https?:\/\/)?(www\.)?github\.com\//i, '');
    return cleaned.split('/')[0].replace(/^@/, '').trim();
  }

  personalityTypes = [
    {
      name: 'Empathique',
      icon: '❤️',
      color: '#ec4899',
      description: 'Chaleureux, sensible et compatissant. Excelle dans la communication émotionnelle.',
      traits: ['Écoute', 'Compassion', 'Harmonie']
    },
    {
      name: 'Travaillomane',
      icon: '🎯',
      color: '#3b82f6',
      description: 'Logique, organisé et responsable. Se distingue par sa rigueur et sa fiabilité.',
      traits: ['Organisation', 'Logique', 'Fiabilité']
    },
    {
      name: 'Persévérant',
      icon: '🛡️',
      color: '#22c55e',
      description: 'Engagé, observateur et dévoué. Guidé par des valeurs fortes et un sens du devoir.',
      traits: ['Valeurs', 'Engagement', 'Observation']
    },
    {
      name: 'Promoteur',
      icon: '⚡',
      color: '#f59e0b',
      description: 'Charismatique, adaptable et orienté action. Excelle dans le leadership.',
      traits: ['Leadership', 'Action', 'Charisme']
    },
    {
      name: 'Rebelle',
      icon: '🎨',
      color: '#8b5cf6',
      description: 'Créatif, spontané et ludique. Apporte énergie et originalité.',
      traits: ['Créativité', 'Spontanéité', 'Énergie']
    },
    {
      name: 'Rêveur',
      icon: '🌙',
      color: '#06b6d4',
      description: 'Calme, imaginatif et introspectif. Fort en réflexion profonde.',
      traits: ['Imagination', 'Calme', 'Réflexion']
    }
  ];
}
