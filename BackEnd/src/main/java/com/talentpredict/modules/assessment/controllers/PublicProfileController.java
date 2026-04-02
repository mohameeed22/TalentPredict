package com.talentpredict.modules.assessment.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpHeaders;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.assessment.repositories.CandidateBadgeRepository;
import com.talentpredict.modules.assessment.services.BadgeService;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.ProfileRepository;

import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicProfileController {

    private final ProfileRepository profileRepository;
    private final SkillRepository skillRepository;
    private final BadgeService badgeService;
    private final CandidateBadgeRepository candidateBadgeRepository;
    private final ObjectMapper objectMapper;

    @GetMapping("/profiles/{slug}")
    @Transactional(readOnly = true)
    public ResponseEntity<Map<String, Object>> publicProfile(@PathVariable String slug) {
        Profile p = profileRepository.findByPublicSlug(slug)
                .orElseThrow(() -> new org.springframework.web.server.ResponseStatusException(
                        org.springframework.http.HttpStatus.NOT_FOUND, "Profile not found"));
        User u = p.getUser();
        List<Skill> skills = skillRepository.findByUserId(u.getId());
        Map<String, Object> out = new HashMap<>();
        out.put("public_slug", p.getPublicSlug());
        out.put("first_name", u.getFirstName());
        out.put("last_name", u.getLastName());
        out.put("title", p.getTitreProfessionnel());
        out.put("bio", p.getDescription());
        out.put("github_url", p.getGithubUrl());
        out.put("linkedin_url", p.getLienLinkedin());
        out.put("real_score", p.getRealScore());
        out.put("test_passed", p.getTestPassed());
        out.put("skills", skills.stream()
                .map(s -> Map.of(
                        "name", s.getNom(),
                        "level", s.getNiveau() != null ? s.getNiveau() : 0))
                .collect(Collectors.toList()));
        return ResponseEntity.ok(out);
    }

    @GetMapping("/badge")
    @Transactional(readOnly = true)
    public ResponseEntity<String> badge(
            @RequestParam UUID userId,
            @RequestParam String skill) {
        var existing = candidateBadgeRepository.findByUser_IdAndSkillIgnoreCase(userId, skill);
        int score = 0;
        if (existing.isPresent() && existing.get().getScore() != null) {
            score = existing.get().getScore();
        } else {
            Profile p = profileRepository.findByUser_Id(userId).orElse(null);
            if (p != null && p.getSkillRealScoresJson() != null) {
                try {
                    JsonNode n = objectMapper.readTree(p.getSkillRealScoresJson());
                    if (n.has(skill)) {
                        score = n.get(skill).asInt();
                    }
                } catch (Exception ignored) {
                    score = 0;
                }
            }
        }
        if (score < 70) {
            throw new org.springframework.web.server.ResponseStatusException(
                    org.springframework.http.HttpStatus.FORBIDDEN, "Badge not available for this skill");
        }
        String svg = badgeService.buildSvgBadge(skill, score, "VERIFIED");
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "image/svg+xml")
                .body(svg);
    }
}
