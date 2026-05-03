package com.talentpredict.modules.assessment.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.assessment.services.TalentPredictAiProxyService;

import com.talentpredict.modules.assessment.dto.CampaignEmailRequest;
import com.talentpredict.modules.assessment.dto.FraudCaseDto;
import com.talentpredict.modules.assessment.dto.RecruiterCandidateRow;
import com.talentpredict.modules.assessment.entities.FraudFlags;
import com.talentpredict.modules.assessment.entities.FraudCase;
import com.talentpredict.modules.assessment.repositories.FraudCaseRepository;
import com.talentpredict.modules.assessment.services.CampaignEmailService;
import com.talentpredict.modules.assessment.services.FraudCaseService;
import com.talentpredict.modules.auth.services.AuditLogService;
import com.talentpredict.modules.notification.dto.NotificationDto;
import com.talentpredict.modules.notification.services.NotificationCenterService;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.ProfileRepository;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.shared.security.UserDetailsImpl;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/recruiter")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@Slf4j
public class RecruiterController {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final FraudCaseRepository fraudCaseRepository;
    private final FraudCaseService fraudCaseService;
    private final CampaignEmailService campaignEmailService;
    private final AuditLogService auditLogService;
    private final NotificationCenterService notificationCenterService;
    private final TalentPredictAiProxyService aiProxyService;
    private final ObjectMapper objectMapper;

    @GetMapping("/candidates")
    @Transactional(readOnly = true)
    public ResponseEntity<List<RecruiterCandidateRow>> listCandidates() {
        List<User> users = userRepository.findByRole(User.Role.USER);
        List<RecruiterCandidateRow> rows = users.stream().map(u -> {
            Profile p = profileRepository.findByUser_Id(u.getId()).orElse(null);
            return new RecruiterCandidateRow(
                    u.getId(),
                    u.getEmail(),
                    u.getFirstName(),
                    u.getLastName(),
                    p != null ? p.getRealScore() : null,
                    p != null ? p.getFraudRisk() : null,
                    p != null ? p.getPublicSlug() : null,
                    extractGithubUsername(p != null ? p.getGithubUrl() : null),
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null);
        }).collect(Collectors.toList());
        return ResponseEntity.ok(rows);
    }

    @GetMapping("/fraud-alerts")
    @Transactional(readOnly = true)
    public ResponseEntity<List<RecruiterCandidateRow>> fraudAlerts() {
        List<Profile> profiles = profileRepository.findByFraudRiskIn(List.of("HIGH", "MEDIUM", "high", "medium"));

        List<UUID> candidateIds = profiles.stream()
            .map(Profile::getUser)
            .map(User::getId)
            .distinct()
            .toList();

        Map<UUID, FraudCase> latestCaseByCandidate = new HashMap<>();
        if (!candidateIds.isEmpty()) {
            fraudCaseRepository.findRecentByCandidateIds(candidateIds)
                .forEach(fraudCase -> latestCaseByCandidate.putIfAbsent(fraudCase.getCandidate().getId(), fraudCase));
        }

        List<RecruiterCandidateRow> rows = profiles.stream()
                .map(p -> {
                    User u = p.getUser();
                FraudCase fraudCase = latestCaseByCandidate.get(u.getId());
                String risk = fraudCase != null && fraudCase.getRiskLevel() != null
                    ? fraudCase.getRiskLevel()
                    : p.getFraudRisk();
                FraudFlags fraudFlags = fraudCase != null ? fraudCase.getFlags() : null;

                    return new RecruiterCandidateRow(
                            u.getId(),
                            u.getEmail(),
                            u.getFirstName(),
                            u.getLastName(),
                            p.getRealScore(),
                    risk,
                            p.getPublicSlug(),
                    extractGithubUsername(p.getGithubUrl()),
                    fraudCase != null ? fraudCase.getId() : null,
                    fraudCase != null ? fraudCase.getFraudScore() : null,
                    fraudCase != null ? fraudCase.getScoreConfidence() : null,
                    fraudCase != null ? fraudCase.getRecommendation() : null,
                    fraudCase != null ? fraudCase.getExplanation() : null,
                    fraudCase != null ? fraudCase.getCreatedAt() : null,
                    fraudCase != null ? fraudCase.getReviewStatus().name() : null,
                    fraudCase != null ? fraudCase.getSource().name() : null,
                    fraudFlags);
                })
                .collect(Collectors.toList());
        return ResponseEntity.ok(rows);
    }

