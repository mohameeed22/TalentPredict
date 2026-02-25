package com.talentpredict.modules.evaluation.entities;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.UUID;

import com.talentpredict.modules.account.entities.Profile;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "pcm_results")
public class PCMResult {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    

    // infos
    @Enumerated(EnumType.STRING)
    @Column(name = "type_pcm")
    private TypePCM typePCM;

    @Column(name = "score_travail")
    private Integer scoreTravail;

    @Column(name = "score_secondaire")
    private Integer scoreSecondaire;

    @Column(name = "score_reactif")
    private Integer scoreReactif;

    @Column(name = "score_rebelle")
    private Integer scoreRebelle;

    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation = LocalDateTime.now();


    // relationships
    @ManyToOne
    private Profile profile;


    // audits
    @Column
    private Instant createdAt;

    @Column
    private Instant updatedAt;


    // lifecycle
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
}
