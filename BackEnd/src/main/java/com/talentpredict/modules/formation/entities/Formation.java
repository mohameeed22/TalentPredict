package com.talentpredict.modules.formation.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import com.talentpredict.modules.ai.entities.Prediction;
import com.talentpredict.modules.account.entities.Account;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
    private UUID id;

    // infos
    @Column(nullable = false)
    private String titre;
    
    @Column(columnDefinition = "TEXT")
    private String description;

    @Column
    private Integer duree; // En heures
    
    @Column
    private String fournisseur;
    
    @Column
    private String url;
    
    @Column(name = "date_proposition")
    private LocalDateTime dateProposition = LocalDateTime.now();

    @Column(name = "date_debut")
    private LocalDateTime dateDebut;

    @Column(name = "date_fin")
    private LocalDateTime dateFin;

    @Column
    private Integer progression = 0; // 0-100

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeFormation type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutFormation statut = StatutFormation.PROPOSEE;

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prediction_id")
    private Prediction prediction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

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
