package com.talentpredict.modules.formation.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.talentpredict.modules.auth.model.StatutInscription;
import com.talentpredict.modules.auth.model.User;

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
@Table(name = "inscriptions")
public class Inscription {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "fk_inscription_user"))
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "formation_id", foreignKey = @ForeignKey(name = "fk_inscription_formation"))
    private Formation formation;
    
    @Column(name = "date_inscription")
    private LocalDate dateInscription = LocalDate.now();
    
    @Enumerated(EnumType.STRING)
    @Column(name = "statut")
    private StatutInscription statut = StatutInscription.EN_COURS;
    
    @Column(name = "progression")
    private Integer progression = 0;
    
    @Column(name = "date_fin")
    private LocalDate dateFin;
    
    @Column(name = "note_finale")
    private Double noteFinale;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public Inscription() {
        // JPA requirement
    }
    
    public Inscription(User user, Formation formation) {
        this.user = user;
        this.formation = formation;
        this.dateInscription = LocalDate.now();
        this.statut = StatutInscription.EN_COURS;
        this.progression = 0;
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
    
    public Formation getFormation() {
        return formation;
    }
    
    public void setFormation(Formation formation) {
        this.formation = formation;
    }
    
    public LocalDate getDateInscription() {
        return dateInscription;
    }
    
    public void setDateInscription(LocalDate dateInscription) {
        this.dateInscription = dateInscription;
    }
    
    public StatutInscription getStatut() {
        return statut;
    }
    
    public void setStatut(StatutInscription statut) {
        this.statut = statut;
    }
    
    public Integer getProgression() {
        return progression;
    }
    
    public void setProgression(Integer progression) {
        this.progression = progression;
    }
    
    public LocalDate getDateFin() {
        return dateFin;
    }
    
    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }
    
    public Double getNoteFinale() {
        return noteFinale;
    }
    
    public void setNoteFinale(Double noteFinale) {
        this.noteFinale = noteFinale;
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
