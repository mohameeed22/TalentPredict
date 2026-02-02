package com.talentpredict.core.controller;

import com.talentpredict.core.dto.PredictionResponse;
import com.talentpredict.core.service.PredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PredictionController {
    
    private final PredictionService predictionService;
    
    @PostMapping("/utilisateur/{utilisateurId}/generer")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PredictionResponse> genererPrediction(@PathVariable Long utilisateurId) {
        PredictionResponse response = predictionService.genererPrediction(utilisateurId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PredictionResponse>> getPredictionsByUtilisateur(@PathVariable Long utilisateurId) {
        List<PredictionResponse> predictions = predictionService.getPredictionsByUtilisateur(utilisateurId);
        return ResponseEntity.ok(predictions);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}/derniere")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PredictionResponse> getDernierePrediction(@PathVariable Long utilisateurId) {
        PredictionResponse prediction = predictionService.getDernierePrediction(utilisateurId);
        if (prediction != null) {
            return ResponseEntity.ok(prediction);
        }
        return ResponseEntity.noContent().build();
    }
}
