export enum TypeFormation {
  TECHNIQUE = 'TECHNIQUE',
  SOFT_SKILLS = 'SOFT_SKILLS',
  MANAGEMENT = 'MANAGEMENT',
  LANGUES = 'LANGUES'
}

export enum StatutFormation {
  PROPOSEE = 'PROPOSEE',
  EN_COURS = 'EN_COURS',
  TERMINEE = 'TERMINEE',
  ANNULEE = 'ANNULEE'
}

export interface Formation {
  id: number;
  userId: number;
  titre: string;
  description: string;
  type: TypeFormation;
  statut: StatutFormation;
  duree: number; // in hours
  progression: number; // 0-100
  dateProposition: Date;
  dateDebut?: Date;
  dateFin?: Date;
  url?: string;
}

export interface FormationRequest {
  titre: string;
  description: string;
  type: TypeFormation;
  duree: number;
  url?: string;
}

export interface FormationResponse {
  id: number;
  userId: number;
  titre: string;
  description: string;
  type: TypeFormation;
  statut: StatutFormation;
  duree: number;
  progression: number;
  dateProposition: Date;
  dateDebut?: Date;
  dateFin?: Date;
  url?: string;
}
