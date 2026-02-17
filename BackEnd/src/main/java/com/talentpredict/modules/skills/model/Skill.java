package com.talentpredict.modules.skills.model;

import com.talentpredict.modules.auth.model.User;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "skills")
public class Skill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private User user;
    
    @Column(nullable = false)
    private String nom;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeSkill type;
    
    @Column(nullable = false)
    private Integer niveau; // 1-5
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation = LocalDateTime.now();
    
    @Column(name = "validee")
    private Boolean validee = false;
    
    public Skill() {
        // JPA requirement
    }

    public Skill(Long id, User user, String nom, TypeSkill type, Integer niveau,
                 String description, LocalDateTime dateEvaluation, Boolean validee) {
        this.id = id;
        this.user = user;
        this.nom = nom;
        this.type = type;
        this.niveau = niveau;
        this.description = description;
        this.dateEvaluation = dateEvaluation;
        this.validee = validee;
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

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public TypeSkill getType() {
        return type;
    }

    public void setType(TypeSkill type) {
        this.type = type;
    }

    public Integer getNiveau() {
        return niveau;
    }

    public void setNiveau(Integer niveau) {
        this.niveau = niveau;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDateEvaluation() {
        return dateEvaluation;
    }

    public void setDateEvaluation(LocalDateTime dateEvaluation) {
        this.dateEvaluation = dateEvaluation;
    }

    public Boolean getValidee() {
        return validee;
    }

    public void setValidee(Boolean validee) {
        this.validee = validee;
    }

    public enum TypeSkill {
        SOFT, // Communication, Leadership, Teamwork, etc.
        TECH  // Java, Python, Cloud, etc.
    }
}
