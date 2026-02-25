package com.talentpredict.modules.ai.controllers;

import java.util.List;
import java.util.UUID;

import com.talentpredict.modules.ai.dto.PredictionDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.ai.services.PredictionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
public class PredictionController {
    
    private final PredictionService predictionService;
    
    @PostMapping("/accounts/{accountId}/generer")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PredictionDto.Response> genererPrediction(@PathVariable UUID accountId) {
        PredictionDto.Response response = predictionService.genererPrediction(accountId);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/accounts/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PredictionDto.Response>> getPredictionsByAccount(@PathVariable UUID accountId) {
        List<PredictionDto.Response> predictions = predictionService.getPredictionsByAccount(accountId);
        return ResponseEntity.ok(predictions);
    }
    
    @GetMapping("/accounts/{accountId}/derniere")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PredictionDto.Response> getDernierePrediction(@PathVariable UUID accountId) {
        PredictionDto.Response prediction = predictionService.getDernierePrediction(accountId);
        if (prediction != null) {
            return ResponseEntity.ok(prediction);
        }
        return ResponseEntity.noContent().build();
    }
}
