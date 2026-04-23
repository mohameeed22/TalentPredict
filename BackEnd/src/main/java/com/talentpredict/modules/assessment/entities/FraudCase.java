package com.talentpredict.modules.assessment.entities;

import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.user.entities.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "fraud_cases", indexes = {
        @Index(name = "idx_fraud_cases_candidate_created", columnList = "candidate_id,created_at"),
        @Index(name = "idx_fraud_cases_risk_created", columnList = "risk_level,created_at"),
        @Index(name = "idx_fraud_cases_review_status", columnList = "review_status"),
        @Index(name = "idx_fraud_cases_source_created", columnList = "source,created_at")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FraudCase {

    public enum FraudSource {
        MCQ_EVALUATION,
        RECRUITER_CHECK,
        ADMIN_CHECK,
        CANDIDATE_CHECK,
        SYSTEM_REEVALUATION
    }

    public enum ReviewStatus {
        OPEN,
        CONFIRMED_FRAUD,
        FALSE_POSITIVE,
        MONITORING
    }

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "candidate_id", nullable = false)
    @JsonIgnore
    @ToString.Exclude
    private User candidate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "triggered_by_user_id")
    @JsonIgnore
    @ToString.Exclude
    private User triggeredByUser;

    @Enumerated(EnumType.STRING)
    @Column(name = "source", nullable = false, length = 30)
    private FraudSource source;

    @Column(name = "risk_level", nullable = false, length = 20)
    private String riskLevel;

    @Column(name = "fraud_score")
    private Integer fraudScore;

    @Column(name = "score_confidence")
    private Double scoreConfidence;

    @Column(name = "recommendation", length = 40)
    private String recommendation;

    @Column(name = "explanation", columnDefinition = "TEXT")
    private String explanation;

    @Column(name = "flags_json", columnDefinition = "TEXT")
    private String flagsJson;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    @Column(name = "review_status", nullable = false, length = 30)
    private ReviewStatus reviewStatus = ReviewStatus.OPEN;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reviewed_by_user_id")
    @JsonIgnore
    @ToString.Exclude
    private User reviewedByUser;

    @Column(name = "reviewed_at")
    private Instant reviewedAt;

    @Column(name = "review_note", columnDefinition = "TEXT")
    private String reviewNote;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}