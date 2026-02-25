package com.talentpredict.modules.skills.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import com.talentpredict.modules.account.entities.Account;

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
import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "skills")
public class Skill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;


    // infos
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


    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;


    // enums
    public enum TypeSkill {
        SOFT, // Communication, Leadership, Teamwork, etc.
        TECH  // Java, Python, Cloud, etc.
    }
}
