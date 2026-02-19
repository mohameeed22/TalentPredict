package com.talentpredict.modules.evaluation.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.talentpredict.modules.auth.model.Niveau;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "competences")
public class Competence {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nom;
    
    @Column(nullable = false)
    private String categorie;
    
    @Column(name = "description")
    private String description;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "niveau")
    private Niveau niveau = Niveau.DEBUTANT;
    
    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation;
    
    @OneToMany(mappedBy = "competence", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CompetenceUtilisateur> utilisateurs = new ArrayList<>();
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public Competence() {
        // JPA requirement
    }
    
    public Competence(String nom, String categorie, String description, Niveau niveau) {
        this.nom = nom;
        this.categorie = categorie;
        this.description = description;
        this.niveau = niveau;
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
    
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getCategorie() {
        return categorie;
    }
    
    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Niveau getNiveau() {
        return niveau;
    }
    
    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
    }
    
    public LocalDateTime getDateEvaluation() {
        return dateEvaluation;
    }
    
    public void setDateEvaluation(LocalDateTime dateEvaluation) {
        this.dateEvaluation = dateEvaluation;
    }
    
    public List<CompetenceUtilisateur> getUtilisateurs() {
        return utilisateurs;
    }
    
    public void setUtilisateurs(List<CompetenceUtilisateur> utilisateurs) {
        this.utilisateurs = utilisateurs;
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
