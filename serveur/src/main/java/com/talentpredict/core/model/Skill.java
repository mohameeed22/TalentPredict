package com.talentpredict.core.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "skills")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Skill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;
    
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
    
    public enum TypeSkill {
        SOFT, // Communication, Leadership, Teamwork, etc.
        TECH  // Java, Python, Cloud, etc.
    }
}
