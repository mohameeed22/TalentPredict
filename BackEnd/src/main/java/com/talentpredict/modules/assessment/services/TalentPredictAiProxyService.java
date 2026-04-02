package com.talentpredict.modules.assessment.services;

import java.time.Duration;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TalentPredictAiProxyService {

    private final WebClient talentPredictAiWebClient;
    private final ObjectMapper objectMapper;

    @Value("${talentpredict.ai.request-timeout-seconds:120}")
    private long requestTimeoutSeconds;

    public JsonNode postJson(String path, Object body) {
        try {
            String json = talentPredictAiWebClient.post()
                    .uri(path)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(body == null ? Map.of() : body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block(Duration.ofSeconds(Math.max(10, requestTimeoutSeconds)));
            if (json == null || json.isBlank()) {
                return objectMapper.createObjectNode();
            }
            return objectMapper.readTree(json);
        } catch (WebClientResponseException e) {
            log.warn("AI service error: {} {}", e.getStatusCode(), e.getResponseBodyAsString());
            throw new ResponseStatusException(e.getStatusCode(), e.getResponseBodyAsString(), e);
        } catch (Exception e) {
            log.error("AI proxy failed: {}", e.getMessage());
            throw new ResponseStatusException(org.springframework.http.HttpStatus.BAD_GATEWAY,
                    "AI service unavailable", e);
        }
    }
}
