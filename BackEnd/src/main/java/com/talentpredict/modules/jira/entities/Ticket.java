package com.talentpredict.modules.jira.entities;

import java.time.Instant;
import java.util.UUID;

import com.talentpredict.modules.formation.entities.Formation;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "tickets")
public class Ticket {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;


    // infos
    @Column(name = "jira_key", unique = true)
    private String jiraKey; // Ex: TRN-123

    @Column(nullable = false)
    private String titre;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutTicket statut = StatutTicket.OUVERT;
    
    @Enumerated(EnumType.STRING)
    private PrioriteTicket priorite = PrioriteTicket.MOYENNE;

    @Column(name = "assignee")
    private String assignee;
    
    @Column(name = "url_jira")
    private String urlJira;


    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "formation_id", nullable = false)
    private Formation formation;


    // audits
    @Column
    private Instant createdAt;

    @Column
    private Instant updatedAt;


    // Lifecycle
    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }

    @PrePersist
    protected void onCreate() {
        Instant now = Instant.now();
        createdAt = now;
        updatedAt = now;
    }


    // enums
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
