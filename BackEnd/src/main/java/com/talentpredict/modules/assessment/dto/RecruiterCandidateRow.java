package com.talentpredict.modules.assessment.dto;

import java.util.UUID;

public record RecruiterCandidateRow(
        UUID userId,
        String email,
        String firstName,
        String lastName,
        Integer realScore,
        String publicSlug,
        String githubUsername) {
}
