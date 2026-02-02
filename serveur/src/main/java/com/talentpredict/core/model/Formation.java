package com.talentpredict.core.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "formations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Formation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;
    
    @Column(nullable = false)
    private String titre;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeFormation type;
    
    @Column
    private Integer duree; // En heures
    
    @Column
    private String fournisseur;
    
    @Column
    private String url;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutFormation statut = StatutFormation.PROPOSEE;
    
    @Column(name = "date_proposition")
    private LocalDateTime dateProposition = LocalDateTime.now();
    
    @Column(name = "date_debut")
    private LocalDateTime dateDebut;
    
    @Column(name = "date_fin")
    private LocalDateTime dateFin;
    
    @Column
    private Integer progression = 0; // 0-100
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prediction_id")
    private Prediction prediction;
    
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
