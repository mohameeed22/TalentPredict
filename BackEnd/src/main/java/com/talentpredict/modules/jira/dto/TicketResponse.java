package com.talentpredict.modules.jira.dto;

import com.talentpredict.modules.jira.entities.Ticket;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class TicketResponse {
    private UUID id;
    private String jiraKey;
    private String titre;
    private String description;
    private Ticket.StatutTicket statut;
    private Ticket.PrioriteTicket priorite;
    private String assignee;
    private String urlJira;
    private UUID formationId;
    private Instant createdAt;
    private Instant updatedAt;
}
