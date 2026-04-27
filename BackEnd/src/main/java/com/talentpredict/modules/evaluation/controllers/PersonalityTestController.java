package com.talentpredict.modules.evaluation.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.evaluation.dto.PersonalityTestDto;
import com.talentpredict.modules.evaluation.services.PersonalityTestService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("/api/tests-personnalite")
@RequiredArgsConstructor
@Slf4j
public class PersonalityTestController {
    
    private final PersonalityTestService testService;
    private final com.talentpredict.modules.ai.services.RecommendationService recommendationService;

    @PostMapping("/accounts/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestDto.PersonalityTestResponse> submitTest(
            @PathVariable UUID userId,
            @RequestBody PersonalityTestDto.PersonalityTestRequest request) {
        PersonalityTestDto.PersonalityTestResponse test = testService.createTest(userId, request);
        
        // Auto-generate recommendations (Task #2)
        java.util.concurrent.CompletableFuture.runAsync(() -> {
            try {
                recommendationService.generateRecommendations(userId);
            } catch (Exception e) {
                log.error("Failed to generate recommendations for user {}: {}", userId, e.getMessage());
            }
        });
        
        return ResponseEntity.status(HttpStatus.CREATED).body(test);
    }

    @GetMapping("/accounts/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PersonalityTestDto.PersonalityTestResponse>> getUserTests(@PathVariable UUID userId) {
        List<PersonalityTestDto.PersonalityTestResponse> tests = testService.getTestsByUser(userId);
        return ResponseEntity.ok(tests);
    }

    @GetMapping("/accounts/{userId}/dernier")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestDto.PersonalityTestResponse> getLatestTest(@PathVariable UUID userId) {
        PersonalityTestDto.PersonalityTestResponse test = testService.getLatestTestByUser(userId);
        if (test == null) {
            return ResponseEntity.ok(null); // Return 200 with null body instead of 404
        }
        return ResponseEntity.ok(test);
    }

    @GetMapping("/{testId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestDto.PersonalityTestResponse> getTestById(@PathVariable UUID testId) {
        PersonalityTestDto.PersonalityTestResponse test = testService.getTestById(testId);
        return ResponseEntity.ok(test);
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<PersonalityTestDto.PersonalityTestResponse>> getAllTests() {
        List<PersonalityTestDto.PersonalityTestResponse> tests = testService.getAllTests();
        return ResponseEntity.ok(tests);
    }
}
