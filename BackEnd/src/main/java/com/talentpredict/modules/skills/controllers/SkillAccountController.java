package com.talentpredict.modules.skills.controllers;


import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.services.SkillService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/skills/accounts")
@RequiredArgsConstructor
public class SkillAccountController {

    private final SkillService skillService;


    @PostMapping("/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<SkillDto.Response> creerSkill(
            @PathVariable UUID accountId,
            @Valid @RequestBody SkillDto.CreateRequest createRequest) {
        SkillDto.Response response = skillService.creerSkill(accountId, createRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<SkillDto.Response>> getSkillsByAccount(@PathVariable UUID accountId) {
        List<SkillDto.Response> skills = skillService.getSkillsByAccount(accountId);
        return ResponseEntity.ok(skills);
    }

    @GetMapping("/{accountId}/type/{type}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<SkillDto.Response>> getSkillsByType(
            @PathVariable UUID accountId,
            @PathVariable Skill.TypeSkill type) {
        List<SkillDto.Response> skills = skillService.getSkillsByAccountAndType(accountId, type);
        return ResponseEntity.ok(skills);
    }

}
