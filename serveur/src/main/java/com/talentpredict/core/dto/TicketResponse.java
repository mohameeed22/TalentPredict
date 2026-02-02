package com.talentpredict.core.dto;

import com.talentpredict.core.model.Ticket;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TicketResponse {
    private Long id;
    private String jiraKey;
    private String titre;
    private String description;
    private Ticket.StatutTicket statut;
    private Ticket.PrioriteTicket priorite;
    private LocalDateTime dateCreation;
    private LocalDateTime dateMiseAJour;
    private String assignee;
    private String urlJira;
    private Long formationId;
}
