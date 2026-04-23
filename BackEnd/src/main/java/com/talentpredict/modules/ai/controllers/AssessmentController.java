package com.talentpredict.modules.ai.controllers;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.ai.dto.GithubAnalyzeRequestDto;
import com.talentpredict.modules.ai.dto.ScenarioEvaluateRequestDto;
import com.talentpredict.modules.ai.dto.ScenarioGenerateRequestDto;
import com.talentpredict.modules.ai.services.AssessmentAiProxyService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * REST controller exposing the GitHub Code Analyzer and
 * Soft-Skills Scenario Simulator to the Angular frontend.
 */
@RestController
@RequestMapping("/api/assessment")
@RequiredArgsConstructor
@Slf4j
public class AssessmentController {

    private final AssessmentAiProxyService proxyService;

    // ── GitHub Code Analyzer ────────────────────────────────────────────────

    @PostMapping("/github/analyze")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> analyzeGithub(
            @RequestBody GithubAnalyzeRequestDto request) {
        log.info("POST /api/assessment/github/analyze — username: {}", request.getUsername());
        Map<String, Object> result = proxyService.analyzeGithub(
                request.getUsername(), request.getClaimedSkills());
        return ResponseEntity.ok(result);
    }

    // ── Scenario Simulator ──────────────────────────────────────────────────

    @PostMapping("/scenario/generate")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> generateScenario(
            @RequestBody ScenarioGenerateRequestDto request) {
        log.info("POST /api/assessment/scenario/generate — role: {}", request.getRole());
        Map<String, Object> result = proxyService.generateScenario(
                request.getRole(), request.getLevel());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/scenario/evaluate")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> evaluateScenario(
            @RequestBody ScenarioEvaluateRequestDto request) {
        log.info("POST /api/assessment/scenario/evaluate");
        Map<String, Object> result = proxyService.evaluateScenarioResponse(
                request.getScenario(), request.getResponse(), request.getFraudContext());
        return ResponseEntity.ok(result);
    }

    // ── Standalone Fraud Check ──────────────────────────────────────────────

    @PostMapping("/fraud/check")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> checkFraud(
            @RequestBody Map<String, Object> request) {
        log.info("POST /api/assessment/fraud/check");
        String candidateId = request.get("candidateId") != null
                ? request.get("candidateId").toString() : "";
        String testType = request.get("testType") != null
                ? request.get("testType").toString() : "mini_quiz";
        @SuppressWarnings("unchecked")
        Map<String, Object> fraudContext = request.get("fraudContext") instanceof Map
                ? (Map<String, Object>) request.get("fraudContext") : null;
        Map<String, Object> result = proxyService.checkFraud(candidateId, testType, fraudContext);
        return ResponseEntity.ok(result);
    }

    // ── AI Voice Interview ───────────────────────────────────────────────────

    @PostMapping("/interview/question")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> getInterviewQuestion(
            @RequestBody Map<String, Object> request) {
        log.info("POST /api/assessment/interview/question — role: {}", request.get("role"));
        return ResponseEntity.ok(proxyService.getInterviewQuestion(request));
    }

    @PostMapping("/interview/evaluate-turn")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> evaluateInterviewTurn(
            @RequestBody Map<String, Object> request) {
        log.info("POST /api/assessment/interview/evaluate-turn");
        return ResponseEntity.ok(proxyService.evaluateInterviewTurn(request));
    }

    @PostMapping("/interview/summary")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> getInterviewSummary(
            @RequestBody Map<String, Object> request) {
        log.info("POST /api/assessment/interview/summary");
        return ResponseEntity.ok(proxyService.getInterviewSummary(request));
    }
}
