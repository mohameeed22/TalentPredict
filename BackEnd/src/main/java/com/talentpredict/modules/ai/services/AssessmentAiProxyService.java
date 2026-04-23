package com.talentpredict.modules.ai.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Proxy service: routes GitHub Analyzer and Scenario Simulator requests
 * through Spring Boot to the Python FastAPI AI service.
 */
@Service
@RequiredArgsConstructor
@Slf4j
@SuppressWarnings("null")
public class AssessmentAiProxyService {

    @Value("${talentpredict.ai.base-url:}")
    private String aiBaseUrl;

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    // ── GitHub Analyzer ─────────────────────────────────────────────────────

    public Map<String, Object> analyzeGithub(String username, List<String> claimedSkills) {
        String url = aiBaseUrl + "/api/test/github/analyze";
        log.info("Proxying GitHub analyze request for user: {}", username);

        try {
            Map<String, Object> payload = Map.of(
                "username", username,
                "claimed_skills", claimedSkills
            );
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("GitHub analyze proxy failed: {}", e.getMessage());
            return Map.of("status", "error", "message", "AI service unavailable: " + e.getMessage());
        }
    }

    // ── Scenario Simulator ──────────────────────────────────────────────────

    public Map<String, Object> generateScenario(String role, String level) {
        String url = aiBaseUrl + "/api/test/scenario/generate";
        log.info("Proxying scenario generation for role={}, level={}", role, level);

        try {
            Map<String, Object> payload = Map.of("role", role, "level", level);
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("Scenario generate proxy failed: {}", e.getMessage());
            return Map.of(
                "scenario_title", "Project Deadline Crisis",
                "scenario_description", "Your team's deadline was cut in half due to an upcoming board meeting. "
                    + "As the lead, describe exactly how you would communicate this to your team and what you would do.",
                "skills_tested", List.of("Negotiation", "Stress Management", "Leadership")
            );
        }
    }

    public Map<String, Object> evaluateScenarioResponse(
            String scenario, String candidateResponse, Map<String, Object> fraudContext) {
        String url = aiBaseUrl + "/api/test/scenario/evaluate";
        log.info("Proxying scenario evaluation (with fraud context: {})", fraudContext != null);

        try {
            java.util.Map<String, Object> payload = new java.util.HashMap<>();
            payload.put("scenario", scenario);
            payload.put("response", candidateResponse);
            if (fraudContext != null && !fraudContext.isEmpty()) {
                payload.put("fraud_context", fraudContext);
            }
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("Scenario evaluate proxy failed: {}", e.getMessage());
            return Map.of(
                "error", "Evaluation service temporarily unavailable.",
                "scores", Map.of("empathy", 50, "assertiveness", 50, "pragmatism", 50, "communication_clarity", 50)
            );
        }
    }

    // ── Standalone Fraud Check (used by formation mini-quiz) ────────────────

    public Map<String, Object> checkFraud(
            String candidateId, String testType, Map<String, Object> fraudContext) {
        String url = aiBaseUrl + "/api/test/fraud/check";
        log.info("Proxying standalone fraud check for candidate={}, type={}", candidateId, testType);

        try {
            java.util.Map<String, Object> payload = new java.util.HashMap<>();
            payload.put("candidate_id", candidateId != null ? candidateId : "");
            payload.put("test_type", testType != null ? testType : "mini_quiz");
            if (fraudContext != null && !fraudContext.isEmpty()) {
                payload.put("fraud_context", fraudContext);
            }
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("Standalone fraud check proxy failed: {}", e.getMessage());
            return Map.of("fraud_risk", "low", "fraud_score", 0,
                "explanation", "Fraud check unavailable: " + e.getMessage());
        }
    }

    // ── AI Voice Interview ───────────────────────────────────────────────────

    public Map<String, Object> getInterviewQuestion(Map<String, Object> payload) {
        String url = aiBaseUrl + "/api/test/interview/question";
        log.info("Proxying interview question request for role={}", payload.get("role"));
        try {
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("Interview question proxy failed: {}", e.getMessage());
            return Map.of("question", "Parlez-nous un peu de vos motivations et de ce que vous recherchez dans votre carrière.",
                "follow_up_cue", "Qu'est-ce qui vous passionne ?", "topic", "discovery", "difficulty", "easy");
        }
    }

    public Map<String, Object> evaluateInterviewTurn(Map<String, Object> payload) {
        String url = aiBaseUrl + "/api/test/interview/evaluate-turn";
        log.info("Proxying interview turn evaluation");
        try {
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("Interview turn evaluation proxy failed: {}", e.getMessage());
            return Map.of("scores", Map.of("relevance", 50, "depth", 50, "clarity", 50, "confidence", 50),
                "feedback", "Merci pour ce partage.", "next_action", "continue", "red_flags", List.of());
        }
    }

    public Map<String, Object> getInterviewSummary(Map<String, Object> payload) {
        String url = aiBaseUrl + "/api/test/interview/summary";
        log.info("Proxying interview summary request");
        try {
            HttpEntity<Map<String, Object>> request = buildJsonEntity(payload);
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("Interview summary proxy failed: {}", e.getMessage());
            return Map.of("overall_score", 0, "recommendation", "borderline",
                "strengths", List.of("Motivation", "Curiosité"), "areas_for_improvement", List.of(),
                "summary_paragraph", "Merci d'avoir partagé votre expérience. Cette synthèse met en lumière votre parcours et vos aspirations. Vos compétences techniques et vos soft skills montrent un profil intéressant et en constante évolution.");
        }
    }

    // ── Helpers ─────────────────────────────────────────────────────────────

    private HttpEntity<Map<String, Object>> buildJsonEntity(Map<String, Object> body) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new HttpEntity<>(body, headers);
    }

    @SuppressWarnings("unchecked")
    private Map<String, Object> parseResponse(String json) {
        try {
            return objectMapper.readValue(json, Map.class);
        } catch (Exception e) {
            log.warn("Failed to parse AI response JSON: {}", e.getMessage());
            return Map.of("raw", json);
        }
    }
}
