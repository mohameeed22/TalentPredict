package com.talentpredict.modules.account.entities;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.talentpredict.modules.evaluation.entities.PCMResult;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "profiles")
public class Profile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;


    // infos
    @Column
    private String titreProfessionnel;
    
    @Column
    private String description;
    
    @Column
    private String urlPhoto;
    
    @Column
    private Integer experienceAns;
    
    @Column
    private String niveauEtudes;
    
    @Column
    private String lienLinkedin;


    // relationships
    @OneToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @OneToMany(mappedBy = "profile", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PCMResult> pcmResults = new ArrayList<>();


    // audits
    @Column
    private Instant createdAt;

    @Column
    private Instant updatedAt;


    // Lifecycle
    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }

    @PrePersist
    protected void onCreate() {
        Instant now = Instant.now();
        createdAt = now;
        updatedAt = now;
    }
}
