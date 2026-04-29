package com.talentpredict.modules.assessment.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.ai.entities.Prediction;
import com.talentpredict.modules.ai.repositories.PredictionRepository;
import com.talentpredict.modules.assessment.entities.CandidateTestResult;
import com.talentpredict.modules.assessment.entities.FraudFlags;
import com.talentpredict.modules.assessment.entities.TestType;
import com.talentpredict.modules.assessment.repositories.CandidateTestResultRepository;
import com.talentpredict.modules.assessment.services.ReportGeneratorService;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.ProfileRepository;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.shared.security.UserDetailsImpl;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/candidates")
@RequiredArgsConstructor
@Slf4j
public class CandidateAssessmentController {

    private final CandidateTestResultRepository candidateTestResultRepository;
    private final SkillRepository skillRepository;
    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;
    private final ReportGeneratorService reportGeneratorService;
    private final PredictionRepository predictionRepository;
    private final ObjectMapper objectMapper;

    @GetMapping("/{userId}/progress")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<Map<String, Object>>> progress(
            @PathVariable UUID userId,
            @AuthenticationPrincipal UserDetailsImpl principal) {
        assertSelfOrRecruiter(principal.getUser(), userId);
        List<CandidateTestResult> rows = candidateTestResultRepository.findByUser_IdOrderByTakenAtDesc(userId);
        List<Map<String, Object>> list = rows.stream().map(r -> {
            Map<String, Object> m = new HashMap<>();
            m.put("taken_at", r.getTakenAt());
            m.put("overall_score", r.getOverallScore());
            m.put("passed", r.getPassed());
            m.put("test_type", r.getTestType() != null ? r.getTestType().name() : null);
            try {
                m.put("skill_scores", objectMapper.readTree(
                        r.getSkillScoresJson() != null ? r.getSkillScoresJson() : "{}"));
            } catch (java.io.IOException | RuntimeException e) {
                m.put("skill_scores", objectMapper.createObjectNode());
            }
            return m;
        }).toList();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/{userId}/generate-report")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<byte[]> report(
            @PathVariable UUID userId,
            @AuthenticationPrincipal UserDetailsImpl principal) throws Exception {
        assertSelfOrRecruiter(principal.getUser(), userId);
        User u = userRepository.findById(userId).orElseThrow();
        Profile p = profileRepository.findByUser_Id(userId).orElse(null);
        List<Skill> skills = readSkillsSafely(userId);
        List<CandidateTestResult> hist = readHistorySafely(userId);
        Prediction latestPrediction = readLatestPredictionSafely(u);
        byte[] pdf = reportGeneratorService.buildPdfReport(u, p, skills, hist, latestPrediction);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=report.pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }

    private List<Skill> readSkillsSafely(UUID userId) {
        try {
            return skillRepository.findByUserId(userId);
        } catch (RuntimeException ex) {
            log.warn("Unable to fetch skills for report generation. userId={}", userId, ex);
            return List.of();
        }
    }

    private List<CandidateTestResult> readHistorySafely(UUID userId) {
        try {
            return candidateTestResultRepository.findByUser_IdOrderByTakenAtDesc(userId);
        } catch (RuntimeException ex) {
            log.warn("Unable to fetch test history for report generation. userId={}", userId, ex);
            return List.of();
        }
    }

    private Prediction readLatestPredictionSafely(User user) {
        try {
            return predictionRepository.findTopByUserOrderByDatePredictionDesc(user).orElse(null);
        } catch (RuntimeException ex) {
            log.warn("Unable to fetch latest prediction for report generation. userId={}", user.getId(), ex);
            return null;
        }
    }

    private void assertSelfOrRecruiter(User auth, UUID userId) {
        if (auth.getRole() == User.Role.RECRUITER || auth.getRole() == User.Role.ADMIN) {
            return;
        }
        if (!auth.getId().equals(userId)) {
            throw new org.springframework.security.access.AccessDeniedException("Forbidden");
        }
    }

    // ── Voice Interview Results ────────────────────────────────────────────────

    @Data
    public static class InterviewResultRequest {
        private Double overallScore;
        private String recommendation;
        private String role;
        private String level;
        private Object avgScores;
        private Object summaryData; // full summary JSON object
    }

    @PostMapping("/{userId}/interview-results")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Map<String, Object>> saveInterviewResult(
            @PathVariable UUID userId,
            @RequestBody InterviewResultRequest body,
            @AuthenticationPrincipal UserDetailsImpl principal) {

        assertSelfOrRecruiter(principal.getUser(), userId);
        User user = userRepository.findById(userId).orElseThrow();

        String skillScoresJson = "{}";
        FraudFlags fraudFlags = new FraudFlags();
        String summaryJson = "{}";

        try {
            if (body.getAvgScores() != null) {
                skillScoresJson = objectMapper.writeValueAsString(body.getAvgScores());
            }
            if (body.getSummaryData() != null) {
                summaryJson = objectMapper.writeValueAsString(body.getSummaryData());
            }
        } catch (Exception e) {
            log.warn("Failed to serialize interview result data: {}", e.getMessage());
        }

        int score = body.getOverallScore() != null ? (int) Math.round(body.getOverallScore()) : 0;
        boolean passed = score >= 60;

        // Store the role+level in skillScoresJson as extra context alongside avg_scores
        Map<String, Object> enrichedScores = new java.util.LinkedHashMap<>();
        try {
            if (body.getAvgScores() != null) {
                @SuppressWarnings("unchecked")
                Map<String, Object> parsed = objectMapper.convertValue(body.getAvgScores(), Map.class);
                enrichedScores.putAll(parsed);
            }
        } catch (Exception ignored) {}
        enrichedScores.put("_role", body.getRole());
        enrichedScores.put("_level", body.getLevel());
        enrichedScores.put("_recommendation", body.getRecommendation());
        enrichedScores.put("_summary", summaryJson);

        try {
            skillScoresJson = objectMapper.writeValueAsString(enrichedScores);
        } catch (Exception ignored) {}

        CandidateTestResult result = CandidateTestResult.builder()
                .user(user)
                .overallScore(score)
                .skillScoresJson(skillScoresJson)
                .fraudFlags(fraudFlags)
                .passed(passed)
                .testType(TestType.VOICE_INTERVIEW)
                .build();

        candidateTestResultRepository.save(result);

        Map<String, Object> response = new HashMap<>();
        response.put("saved", true);
        response.put("score", score);
        response.put("recommendation", body.getRecommendation());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{userId}/interview-results")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<Map<String, Object>>> listInterviewResults(
            @PathVariable UUID userId,
            @AuthenticationPrincipal UserDetailsImpl principal) {

        assertSelfOrRecruiter(principal.getUser(), userId);
        List<CandidateTestResult> rows = candidateTestResultRepository
                .findByUser_IdOrderByTakenAtDesc(userId)
                .stream()
                .filter(r -> r.getTestType() == TestType.VOICE_INTERVIEW)
                .toList();

        List<Map<String, Object>> list = rows.stream().map(r -> {
            Map<String, Object> m = new HashMap<>();
            m.put("id", r.getId());
            m.put("taken_at", r.getTakenAt());
            m.put("overall_score", r.getOverallScore());
            m.put("passed", r.getPassed());
            try {
                m.put("details", objectMapper.readTree(
                        r.getSkillScoresJson() != null ? r.getSkillScoresJson() : "{}"));
            } catch (Exception e) {
                m.put("details", objectMapper.createObjectNode());
            }
            return m;
        }).toList();

        return ResponseEntity.ok(list);
    }
}
