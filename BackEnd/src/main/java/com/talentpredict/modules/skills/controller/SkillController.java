package com.talentpredict.modules.skills.controller;

import com.talentpredict.modules.skills.dto.SkillRequest;
import com.talentpredict.modules.skills.dto.SkillResponse;
import com.talentpredict.modules.skills.model.Skill;
import com.talentpredict.modules.skills.service.SkillService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SkillController {
    
    private final SkillService skillService;
    
    @PostMapping("/user/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<SkillResponse> creerSkill(
            @PathVariable Long userId,
            @Valid @RequestBody SkillRequest request) {
        SkillResponse response = skillService.creerSkill(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<SkillResponse>> getSkillsByUser(@PathVariable Long userId) {
        List<SkillResponse> skills = skillService.getSkillsByUser(userId);
        return ResponseEntity.ok(skills);
    }
    
    @GetMapping("/user/{userId}/type/{type}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<SkillResponse>> getSkillsByType(
            @PathVariable Long userId,
            @PathVariable Skill.TypeSkill type) {
        List<SkillResponse> skills = skillService.getSkillsByUserAndType(userId, type);
        return ResponseEntity.ok(skills);
    }
    
    @PutMapping("/{skillId}/valider")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<SkillResponse> validerSkill(@PathVariable Long skillId) {
        SkillResponse response = skillService.validerSkill(skillId);
        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping("/{skillId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<Void> supprimerSkill(@PathVariable Long skillId) {
        skillService.supprimerSkill(skillId);
        return ResponseEntity.noContent().build();
    }
}
