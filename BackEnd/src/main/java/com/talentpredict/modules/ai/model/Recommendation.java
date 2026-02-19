package com.talentpredict.modules.ai.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.talentpredict.modules.auth.model.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "recommendations")
public class Recommendation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "fk_recommendation_user"))
    private User user;
    
    @Column(name = "titre")
    private String titre;
    
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "score")
    private Double score = 0.0;
    
    @Column(name = "priorite")
    private Integer priorite = 1;
    
    @OneToMany(mappedBy = "recommendation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecommendationItem> items = new ArrayList<>();
    
    @Column(name = "date_generation")
    private LocalDateTime dateGeneration = LocalDateTime.now();
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public Recommendation() {
        // JPA requirement
    }
    
    public Recommendation(User user, String titre, String description, Double score, Integer priorite) {
        this.user = user;
        this.titre = titre;
        this.description = description;
        this.score = score;
        this.priorite = priorite;
        this.dateGeneration = LocalDateTime.now();
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
    
    public Double getScore() {
        return score;
    }
    
    public void setScore(Double score) {
        this.score = score;
    }
    
    public Integer getPriorite() {
        return priorite;
    }
    
    public void setPriorite(Integer priorite) {
        this.priorite = priorite;
    }
    
    public List<RecommendationItem> getItems() {
        return items;
    }
    
    public void setItems(List<RecommendationItem> items) {
        this.items = items;
    }
    
    public LocalDateTime getDateGeneration() {
        return dateGeneration;
    }
    
    public void setDateGeneration(LocalDateTime dateGeneration) {
        this.dateGeneration = dateGeneration;
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
