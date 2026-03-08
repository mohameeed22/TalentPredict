package com.talentpredict.modules.formation.controllers;


import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.formation.services.FormationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/formations/accounts")
@RequiredArgsConstructor
public class FormationAccountController {

    private final FormationService formationService;


    @PostMapping("/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationDto.FormationResponse> createFormation(
            @PathVariable UUID accountId,
            @RequestBody FormationDto.FormationRequest request) {
        FormationDto.FormationResponse response = formationService.creerFormation(accountId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<FormationDto.FormationResponse>> getFormationsByAccount(@PathVariable UUID accountId) {
        List<FormationDto.FormationResponse> formations = formationService.getFormationsByUser(accountId);
        return ResponseEntity.ok(formations);
    }
}
