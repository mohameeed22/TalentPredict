package com.talentpredict.modules.evaluation.model;

import java.time.LocalDateTime;

import com.talentpredict.modules.auth.model.Profil;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "pcm_results")
public class PCMResult {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "profil_id", foreignKey = @ForeignKey(name = "fk_pcm_result_profil"))
    private Profil profil;
    
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
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public PCMResult() {
        // JPA requirement
    }
    
    public PCMResult(Profil profil, TypePCM typePCM, Integer scoreTravail, Integer scoreSecondaire,
                     Integer scoreReactif, Integer scoreRebelle) {
        this.profil = profil;
        this.typePCM = typePCM;
        this.scoreTravail = scoreTravail;
        this.scoreSecondaire = scoreSecondaire;
        this.scoreReactif = scoreReactif;
        this.scoreRebelle = scoreRebelle;
        this.dateEvaluation = LocalDateTime.now();
        this.dateCreation = LocalDateTime.now();
        this.dateModification = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Profil getProfil() {
        return profil;
    }
    
    public void setProfil(Profil profil) {
        this.profil = profil;
    }
    
    public TypePCM getTypePCM() {
        return typePCM;
    }
    
    public void setTypePCM(TypePCM typePCM) {
        this.typePCM = typePCM;
    }
    
    public Integer getScoreTravail() {
        return scoreTravail;
    }
    
    public void setScoreTravail(Integer scoreTravail) {
        this.scoreTravail = scoreTravail;
    }
    
    public Integer getScoreSecondaire() {
        return scoreSecondaire;
    }
    
    public void setScoreSecondaire(Integer scoreSecondaire) {
        this.scoreSecondaire = scoreSecondaire;
    }
    
    public Integer getScoreReactif() {
        return scoreReactif;
    }
    
    public void setScoreReactif(Integer scoreReactif) {
        this.scoreReactif = scoreReactif;
    }
    
    public Integer getScoreRebelle() {
        return scoreRebelle;
    }
    
    public void setScoreRebelle(Integer scoreRebelle) {
        this.scoreRebelle = scoreRebelle;
    }
    
    public LocalDateTime getDateEvaluation() {
        return dateEvaluation;
    }
    
    public void setDateEvaluation(LocalDateTime dateEvaluation) {
        this.dateEvaluation = dateEvaluation;
    }
    
    public LocalDateTime getDateCreation() {
        return dateCreation;
    }
    
    public void setDateCreation(LocalDateTime dateCreation) {
        this.dateCreation = dateCreation;
    }
    
    public LocalDateTime getDateModification() {
        return dateModification;
    }
    
    public void setDateModification(LocalDateTime dateModification) {
        this.dateModification = dateModification;
    }
}