        @GetMapping("/fraud-cases/{candidateId}")
        @Transactional(readOnly = true)
        public ResponseEntity<List<FraudCaseDto.HistoryResponse>> fraudCaseHistory(
            @PathVariable UUID candidateId,
            @RequestParam(defaultValue = "20") int limit) {
        return ResponseEntity.ok(fraudCaseService.getHistory(candidateId, limit));
        }

        @PatchMapping("/fraud-cases/{caseId}/review")
        @Transactional
        public ResponseEntity<FraudCaseDto.ReviewResponse> reviewFraudCase(
            @PathVariable UUID caseId,
            @Valid @RequestBody FraudCaseDto.ReviewRequest request,
            @AuthenticationPrincipal UserDetailsImpl principal,
            HttpServletRequest servletRequest) {
        User reviewer = principal.getUser();
        FraudCase reviewed = fraudCaseService.reviewCase(caseId, reviewer, request.getDecision(), request.getNote());

        auditLogService.logCustomEvent(
            reviewer,
            "FRAUD_CASE_REVIEWED",
            servletRequest.getRemoteAddr(),
            "caseId=" + reviewed.getId() + ", candidateId=" + reviewed.getCandidate().getId()
                + ", decision=" + reviewed.getReviewStatus().name(),
            servletRequest.getHeader("User-Agent"),
            null);

        notifyCandidateOnReviewUpdate(reviewer, reviewed);

        UUID reviewedByUserId = reviewed.getReviewedByUser() != null ? reviewed.getReviewedByUser().getId() : null;
        return ResponseEntity.ok(new FraudCaseDto.ReviewResponse(
            reviewed.getId(),
            reviewed.getReviewStatus().name(),
            reviewed.getReviewedAt(),
            reviewedByUserId,
            reviewed.getReviewNote()));
        }

        @GetMapping("/fraud-kpis")
        @Transactional(readOnly = true)
        public ResponseEntity<FraudCaseDto.KpiResponse> fraudKpis() {
        return ResponseEntity.ok(fraudCaseService.buildKpis());
        }

        @GetMapping("/fraud-calibration")
        @Transactional(readOnly = true)
        public ResponseEntity<FraudCaseDto.CalibrationResponse> fraudCalibration() {
        return ResponseEntity.ok(fraudCaseService.buildCalibrationSuggestion());
        }

    @PostMapping("/campaign-email")
    public ResponseEntity<Map<String, Object>> sendCampaignEmail(@Valid @RequestBody CampaignEmailRequest request) {
        return ResponseEntity.ok(campaignEmailService.sendCampaignEmail(request));
    }

    @PostMapping("/interview-questions")
    public ResponseEntity<JsonNode> interviewQuestions(@RequestBody JsonNode request) {
        @SuppressWarnings("unchecked")
        Map<String, Object> payload = objectMapper.convertValue(request, Map.class);
        return ResponseEntity.ok(aiProxyService.postJson("/api/recruiter/interview-questions", payload));
    }

    private void notifyCandidateOnReviewUpdate(User reviewer, FraudCase reviewed) {
        NotificationDto.CreateRequest notification = new NotificationDto.CreateRequest();
        notification.setTargetUserId(reviewed.getCandidate().getId());
        notification.setTitle("Fraud review updated");
        notification.setBody(
                "Fraud case " + reviewed.getId() + " was reviewed as " + reviewed.getReviewStatus().name() + ".");
        notification.setType(reviewed.getReviewStatus() == FraudCase.ReviewStatus.CONFIRMED_FRAUD ? "WARNING" : "INFO");
        notification.setCategory("SECURITY");
        notification.setTargetUrl("/dashboard");
        notification.setEmailAlert(Boolean.FALSE);

        try {
            notificationCenterService.createFromRequest(reviewer, notification);
        } catch (RuntimeException ex) {
            log.warn("Could not send fraud review notification for case {}", reviewed.getId(), ex);
        }
    }

    private String extractGithubUsername(String githubUrl) {
        if (githubUrl == null || githubUrl.isBlank()) {
            return null;
        }
        String value = githubUrl.trim();
        int hash = value.indexOf('#');
        if (hash >= 0) {
            value = value.substring(0, hash);
        }
        int query = value.indexOf('?');
        if (query >= 0) {
            value = value.substring(0, query);
        }
        if (value.endsWith("/")) {
            value = value.substring(0, value.length() - 1);
        }
        int lastSlash = value.lastIndexOf('/');
        if (lastSlash < 0 || lastSlash == value.length() - 1) {
            return value;
        }
        String username = value.substring(lastSlash + 1).trim();
        return username.isEmpty() ? null : username;
    }
}
