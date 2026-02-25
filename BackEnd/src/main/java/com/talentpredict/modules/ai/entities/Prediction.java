package com.talentpredict.modules.ai.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.formation.entities.Formation;

import jakarta.persistence.CascadeType;
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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "predictions")
public class Prediction {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;


    // infos
    @Column(columnDefinition = "TEXT", nullable = false, name="analyse_text")
    private String analyse; // Analyse générée par OpenAI

    @Column(name = "recommandation_soft", columnDefinition = "TEXT")
    private String recommandationSoft;

    @Column(name = "recommandation_tech", columnDefinition = "TEXT")
    private String recommandationTech;

    @Column(name = "score_confiance")
    private Double scoreConfiance; // 0-1

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutPrediction statut = StatutPrediction.EN_ANALYSE;

    @Column(name = "date_prediction", nullable = false)
    private LocalDateTime datePrediction = LocalDateTime.now();


    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @OneToMany(mappedBy = "prediction", cascade = CascadeType.ALL)
    private List<Formation> formationsProposees = new ArrayList<>();


    // enums
    public enum StatutPrediction {
        EN_ANALYSE,
        COMPLETEE,
        VALIDEE,
        APPLIQUEE
    }
}
