package com.talentpredict.modules.assessment.controllers;

import java.util.Map;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.assessment.services.TalentPredictAiProxyService;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.shared.security.UserDetailsImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/analysis")
@RequiredArgsConstructor
public class AnalysisProxyController {

    private final TalentPredictAiProxyService aiProxyService;
    private final ObjectMapper objectMapper;

    @PostMapping("/github-deep")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<JsonNode> githubDeep(
            @RequestBody JsonNode body,
            @AuthenticationPrincipal UserDetailsImpl principal) {
        assertCandidate(principal.getUser(), body);
        return ResponseEntity.ok(aiProxyService.postJson("/api/analysis/github-deep", objectToMap(body)));
    }

    @PostMapping("/fraud-check")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<JsonNode> fraudCheck(
            @RequestBody JsonNode body,
            @AuthenticationPrincipal UserDetailsImpl principal) {
        User u = principal.getUser();
        if (u.getRole() != User.Role.RECRUITER && u.getRole() != User.Role.ADMIN) {
            assertCandidate(u, body);
        }
        return ResponseEntity.ok(aiProxyService.postJson("/api/analysis/fraud-check", objectToMap(body)));
    }

    private void assertCandidate(User auth, JsonNode body) {
        if (!body.hasNonNull("candidate_id")) {
            return;
        }
        UUID cid = UUID.fromString(body.get("candidate_id").asText());
        if (auth.getRole() == User.Role.RECRUITER || auth.getRole() == User.Role.ADMIN) {
            return;
        }
        if (!auth.getId().equals(cid)) {
            throw new org.springframework.security.access.AccessDeniedException("candidate_id mismatch");
        }
    }

    @SuppressWarnings("unchecked")
    private Map<String, Object> objectToMap(JsonNode node) {
        return objectMapper.convertValue(node, Map.class);
    }
}
