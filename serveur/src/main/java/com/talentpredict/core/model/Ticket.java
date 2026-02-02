package com.talentpredict.core.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tickets")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "jira_key", unique = true)
    private String jiraKey; // Ex: TRN-123
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "formation_id", nullable = false)
    private Formation formation;
    
    @Column(nullable = false)
    private String titre;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutTicket statut = StatutTicket.OUVERT;
    
    @Enumerated(EnumType.STRING)
    private PrioriteTicket priorite = PrioriteTicket.MOYENNE;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_mise_a_jour")
    private LocalDateTime dateMiseAJour = LocalDateTime.now();
    
    @Column(name = "assignee")
    private String assignee;
    
    @Column(name = "url_jira")
    private String urlJira;
    
    public enum StatutTicket {
        OUVERT,
        EN_COURS,
        EN_ATTENTE,
        RESOLU,
        FERME
    }
    
    public enum PrioriteTicket {
        BASSE,
        MOYENNE,
        HAUTE,
        CRITIQUE
    }
}
