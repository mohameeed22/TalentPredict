package com.talentpredict.modules.user.entities;

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

    @Column(name = "portfolio_url", length = 500)
    private String portfolioUrl;

    // GitHub profile stats (populated by IA analysis)
    @Column(name = "github_repos")
    private Integer githubRepos;

    @Column(name = "github_followers")
    private Integer githubFollowers;

    @Column(name = "github_following")
    private Integer githubFollowing;

    @Column(name = "github_bio", columnDefinition = "TEXT")
    private String githubBio;

    @Column(name = "github_company", length = 200)
    private String githubCompany;

    @Column(name = "github_location", length = 200)
    private String githubLocation;

    @Column(name = "github_avatar_url", length = 500)
    private String githubAvatarUrl;

    @Column(name = "github_name", length = 200)
    private String githubName;

    @Column(name = "ai_summary", columnDefinition = "TEXT")
    private String aiSummary;

    // Relationships
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    @JsonIgnore
    @ToString.Exclude
    private User user;

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
