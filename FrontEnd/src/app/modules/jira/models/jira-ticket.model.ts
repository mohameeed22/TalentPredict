export enum StatutTicket {
  OUVERT = 'OUVERT',
  EN_COURS = 'EN_COURS',
  RESOLU = 'RESOLU',
  FERME = 'FERME'
}

export enum PrioriteTicket {
  BASSE = 'BASSE',
  MOYENNE = 'MOYENNE',
  HAUTE = 'HAUTE',
  CRITIQUE = 'CRITIQUE'
}

export interface JiraTicket {
  id: number;
  formationId: number;
  jiraKey: string;
  titre: string;
  description: string;
  statut: StatutTicket;
  priorite: PrioriteTicket;
  dateCreation: Date;
  dateMiseAJour: Date;
  assignee?: string;
}

export interface TicketResponse {
  id: number;
  formationId: number;
  jiraKey: string;
  titre: string;
  description: string;
  statut: StatutTicket;
  priorite: PrioriteTicket;
  dateCreation: Date;
  dateMiseAJour: Date;
  assignee?: string;
}
