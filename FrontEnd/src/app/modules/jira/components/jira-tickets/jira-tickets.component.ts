import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiraService } from '../../services/jira.service';
import { TicketResponse, StatutTicket, PrioriteTicket } from '../../models/jira-ticket.model';

@Component({
  selector: 'app-jira-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jira-tickets.component.html',
  styleUrl: './jira-tickets.component.scss'
})
export class JiraTicketsComponent implements OnInit {
  private jiraService = inject(JiraService);
  
  tickets = signal<TicketResponse[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  selectedStatus = signal<StatutTicket | 'ALL'>('ALL');
  selectedPriority = signal<PrioriteTicket | 'ALL'>('ALL');

  readonly StatutTicket = StatutTicket;
  readonly PrioriteTicket = PrioriteTicket;

  filteredTickets = computed(() => {
    let filtered = this.tickets();

    if (this.selectedStatus() !== 'ALL') {
      filtered = filtered.filter(t => t.statut === this.selectedStatus());
    }

    if (this.selectedPriority() !== 'ALL') {
      filtered = filtered.filter(t => t.priorite === this.selectedPriority());
    }

    return filtered;
  });

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading.set(true);
    this.error.set(null);

    this.jiraService.getAllTickets().subscribe({
      next: (data) => {
        this.tickets.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erreur lors du chargement des tickets');
        this.loading.set(false);
        console.error('Error loading tickets:', err);
      }
    });
  }

  getStatusClass(statut: StatutTicket): string {
    const statusMap: Record<StatutTicket, string> = {
      [StatutTicket.OUVERT]: 'status-open',
      [StatutTicket.EN_COURS]: 'status-in-progress',
      [StatutTicket.RESOLU]: 'status-resolved',
      [StatutTicket.FERME]: 'status-closed'
    };
    return statusMap[statut] || '';
  }

  getPriorityClass(priorite: PrioriteTicket): string {
    const priorityMap: Record<PrioriteTicket, string> = {
      [PrioriteTicket.BASSE]: 'priority-low',
      [PrioriteTicket.MOYENNE]: 'priority-medium',
      [PrioriteTicket.HAUTE]: 'priority-high',
      [PrioriteTicket.CRITIQUE]: 'priority-critical'
    };
    return priorityMap[priorite] || '';
  }

  getStatusLabel(statut: StatutTicket): string {
    const labels: Record<StatutTicket, string> = {
      [StatutTicket.OUVERT]: 'Ouvert',
      [StatutTicket.EN_COURS]: 'En cours',
      [StatutTicket.RESOLU]: 'Résolu',
      [StatutTicket.FERME]: 'Fermé'
    };
    return labels[statut] || statut;
  }

  getPriorityLabel(priorite: PrioriteTicket): string {
    const labels: Record<PrioriteTicket, string> = {
      [PrioriteTicket.BASSE]: 'Basse',
      [PrioriteTicket.MOYENNE]: 'Moyenne',
      [PrioriteTicket.HAUTE]: 'Haute',
      [PrioriteTicket.CRITIQUE]: 'Critique'
    };
    return labels[priorite] || priorite;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  syncTicket(ticketId: number, event: Event): void {
    event.stopPropagation();
    this.jiraService.syncTicketStatus(ticketId).subscribe({
      next: (updatedTicket) => {
        const tickets = this.tickets();
        const index = tickets.findIndex(t => t.id === ticketId);
        if (index !== -1) {
          tickets[index] = updatedTicket;
          this.tickets.set([...tickets]);
        }
      },
      error: (err) => {
        console.error('Error syncing ticket:', err);
      }
    });
  }
}
