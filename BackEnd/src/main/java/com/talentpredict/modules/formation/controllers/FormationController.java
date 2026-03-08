package com.talentpredict.modules.formation.controllers;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.formation.services.FormationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/formations")
@RequiredArgsConstructor
public class FormationController {
    
    private final FormationService formationService;
    
    @GetMapping("/utilisateur/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<java.util.List<FormationDto.FormationResponse>> getFormationsByUser(@PathVariable UUID userId) {
        java.util.List<FormationDto.FormationResponse> formations = formationService.getFormationsByUser(userId);
        return ResponseEntity.ok(formations);
    }
    
    @GetMapping("/{formationId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationDto.FormationResponse> getFormationById(@PathVariable UUID formationId) {
        FormationDto.FormationResponse formation = formationService.getFormationById(formationId);
        return ResponseEntity.ok(formation);
    }
    
    @PutMapping("/{formationId}/statut")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationDto.FormationResponse> updateStatut(
            @PathVariable UUID formationId,
            @RequestParam Formation.StatutFormation statut) {
        FormationDto.FormationResponse response = formationService.updateStatut(formationId, statut);
        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/{formationId}/progression")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationDto.FormationResponse> updateProgression(
            @PathVariable UUID formationId,
            @RequestParam Integer progression) {
        FormationDto.FormationResponse response = formationService.updateProgression(formationId, progression);
        return ResponseEntity.ok(response);
    }
}
