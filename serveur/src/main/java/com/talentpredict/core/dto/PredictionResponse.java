package com.talentpredict.core.dto;

import com.talentpredict.core.model.Prediction;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class PredictionResponse {
    private Long id;
    private LocalDateTime datePrediction;
    private String analyse;
    private String recommandationSoft;
    private String recommandationTech;
    private Double scoreConfiance;
    private Prediction.StatutPrediction statut;
    private List<FormationResponse> formationsProposees;
}
