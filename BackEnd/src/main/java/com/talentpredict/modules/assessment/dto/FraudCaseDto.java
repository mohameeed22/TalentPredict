package com.talentpredict.modules.assessment.dto;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

public class FraudCaseDto {

    @Data
    public static class ReviewRequest {
        @NotBlank(message = "decision is required")
        private String decision;

        private String note;
    }

    @Data
    @AllArgsConstructor
    public static class ReviewResponse {
        private UUID caseId;
        private String reviewStatus;
        private Instant reviewedAt;
        private UUID reviewedByUserId;
        private String reviewNote;
    }

    @Data
    @AllArgsConstructor
    public static class HistoryResponse {
        private UUID caseId;
        private String source;
        private String riskLevel;
        private Integer fraudScore;
        private Double scoreConfidence;
        private String recommendation;
        private String explanation;
        private String reviewStatus;
        private String reviewNote;
        private Instant createdAt;
        private Instant reviewedAt;
        private UUID reviewedByUserId;
        private List<Map<String, Object>> topFlags;
    }

    @Data
    @AllArgsConstructor
    public static class KpiResponse {
        private double precisionAtTopK;
        private double falsePositiveRate;
        private double avgReviewTurnaroundHours;
        private long labeledCases;
        private long totalCasesLastWindow;
        private Map<String, Double> driftBySource;
        private Map<String, Long> signalContributionDistribution;
    }

    @Data
    @AllArgsConstructor
    public static class CalibrationResponse {
        private double suggestedMediumThreshold;
        private double suggestedHighThreshold;
        private long labeledCases;
        private long confirmedFraudCases;
        private long falsePositiveCases;
        private double falsePositiveRate;
    }
}