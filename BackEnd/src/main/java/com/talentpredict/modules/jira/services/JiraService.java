package com.talentpredict.modules.jira.services;

import com.talentpredict.modules.jira.dto.TicketResponse;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.jira.entities.Ticket;
import com.talentpredict.modules.formation.repositories.FormationRepository;
import com.talentpredict.modules.jira.repositories.TicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * JIRA Module - JIRA Integration Service
 * Core functionality: Manage training tickets, integrate with JIRA API, and track approval workflows
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class JiraService {
    
    private final TicketRepository ticketRepository;
    private final FormationRepository formationRepository;
    
    @Value("${jira.url:https://your-domain.atlassian.net}")
    private String jiraUrl;
    
    @Value("${jira.project.key:TRN}")
    private String jiraProjectKey;
    
    @Value("${jira.api.token:}")
    private String jiraApiToken;
    
    @Value("${jira.enabled:false}")
    private boolean jiraEnabled;
    
    /**
     * Crée automatiquement un ticket Jira pour une formation acceptée
     */
    @Transactional
    public TicketResponse creerTicketFormation(UUID formationId) {
        Formation formation = formationRepository.findById(formationId)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + formationId));
        
        Ticket ticket = new Ticket();
        ticket.setFormation(formation);
        ticket.setTitre("Formation: " + formation.getTitre());
        
        StringBuilder description = new StringBuilder();
        description.append("Demande de formation pour: ")
            .append(formation.getAccount().getFirstName()).append(" ")
            .append(formation.getAccount().getLastName()).append("\n\n");
        description.append("Type: ").append(formation.getType()).append("\n");
        description.append("Durée: ").append(formation.getDuree()).append(" heures\n");
        description.append("Fournisseur: ").append(formation.getFournisseur()).append("\n");
        if (formation.getUrl() != null) {
            description.append("URL: ").append(formation.getUrl()).append("\n");
        }
        description.append("\n").append(formation.getDescription());
        
        ticket.setDescription(description.toString());
        ticket.setStatut(Ticket.StatutTicket.OUVERT);
        ticket.setPriorite(determinerPriorite(formation));
        
        // Si Jira est activé, créer le ticket dans Jira
        if (jiraEnabled && jiraApiToken != null && !jiraApiToken.isEmpty()) {
            try {
                String jiraKey = creerTicketDansJira(ticket);
                ticket.setJiraKey(jiraKey);
                ticket.setUrlJira(jiraUrl + "/browse/" + jiraKey);
            } catch (Exception e) {
                log.error("Erreur lors de la création du ticket Jira: {}", e.getMessage());
                // Continue sans Jira
            }
        } else {
            // Génération d'une clé locale si Jira n'est pas activé
            ticket.setJiraKey(jiraProjectKey + "-" + System.currentTimeMillis());
        }
        
        Ticket saved = ticketRepository.save(ticket);
        return convertToResponse(saved);
    }
    
    public List<TicketResponse> getTicketsByFormation(UUID formationId) {
        return ticketRepository.findByFormationId(formationId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public TicketResponse getTicketById(UUID ticketId) {
        Ticket ticket = ticketRepository.findById(ticketId)
            .orElseThrow(() -> new ResourceNotFoundException("Ticket non trouvé avec l'ID: " + ticketId));
        return convertToResponse(ticket);
    }
    
    @Transactional
    public TicketResponse updateStatutTicket(UUID ticketId, Ticket.StatutTicket statut) {
        Ticket ticket = ticketRepository.findById(ticketId)
            .orElseThrow(() -> new ResourceNotFoundException("Ticket non trouvé avec l'ID: " + ticketId));
        ticket.setStatut(statut);

        // Synchroniser avec Jira si nécessaire
        if (jiraEnabled && ticket.getJiraKey() != null) {
            try {
                synchroniserStatutJira(ticket);
            } catch (Exception e) {
                log.error("Erreur lors de la synchronisation du statut Jira: {}", e.getMessage());
            }
        }
        
        return convertToResponse(ticketRepository.save(ticket));
    }
    
    private String creerTicketDansJira(Ticket ticket) {
        // TODO: Implémenter l'intégration réelle avec l'API Jira
        // Utiliser JiraRestClient pour créer un ticket
        
        /*
        JiraRestClient jiraClient = JiraRestClientFactory.createWithBasicHttpAuthentication(
            URI.create(jiraUrl), jiraUsername, jiraApiToken
        );
        
        IssueRestClient issueClient = jiraClient.getIssueClient();
        IssueInput newIssue = new IssueInputBuilder()
            .setProjectKey(jiraProjectKey)
            .setIssueType(TASK_TYPE)
            .setSummary(ticket.getTitre())
            .setDescription(ticket.getDescription())
            .build();
        
        BasicIssue issue = issueClient.createIssue(newIssue).claim();
        return issue.getKey();
        */
        
        // Version simplifiée pour la démo
        log.info("Création d'un ticket Jira simulé: {}", ticket.getTitre());
        return jiraProjectKey + "-" + (int)(Math.random() * 1000);
    }
    
    private void synchroniserStatutJira(Ticket ticket) {
        // TODO: Implémenter la synchronisation du statut avec Jira
        log.info("Synchronisation du statut Jira pour: {}", ticket.getJiraKey());
    }
    
    private Ticket.PrioriteTicket determinerPriorite(Formation formation) {
        // Logique pour déterminer la priorité basée sur le type de formation
        return switch (formation.getType()) {
            case CERTIFICATION -> Ticket.PrioriteTicket.HAUTE;
            case TECH_SKILL -> Ticket.PrioriteTicket.MOYENNE;
            case SOFT_SKILL, WORKSHOP -> Ticket.PrioriteTicket.BASSE;
        };
    }
    
    private TicketResponse convertToResponse(Ticket ticket) {
        TicketResponse response = new TicketResponse();
        response.setId(ticket.getId());
        response.setJiraKey(ticket.getJiraKey());
        response.setTitre(ticket.getTitre());
        response.setDescription(ticket.getDescription());
        response.setStatut(ticket.getStatut());
        response.setPriorite(ticket.getPriorite());
        response.setCreatedAt(ticket.getCreatedAt());
        response.setUpdatedAt(ticket.getUpdatedAt());
        response.setAssignee(ticket.getAssignee());
        response.setUrlJira(ticket.getUrlJira());
        response.setFormationId(ticket.getFormation().getId());
        return response;
    }
}
