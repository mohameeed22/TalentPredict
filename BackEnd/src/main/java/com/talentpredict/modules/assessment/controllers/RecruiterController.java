package com.talentpredict.modules.assessment.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.talentpredict.modules.assessment.dto.RecruiterCandidateRow;
import com.talentpredict.modules.assessment.services.TalentPredictAiProxyService;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.ProfileRepository;
import com.talentpredict.modules.user.repositories.UserRepository;

import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/recruiter")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('RECRUITER','ADMIN')")
public class RecruiterController {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final TalentPredictAiProxyService aiProxyService;

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
                    p != null ? p.getPublicSlug() : null);
        }).collect(Collectors.toList());
        return ResponseEntity.ok(rows);
    }

    @GetMapping("/fraud-alerts")
    @Transactional(readOnly = true)
    public ResponseEntity<List<RecruiterCandidateRow>> fraudAlerts() {
        List<Profile> profiles = profileRepository.findByFraudRiskIn(List.of("HIGH", "MEDIUM", "high", "medium"));
        List<RecruiterCandidateRow> rows = profiles.stream()
                .map(p -> {
                    User u = p.getUser();
                    return new RecruiterCandidateRow(
                            u.getId(),
                            u.getEmail(),
                            u.getFirstName(),
                            u.getLastName(),
                            p.getRealScore(),
                            p.getFraudRisk(),
                            p.getPublicSlug());
                })
                .collect(Collectors.toList());
        return ResponseEntity.ok(rows);
    }

    @PostMapping("/interview-questions")
    public ResponseEntity<JsonNode> interviewQuestions(@RequestBody Map<String, Object> body) {
        return ResponseEntity.ok(aiProxyService.postJson("/api/recruiter/interview-questions", body));
    }
}
