package com.talentpredict.core.controller;

import com.talentpredict.core.dto.SkillRequest;
import com.talentpredict.core.dto.SkillResponse;
import com.talentpredict.core.model.Skill;
import com.talentpredict.core.service.SkillService;
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
    
    @PostMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<SkillResponse> creerSkill(
            @PathVariable Long utilisateurId,
            @Valid @RequestBody SkillRequest request) {
        SkillResponse response = skillService.creerSkill(utilisateurId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<SkillResponse>> getSkillsByUtilisateur(@PathVariable Long utilisateurId) {
        List<SkillResponse> skills = skillService.getSkillsByUtilisateur(utilisateurId);
        return ResponseEntity.ok(skills);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}/type/{type}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<SkillResponse>> getSkillsByType(
            @PathVariable Long utilisateurId,
            @PathVariable Skill.TypeSkill type) {
        List<SkillResponse> skills = skillService.getSkillsByUtilisateurAndType(utilisateurId, type);
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
