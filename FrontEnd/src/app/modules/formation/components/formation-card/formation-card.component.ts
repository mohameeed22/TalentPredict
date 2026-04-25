import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationResponse, TypeFormation, StatutFormation } from '../../models/formation.model';
import { ProgressTrackerComponent } from '../progress-tracker/progress-tracker.component';

@Component({
  selector: 'app-formation-card',
  standalone: true,
  imports: [CommonModule, ProgressTrackerComponent],
  templateUrl: './formation-card.component.html',
  styleUrl: './formation-card.component.scss'
})
export class FormationCardComponent {
  formation = input.required<FormationResponse>();

  getStatusClass(statut: StatutFormation): string {
    const statusMap: Record<StatutFormation, string> = {
      [StatutFormation.PROPOSEE]: 'status-proposed',
      [StatutFormation.EN_ATTENTE]: 'status-proposed',
      [StatutFormation.ACCEPTEE]: 'status-proposed',
      [StatutFormation.REJETEE]: 'status-cancelled',
      [StatutFormation.PROPOSEE_ADMIN]: 'status-proposed',
      [StatutFormation.EN_COURS]: 'status-in-progress',
      [StatutFormation.TERMINEE]: 'status-completed',
      [StatutFormation.ANNULEE]: 'status-cancelled'
    };
    return statusMap[statut] || '';
  }

  getTypeLabel(type: TypeFormation): string {
    const typeLabels: Record<TypeFormation, string> = {
      [TypeFormation.TECH_SKILL]: 'Technique',
      [TypeFormation.SOFT_SKILL]: 'Soft Skills',
      [TypeFormation.CERTIFICATION]: 'Certification',
      [TypeFormation.WORKSHOP]: 'Workshop',
      [TypeFormation.TECHNIQUE]: 'Technique',
      [TypeFormation.SOFT_SKILLS]: 'Soft Skills',
      [TypeFormation.MANAGEMENT]: 'Management',
      [TypeFormation.LANGUES]: 'Langues'
    };
    return typeLabels[type] || type;
  }

  getStatusLabel(statut: StatutFormation): string {
    const statusLabels: Record<StatutFormation, string> = {
      [StatutFormation.PROPOSEE]: 'Proposée',
      [StatutFormation.EN_ATTENTE]: 'En attente',
      [StatutFormation.ACCEPTEE]: 'Acceptée',
      [StatutFormation.REJETEE]: 'Rejetée',
      [StatutFormation.PROPOSEE_ADMIN]: 'Recommandée par RH',
      [StatutFormation.EN_COURS]: 'En cours',
      [StatutFormation.TERMINEE]: 'Terminée',
      [StatutFormation.ANNULEE]: 'Annulée'
    };
    return statusLabels[statut] || statut;
  }

  formatDate(date: Date | undefined): string {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
