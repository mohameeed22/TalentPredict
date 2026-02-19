package com.talentpredict.modules.auth.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.talentpredict.modules.evaluation.model.PCMResult;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "profils")
public class Profil {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @Column(name = "titre_professionnel")
    private String titreProfessionnel;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "url_photo")
    private String urlPhoto;
    
    @Column(name = "experience_ans")
    private Integer experienceAns;
    
    @Column(name = "niveau_etudes")
    private String niveauEtudes;
    
    @Column(name = "lien_linkedin")
    private String lienLinkedin;
    
    @OneToMany(mappedBy = "profil", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PCMResult> pcmResults = new ArrayList<>();
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();
    
    public Profil() {
        // JPA requirement
    }
    
    public Profil(User user, String titreProfessionnel, String description, String urlPhoto,
                  Integer experienceAns, String niveauEtudes, String lienLinkedin) {
        this.user = user;
        this.titreProfessionnel = titreProfessionnel;
        this.description = description;
        this.urlPhoto = urlPhoto;
        this.experienceAns = experienceAns;
        this.niveauEtudes = niveauEtudes;
        this.lienLinkedin = lienLinkedin;
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
    
    public String getTitreProfessionnel() {
        return titreProfessionnel;
    }
    
    public void setTitreProfessionnel(String titreProfessionnel) {
        this.titreProfessionnel = titreProfessionnel;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getUrlPhoto() {
        return urlPhoto;
    }
    
    public void setUrlPhoto(String urlPhoto) {
        this.urlPhoto = urlPhoto;
    }
    
    public Integer getExperienceAns() {
        return experienceAns;
    }
    
    public void setExperienceAns(Integer experienceAns) {
        this.experienceAns = experienceAns;
    }
    
    public String getNiveauEtudes() {
        return niveauEtudes;
    }
    
    public void setNiveauEtudes(String niveauEtudes) {
        this.niveauEtudes = niveauEtudes;
    }
    
    public String getLienLinkedin() {
        return lienLinkedin;
    }
    
    public void setLienLinkedin(String lienLinkedin) {
        this.lienLinkedin = lienLinkedin;
    }
    
    public List<PCMResult> getPcmResults() {
        return pcmResults;
    }
    
    public void setPcmResults(List<PCMResult> pcmResults) {
        this.pcmResults = pcmResults;
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
