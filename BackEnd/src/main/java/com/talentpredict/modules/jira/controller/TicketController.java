package com.talentpredict.modules.jira.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.jira.dto.TicketResponse;
import com.talentpredict.modules.jira.model.Ticket;
import com.talentpredict.modules.jira.service.JiraService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
public class TicketController {
    
    private final JiraService jiraService;
    
    @PostMapping("/formation/{formationId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<TicketResponse> creerTicket(@PathVariable Long formationId) {
        TicketResponse response = jiraService.creerTicketFormation(formationId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/formation/{formationId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<TicketResponse>> getTicketsByFormation(@PathVariable Long formationId) {
        List<TicketResponse> tickets = jiraService.getTicketsByFormation(formationId);
        return ResponseEntity.ok(tickets);
    }
    
    @GetMapping("/{ticketId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<TicketResponse> getTicketById(@PathVariable Long ticketId) {
        TicketResponse ticket = jiraService.getTicketById(ticketId);
        return ResponseEntity.ok(ticket);
    }
    
    @PutMapping("/{ticketId}/statut")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<TicketResponse> updateStatut(
            @PathVariable Long ticketId,
            @RequestParam Ticket.StatutTicket statut) {
        TicketResponse response = jiraService.updateStatutTicket(ticketId, statut);
        return ResponseEntity.ok(response);
    }
}
