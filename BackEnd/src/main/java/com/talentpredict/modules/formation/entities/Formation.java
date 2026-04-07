package com.talentpredict.modules.formation.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.ai.entities.Prediction;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.jira.entities.Ticket;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "formations")
public class Formation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(nullable = false, length = 300)
    private String titre;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column
    private Integer duree; // En heures

    @Column(length = 200)
    private String fournisseur;

    @Column(length = 500)
    private String url;

    @Column(name = "date_proposition")
    @Builder.Default
    private LocalDateTime dateProposition = LocalDateTime.now();

    @Column(name = "date_debut")
    private LocalDateTime dateDebut;

    @Column(name = "date_fin")
    private LocalDateTime dateFin;

    @Column
    @Builder.Default
    private Integer progression = 0; // 0-100

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private TypeFormation type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    @Builder.Default
    private StatutFormation statut = StatutFormation.PROPOSEE;

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prediction_id")
    @JsonIgnore
    @ToString.Exclude
    private Prediction prediction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    @ToString.Exclude
    private User user;

    @OneToMany(mappedBy = "formation", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    @ToString.Exclude
    @Builder.Default
    private List<Ticket> tickets = new ArrayList<>();

    // enums
    public enum TypeFormation {
        SOFT_SKILL,
        TECH_SKILL,
        CERTIFICATION,
        WORKSHOP
    }

    public enum StatutFormation {
        PROPOSEE,
        ACCEPTEE,
        EN_COURS,
        TERMINEE,
        ANNULEE
    }
}
