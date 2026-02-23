package com.talentpredict.modules.formation.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.formation.dto.FormationRequest;
import com.talentpredict.modules.formation.dto.FormationResponse;
import com.talentpredict.modules.formation.model.Formation;
import com.talentpredict.modules.formation.service.FormationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/formations")
@RequiredArgsConstructor
public class FormationController {
    
    private final FormationService formationService;
    
    @PostMapping("/user/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationResponse> creerFormation(
            @PathVariable Long userId,
            @RequestBody FormationRequest request) {
        FormationResponse response = formationService.creerFormation(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<FormationResponse>> getFormationsByUser(@PathVariable Long userId) {
        List<FormationResponse> formations = formationService.getFormationsByUser(userId);
        return ResponseEntity.ok(formations);
    }
    
    @GetMapping("/{formationId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationResponse> getFormationById(@PathVariable Long formationId) {
        FormationResponse formation = formationService.getFormationById(formationId);
        return ResponseEntity.ok(formation);
    }
    
    @PutMapping("/{formationId}/statut")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationResponse> updateStatut(
            @PathVariable Long formationId,
            @RequestParam Formation.StatutFormation statut) {
        FormationResponse response = formationService.updateStatut(formationId, statut);
        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/{formationId}/progression")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationResponse> updateProgression(
            @PathVariable Long formationId,
            @RequestParam Integer progression) {
        FormationResponse response = formationService.updateProgression(formationId, progression);
        return ResponseEntity.ok(response);
    }
}
