package com.talentpredict.modules.ai.controllers;

import java.util.Map;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.ai.services.JobMatchService;

import lombok.RequiredArgsConstructor;

@RestController("aiJobMatchController")
@RequestMapping("/api/job-match")
@RequiredArgsConstructor
public class JobMatchController {

    private final JobMatchService jobMatchService;

    @PostMapping("/users/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> calculateMatchScore(
            @PathVariable UUID userId,
            @RequestBody Map<String, String> request) {
        String jobDescription = request.get("jobDescription");
        if (jobDescription == null || jobDescription.isBlank()) {
            return ResponseEntity.badRequest().build();
        }
        
        Map<String, Object> result = jobMatchService.calculateMatchScore(userId, jobDescription);
        return ResponseEntity.ok(result);
    }
}
