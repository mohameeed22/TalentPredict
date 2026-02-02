package com.talentpredict.core.dto;

import lombok.Data;

import java.util.List;

@Data
public class DashboardResponse {
    private Long utilisateurId;
    private String nomComplet;
    private Integer nombreTests;
    private Integer nombreSkillsSoft;
    private Integer nombreSkillsTech;
    private Integer nombreFormationsTotal;
    private Integer nombreFormationsEnCours;
    private Integer nombreFormationsTerminees;
    private Double scoreEvaluationMoyen;
    private List<SkillResponse> topSkills;
    private List<FormationResponse> formationsRecentes;
    private PredictionResponse dernierePrediction;
}
