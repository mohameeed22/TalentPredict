package com.talentpredict.modules.assessment.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.talentpredict.modules.assessment.entities.JobMatch;
import com.talentpredict.modules.assessment.repositories.JobMatchRepository;
import com.talentpredict.modules.assessment.services.TalentPredictAiProxyService;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.shared.security.UserDetailsImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
@SuppressWarnings("null")
public class JobMatchController {

    private final TalentPredictAiProxyService aiProxyService;
    private final SkillRepository skillRepository;
    private final UserRepository userRepository;
    private final JobMatchRepository jobMatchRepository;

    @PostMapping("/match")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<JsonNode> match(
            @RequestBody JsonNode body,
            @AuthenticationPrincipal UserDetailsImpl principal) {
        UUID cid = UUID.fromString(body.get("candidate_id").asText());
        User auth = principal.getUser();
        if (auth.getRole() != User.Role.RECRUITER && auth.getRole() != User.Role.ADMIN) {
            if (!auth.getId().equals(cid)) {
                throw new org.springframework.security.access.AccessDeniedException("candidate_id mismatch");
            }
        }

        List<Skill> skills = skillRepository.findByUserId(cid);
        List<Map<String, Object>> candidateSkills = skills.stream()
                .map(s -> {
                    Map<String, Object> m = new HashMap<>();
                    m.put("name", s.getNom());
                    Integer levelValue = s.getNiveau();
                    int n = levelValue == null ? 1 : levelValue;
                    m.put("score", Math.min(100, n * 20));
                    m.put("niveau", n);
                    return m;
                })
                .collect(Collectors.toList());

        Map<String, Object> payload = new HashMap<>();
        payload.put("candidate_id", cid.toString());
        if (body.hasNonNull("job_url")) {
            payload.put("job_url", body.get("job_url").asText());
        }
        if (body.hasNonNull("job_description")) {
            payload.put("job_description", body.get("job_description").asText());
        }
        payload.put("candidate_skills", candidateSkills);

        JsonNode result = aiProxyService.postJson("/api/jobs/match", payload);

        User userRef = userRepository.getReferenceById(cid);
        JobMatch jm = JobMatch.builder()
                .user(userRef)
                .jobUrl(body.hasNonNull("job_url") ? body.get("job_url").asText() : null)
                .jobTitle(result.path("extracted_requirements").path("domain").asText(null))
                .matchScore(result.path("overall_match").asInt(0))
                .skillBreakdownJson(result.path("skill_breakdown").toString())
                .build();
        jobMatchRepository.save(jm);

        return ResponseEntity.ok(result);
    }
}
