package com.talentpredict.modules.formation.model;

import java.time.LocalDateTime;

import com.talentpredict.modules.ai.model.Prediction;
import com.talentpredict.modules.auth.model.User;

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

@Entity
@Table(name = "formations")
public class Formation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private User user;
    
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
    
    public Formation() {
        // JPA requirement
    }

    public Formation(Long id, User user, String titre, String description, TypeFormation type,
                     Integer duree, String fournisseur, String url, StatutFormation statut,
                     LocalDateTime dateProposition, LocalDateTime dateDebut, LocalDateTime dateFin,
                     Integer progression, Prediction prediction) {
        this.id = id;
        this.user = user;
        this.titre = titre;
        this.description = description;
        this.type = type;
        this.duree = duree;
        this.fournisseur = fournisseur;
        this.url = url;
        this.statut = statut;
        this.dateProposition = dateProposition;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.progression = progression;
        this.prediction = prediction;
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

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TypeFormation getType() {
        return type;
    }

    public void setType(TypeFormation type) {
        this.type = type;
    }

    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    public String getFournisseur() {
        return fournisseur;
    }

    public void setFournisseur(String fournisseur) {
        this.fournisseur = fournisseur;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public StatutFormation getStatut() {
        return statut;
    }

    public void setStatut(StatutFormation statut) {
        this.statut = statut;
    }

    public LocalDateTime getDateProposition() {
        return dateProposition;
    }

    public void setDateProposition(LocalDateTime dateProposition) {
        this.dateProposition = dateProposition;
    }

    public LocalDateTime getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDateTime dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDateTime getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDateTime dateFin) {
        this.dateFin = dateFin;
    }

    public Integer getProgression() {
        return progression;
    }

    public void setProgression(Integer progression) {
        this.progression = progression;
    }

    public Prediction getPrediction() {
        return prediction;
    }

    public void setPrediction(Prediction prediction) {
        this.prediction = prediction;
    }

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
