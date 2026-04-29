package com.talentpredict.modules.assessment.dto;

import java.time.Instant;
import java.util.UUID;
import com.talentpredict.modules.assessment.entities.FraudFlags;

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
        FraudFlags fraudFlags) {
}
