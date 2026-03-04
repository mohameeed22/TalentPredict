import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationService } from '../../services/formation.service';
import { FormationResponse, StatutFormation } from '../../models/formation.model';
import { FormationCardComponent } from '../formation-card/formation-card.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-formation-list',
  standalone: true,
  imports: [CommonModule, FormationCardComponent],
  templateUrl: './formation-list.component.html',
  styleUrl: './formation-list.component.scss'
})
export class FormationListComponent implements OnInit {
  private formationService = inject(FormationService);
  private authService = inject(AuthService);
  
  formations = signal<FormationResponse[]>([]);
  filteredFormations = signal<FormationResponse[]>([]);
  selectedFilter = signal<StatutFormation | 'ALL'>('ALL');
  loading = signal(false);
  error = signal<string | null>(null);

  readonly StatutFormation = StatutFormation;

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id) {
      this.error.set('Utilisateur non authentifié');
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.formationService.getUserFormations(currentUser.id as string).subscribe({
      next: (data) => {
        this.formations.set(data);
        this.filteredFormations.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erreur lors du chargement des formations');
        this.loading.set(false);
        console.error('Error loading formations:', err);
      }
    });
  }

  filterByStatus(status: StatutFormation | 'ALL'): void {
    this.selectedFilter.set(status);
    if (status === 'ALL') {
      this.filteredFormations.set(this.formations());
    } else {
      const filtered = this.formations().filter(f => f.statut === status);
      this.filteredFormations.set(filtered);
    }
  }

  isFilterActive(status: StatutFormation | 'ALL'): boolean {
    return this.selectedFilter() === status;
  }
}
