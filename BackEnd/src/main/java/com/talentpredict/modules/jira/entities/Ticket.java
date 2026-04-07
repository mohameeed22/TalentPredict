package com.talentpredict.modules.jira.entities;

import java.time.Instant;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.formation.entities.Formation;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

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
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(name = "jira_key", unique = true, length = 50)
    private String jiraKey; // Ex: TRN-123

    @Column(nullable = false, length = 300)
    private String titre;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    @Builder.Default
    private StatutTicket statut = StatutTicket.OUVERT;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    @Builder.Default
    private PrioriteTicket priorite = PrioriteTicket.MOYENNE;

    @Column(name = "assignee", length = 200)
    private String assignee;

    @Column(name = "url_jira", length = 500)
    private String urlJira;

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "formation_id", nullable = false)
    @JsonIgnore
    @ToString.Exclude
    private Formation formation;

    // audits
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;

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
