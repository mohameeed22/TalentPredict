package com.talentpredict.core.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "predictions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Prediction {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;
    
    @Column(name = "date_prediction", nullable = false)
    private LocalDateTime datePrediction = LocalDateTime.now();
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String analyse; // Analyse générée par OpenAI
    
    @Column(name = "recommandation_soft", columnDefinition = "TEXT")
    private String recommandationSoft;
    
    @Column(name = "recommandation_tech", columnDefinition = "TEXT")
    private String recommandationTech;
    
    @Column(name = "score_confiance")
    private Double scoreConfiance; // 0-1
    
    @OneToMany(mappedBy = "prediction", cascade = CascadeType.ALL)
    private List<Formation> formationsProposees = new ArrayList<>();
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutPrediction statut = StatutPrediction.EN_ANALYSE;
    
    public enum StatutPrediction {
        EN_ANALYSE,
        COMPLETEE,
        VALIDEE,
        APPLIQUEE
    }
}
