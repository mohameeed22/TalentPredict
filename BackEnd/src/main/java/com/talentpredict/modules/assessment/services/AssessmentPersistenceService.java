package com.talentpredict.modules.assessment.services;

import java.time.Instant;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.talentpredict.modules.assessment.entities.CandidateBadge;
import com.talentpredict.modules.assessment.entities.CandidateTestResult;
import com.talentpredict.modules.assessment.entities.FraudCase;
import com.talentpredict.modules.assessment.entities.TestType;
import com.talentpredict.modules.assessment.repositories.CandidateBadgeRepository;
import com.talentpredict.modules.assessment.repositories.CandidateTestResultRepository;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.ProfileRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@SuppressWarnings("null")
public class AssessmentPersistenceService {

    private final CandidateTestResultRepository candidateTestResultRepository;
    private final CandidateBadgeRepository candidateBadgeRepository;
    private final ProfileRepository profileRepository;
    private final ObjectMapper objectMapper;
    private final FraudCaseService fraudCaseService;

    @Transactional
    public void persistMcqEvaluation(User user, JsonNode result) {
        CandidateTestResult row = CandidateTestResult.builder()
                .user(user)
                .overallScore(result.path("real_score").asInt())
                .skillScoresJson(result.path("skill_scores").toString())
                .fraudFlagsJson(extractFraudJson(result))
                .passed(result.path("passed").asBoolean(false))
                .testType(TestType.MCQ)
                .build();
        candidateTestResultRepository.save(row);

        Profile profile = profileRepository.findByUser_Id(user.getId()).orElse(null);
        if (profile != null) {
            profile.setRealScore(result.path("real_score").asInt());
            profile.setSkillRealScoresJson(result.path("skill_scores").toString());
            profile.setTestPassed(result.path("passed").asBoolean(false));
            profile.setTestTakenAt(Instant.now());
            if (result.has("_fraud_verdict")) {
                profile.setFraudRisk(result.path("_fraud_verdict").path("fraud_risk").asText("LOW").toUpperCase());
            }
            if (profile.getPublicSlug() == null || profile.getPublicSlug().isBlank()) {
                profile.setPublicSlug("p-" + UUID.randomUUID().toString().substring(0, 8));
            }
            profileRepository.save(profile);
        }

        JsonNode scores = result.path("skill_scores");
        if (scores.isObject()) {
            scores.fields().forEachRemaining(entry -> {
                String skill = entry.getKey();
                int sc = entry.getValue().asInt(0);
                if (sc >= 70) {
                    upsertBadge(user, skill, sc);
                }
            });
        }

        if (result.has("_fraud_verdict") && result.get("_fraud_verdict").isObject()) {
            fraudCaseService.recordFraudCase(
                    user,
                    user,
                    FraudCase.FraudSource.MCQ_EVALUATION,
                    result.get("_fraud_verdict"));
        }
    }

    private void upsertBadge(User user, String skill, int score) {
        CandidateBadge b = candidateBadgeRepository
                .findByUser_IdAndSkillIgnoreCase(user.getId(), skill)
                .orElse(CandidateBadge.builder().user(user).skill(skill).build());
        b.setScore(score);
        b.setIssuedAt(Instant.now());
        candidateBadgeRepository.save(b);
    }

    private String extractFraudJson(JsonNode result) {
        if (result.has("_fraud_verdict")) {
            return result.get("_fraud_verdict").toString();
        }
        return "{}";
    }

    public JsonNode stripFraudForCandidate(JsonNode result) {
        if (!(result instanceof ObjectNode obj)) {
            return result;
        }
        obj = obj.deepCopy();
        obj.remove("_fraud_verdict");
        obj.set("fraud_flags", objectMapper.createArrayNode());
        return obj;
    }
}
