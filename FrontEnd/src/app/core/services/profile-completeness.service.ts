import { Injectable } from '@angular/core';
import { ProfileResponse } from '../../modules/auth/models/user.model';

export interface CompletenessResult {
  score: number;           // 0–100
  filledCount: number;
  totalCount: number;
  missing: MissingField[];
}

export interface MissingField {
  key: string;   // field name on ProfileResponse
  label: string; // human-readable label
  inputId?: string; // HTML id for the form input (for scrolling)
}

const PROFILE_FIELDS: { key: keyof ProfileResponse; label: string; inputId?: string }[] = [
  { key: 'urlPhoto',            label: 'Photo de profil',       inputId: 'photoInput' },
  { key: 'titreProfessionnel',  label: 'Titre professionnel',   inputId: 'titreProfessionnel' },
  { key: 'description',         label: 'Bio / Description',     inputId: 'description' },
  { key: 'experienceAns',       label: 'Années d\'expérience',  inputId: 'experienceAns' },
  { key: 'niveauEtudes',        label: 'Niveau d\'études',      inputId: 'niveauEtudes' },
  { key: 'lienLinkedin',        label: 'LinkedIn',              inputId: 'lienLinkedin' },
  { key: 'githubUrl',           label: 'GitHub',                inputId: 'githubUrl' },
  { key: 'cvUrl',               label: 'CV (PDF)',              inputId: 'cvInput' },
  { key: 'portfolioUrl',        label: 'Portfolio',             inputId: 'portfolioUrl' },
  { key: 'aiSummary',           label: 'Analyse IA' },
];

@Injectable({
  providedIn: 'root'
})
export class ProfileCompletenessService {

  compute(profile: ProfileResponse | null | undefined): CompletenessResult {
    if (!profile) {
      return { score: 0, filledCount: 0, totalCount: PROFILE_FIELDS.length, missing: PROFILE_FIELDS.map(f => ({ key: f.key, label: f.label, inputId: f.inputId })) };
    }

    const missing: MissingField[] = [];

    for (const field of PROFILE_FIELDS) {
      const val = (profile as any)[field.key];
      const isEmpty = val === null || val === undefined || val === '' || val === 0;
      if (isEmpty) {
        missing.push({ key: field.key, label: field.label, inputId: field.inputId });
      }
    }

    const filledCount = PROFILE_FIELDS.length - missing.length;
    const score = Math.round((filledCount / PROFILE_FIELDS.length) * 100);

    return { score, filledCount, totalCount: PROFILE_FIELDS.length, missing };
  }
}
