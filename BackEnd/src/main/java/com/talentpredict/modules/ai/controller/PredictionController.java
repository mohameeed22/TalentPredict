package com.talentpredict.modules.ai.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.ai.dto.PredictionResponse;
import com.talentpredict.modules.ai.service.PredictionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
public class PredictionController {
    
    private final PredictionService predictionService;
    
    @PostMapping("/user/{userId}/generer")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PredictionResponse> genererPrediction(@PathVariable Long userId) {
        PredictionResponse response = predictionService.genererPrediction(userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PredictionResponse>> getPredictionsByUser(@PathVariable Long userId) {
        List<PredictionResponse> predictions = predictionService.getPredictionsByUser(userId);
        return ResponseEntity.ok(predictions);
    }
    
    @GetMapping("/user/{userId}/derniere")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PredictionResponse> getDernierePrediction(@PathVariable Long userId) {
        PredictionResponse prediction = predictionService.getDernierePrediction(userId);
        if (prediction != null) {
            return ResponseEntity.ok(prediction);
        }
        return ResponseEntity.noContent().build();
    }
}
