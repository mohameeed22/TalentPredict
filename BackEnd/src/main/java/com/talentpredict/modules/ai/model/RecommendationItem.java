package com.talentpredict.modules.ai.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "recommendation_items")
public class RecommendationItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "recommendation_id", foreignKey = @ForeignKey(name = "fk_recommendation_item_recommendation"))
    private Recommendation recommendation;
    
    @Column(name = "contenu", columnDefinition = "TEXT")
    private String contenu;
    
    @Column(name = "texte")
    private String texte;
    
    @Column(name = "priorite")
    private Integer priorite = 1;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public RecommendationItem() {
        // JPA requirement
    }
    
    public RecommendationItem(Recommendation recommendation, String contenu, String texte, Integer priorite) {
        this.recommendation = recommendation;
        this.contenu = contenu;
        this.texte = texte;
        this.priorite = priorite;
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
    
    public Recommendation getRecommendation() {
        return recommendation;
    }
    
    public void setRecommendation(Recommendation recommendation) {
        this.recommendation = recommendation;
    }
    
    public String getContenu() {
        return contenu;
    }
    
    public void setContenu(String contenu) {
        this.contenu = contenu;
    }
    
    public String getTexte() {
        return texte;
    }
    
    public void setTexte(String texte) {
        this.texte = texte;
    }
    
    public Integer getPriorite() {
        return priorite;
    }
    
    public void setPriorite(Integer priorite) {
        this.priorite = priorite;
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
