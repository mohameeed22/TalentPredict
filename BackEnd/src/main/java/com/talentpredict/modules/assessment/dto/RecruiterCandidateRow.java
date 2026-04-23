package com.talentpredict.modules.assessment.dto;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public record RecruiterCandidateRow(
        UUID userId,
        String email,
        String firstName,
        String lastName,
        Integer realScore,
        String fraudRisk,
        String publicSlug,
        String githubUsername,
        UUID latestFraudCaseId,
        Integer fraudScore,
        Double fraudScoreConfidence,
        String fraudRecommendation,
        String fraudExplanation,
        Instant fraudCheckedAt,
        String fraudReviewStatus,
        String fraudSource,
        List<Map<String, Object>> topFraudFlags) {
}
