package com.talentpredict.modules.ai.model;

import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.formation.model.Formation;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "predictions")
public class Prediction {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private User user;
    
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
    
    public Prediction() {
        // JPA requirement
    }

    public Prediction(Long id, User user, LocalDateTime datePrediction, String analyse,
                      String recommandationSoft, String recommandationTech, Double scoreConfiance,
                      List<Formation> formationsProposees, StatutPrediction statut) {
        this.id = id;
        this.user = user;
        this.datePrediction = datePrediction;
        this.analyse = analyse;
        this.recommandationSoft = recommandationSoft;
        this.recommandationTech = recommandationTech;
        this.scoreConfiance = scoreConfiance;
        if (formationsProposees != null) {
            this.formationsProposees = formationsProposees;
        }
        this.statut = statut;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getDatePrediction() {
        return datePrediction;
    }

    public void setDatePrediction(LocalDateTime datePrediction) {
        this.datePrediction = datePrediction;
    }

    public String getAnalyse() {
        return analyse;
    }

    public void setAnalyse(String analyse) {
        this.analyse = analyse;
    }

    public String getRecommandationSoft() {
        return recommandationSoft;
    }

    public void setRecommandationSoft(String recommandationSoft) {
        this.recommandationSoft = recommandationSoft;
    }

    public String getRecommandationTech() {
        return recommandationTech;
    }

    public void setRecommandationTech(String recommandationTech) {
        this.recommandationTech = recommandationTech;
    }

    public Double getScoreConfiance() {
        return scoreConfiance;
    }

    public void setScoreConfiance(Double scoreConfiance) {
        this.scoreConfiance = scoreConfiance;
    }

    public List<Formation> getFormationsProposees() {
        return formationsProposees;
    }

    public void setFormationsProposees(List<Formation> formationsProposees) {
        this.formationsProposees = formationsProposees;
    }

    public StatutPrediction getStatut() {
        return statut;
    }

    public void setStatut(StatutPrediction statut) {
        this.statut = statut;
    }

    public enum StatutPrediction {
        EN_ANALYSE,
        COMPLETEE,
        VALIDEE,
        APPLIQUEE
    }
}
