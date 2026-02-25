package com.talentpredict.modules.skills.controllers;

import java.util.UUID;

import com.talentpredict.modules.skills.dto.SkillDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.skills.services.SkillService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
public class SkillController {
    
    private final SkillService skillService;
    

    @PutMapping("/{skillId}/valider")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<SkillDto.Response> validerSkill(@PathVariable UUID skillId) {
        SkillDto.Response response = skillService.validerSkill(skillId);
        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping("/{skillId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<Void> supprimerSkill(@PathVariable UUID skillId) {
        skillService.supprimerSkill(skillId);
        return ResponseEntity.noContent().build();
    }
}
