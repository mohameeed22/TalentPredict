import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../../formation/services/formation.service';
import { FormationResponse, StatutFormation } from '../../../formation/models/formation.model';

@Component({
  selector: 'app-admin-formation-approval',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-formation-approval.html',
  styleUrl: './admin-formation-approval.scss',
})
export class AdminFormationApproval implements OnInit {
  private formationService = inject(FormationService);

  formations = signal<FormationResponse[]>([]);
  isLoading = signal(false);
  errorMsg = signal('');

  selectedFormationId = signal<string | null>(null);
  rejectionReason = signal('');
  adminNote = signal('');

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.isLoading.set(true);
    this.formationService.getAllFormations().subscribe({
      next: (res) => {
        this.formations.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMsg.set('Erreur lors du chargement des formations.');
        this.isLoading.set(false);
      }
    });
  }

  pendingFormations() {
    return this.formations().filter(f => f.statut === StatutFormation.EN_ATTENTE);
  }

  otherFormations() {
    return this.formations().filter(f => f.statut !== StatutFormation.EN_ATTENTE);
  }

  approveFormation(f: FormationResponse): void {
    this.isLoading.set(true);
    // Optionnel : passer adminNote si implémenté, pour l'instant on update juste le statut
    this.formationService.updateFormationStatus(f.id, StatutFormation.ACCEPTEE).subscribe({
      next: () => {
        if (this.adminNote().trim() !== '') {
          this.formationService.updateFormationReviewNotes(f.id, { reviewNote: this.adminNote() }).subscribe(() => {
            this.loadFormations();
          });
        } else {
          this.loadFormations();
        }
        this.selectedFormationId.set(null);
        this.adminNote.set('');
      },
      error: () => this.isLoading.set(false)
    });
  }

  rejectFormation(f: FormationResponse): void {
    this.isLoading.set(true);
    this.formationService.updateFormationStatus(f.id, StatutFormation.REJETEE).subscribe({
      next: () => {
        if (this.rejectionReason().trim() !== '') {
           this.formationService.updateFormationReviewNotes(f.id, { reviewNote: 'REJETÉ: ' + this.rejectionReason() }).subscribe(() => {
             this.loadFormations();
           });
        } else {
           this.loadFormations();
        }
        this.selectedFormationId.set(null);
        this.rejectionReason.set('');
      },
      error: () => this.isLoading.set(false)
    });
  }

  toggleSelection(id: string) {
    if (this.selectedFormationId() === id) {
      this.selectedFormationId.set(null);
    } else {
      this.selectedFormationId.set(id);
      this.rejectionReason.set('');
      this.adminNote.set('');
    }
  }
}
