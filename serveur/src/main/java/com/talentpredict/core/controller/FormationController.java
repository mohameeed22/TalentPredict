package com.talentpredict.core.controller;

import com.talentpredict.core.dto.FormationRequest;
import com.talentpredict.core.dto.FormationResponse;
import com.talentpredict.core.model.Formation;
import com.talentpredict.core.service.FormationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/formations")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class FormationController {
    
    private final FormationService formationService;
    
    @PostMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<FormationResponse> creerFormation(
            @PathVariable Long utilisateurId,
            @RequestBody FormationRequest request) {
        FormationResponse response = formationService.creerFormation(utilisateurId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<FormationResponse>> getFormationsByUtilisateur(@PathVariable Long utilisateurId) {
        List<FormationResponse> formations = formationService.getFormationsByUtilisateur(utilisateurId);
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
