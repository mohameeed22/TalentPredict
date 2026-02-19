package com.talentpredict.modules.evaluation.model;

import java.time.LocalDateTime;

import com.talentpredict.modules.auth.model.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "competence_utilisateur", uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "competence_id"}))
public class CompetenceUtilisateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "fk_competence_utilisateur_user"))
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "competence_id", foreignKey = @ForeignKey(name = "fk_competence_utilisateur_competence"))
    private Competence competence;
    
    @Column(name = "score")
    private Double score = 0.0;
    
    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public CompetenceUtilisateur() {
        // JPA requirement
    }
    
    public CompetenceUtilisateur(User user, Competence competence, Double score) {
        this.user = user;
        this.competence = competence;
        this.score = score;
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
    
    public User getUser() {
        return user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }
    
    public Competence getCompetence() {
        return competence;
    }
    
    public void setCompetence(Competence competence) {
        this.competence = competence;
    }
    
    public Double getScore() {
        return score;
    }
    
    public void setScore(Double score) {
        this.score = score;
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
