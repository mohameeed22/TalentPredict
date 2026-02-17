import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { JiraTicket, TicketResponse } from '../models/jira-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class JiraService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/tickets`;

  createTicket(formationId: number): Observable<TicketResponse> {
    return this.http.post<TicketResponse>(
      `${this.baseUrl}/formation/${formationId}`,
      {}
    );
  }

  getFormationTickets(formationId: number): Observable<TicketResponse[]> {
    return this.http.get<TicketResponse[]>(
      `${this.baseUrl}/formation/${formationId}`
    );
  }

  getTicketById(ticketId: number): Observable<TicketResponse> {
    return this.http.get<TicketResponse>(`${this.baseUrl}/${ticketId}`);
  }

  syncTicketStatus(ticketId: number): Observable<TicketResponse> {
    return this.http.put<TicketResponse>(
      `${this.baseUrl}/${ticketId}/sync`,
      {}
    );
  }

  getAllTickets(): Observable<TicketResponse[]> {
    return this.http.get<TicketResponse[]>(this.baseUrl);
  }
}
