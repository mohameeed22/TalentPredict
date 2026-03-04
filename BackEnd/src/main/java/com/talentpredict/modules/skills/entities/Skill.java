package com.talentpredict.modules.skills.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.account.entities.Account;

import jakarta.persistence.*;
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
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(nullable = false, length = 200)
    private String nom;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
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
    @JsonIgnore
    @ToString.Exclude
    private Account account;

    // enums
    public enum TypeSkill {
        SOFT, // Communication, Leadership, Teamwork, etc.
        TECH // Java, Python, Cloud, etc.
    }
}
