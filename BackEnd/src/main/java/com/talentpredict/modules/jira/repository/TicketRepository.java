package com.talentpredict.modules.jira.repository;

import com.talentpredict.modules.jira.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    
    Optional<Ticket> findByJiraKey(String jiraKey);
    
    List<Ticket> findByFormationId(Long formationId);
    
    List<Ticket> findByStatut(Ticket.StatutTicket statut);
}
