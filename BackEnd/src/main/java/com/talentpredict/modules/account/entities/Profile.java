package com.talentpredict.modules.account.entities;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.evaluation.entities.PCMResult;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

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
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // Professional info
    @Column(name = "titre_professionnel", length = 200)
    private String titreProfessionnel;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "url_photo", length = 500)
    private String urlPhoto;

    @Column(name = "experience_ans")
    private Integer experienceAns;

    @Column(name = "niveau_etudes", length = 100)
    private String niveauEtudes;

    @Column(name = "lien_linkedin", length = 500)
    private String lienLinkedin;

    /** TASK 3: Added GitHub profile URL */
    @Column(name = "github_url", length = 500)
    private String githubUrl;

    /** TASK 3: Added CV file/URL for download link */
    @Column(name = "cv_url", length = 500)
    private String cvUrl;

    // Relationships
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", unique = true, nullable = false)
    @JsonIgnore
    @ToString.Exclude
    private Account account;

    @OneToMany(mappedBy = "profile", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    @ToString.Exclude
    private List<PCMResult> pcmResults = new ArrayList<>();

    // Audits
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}
