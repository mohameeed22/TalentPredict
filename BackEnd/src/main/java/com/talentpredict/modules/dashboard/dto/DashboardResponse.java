package com.talentpredict.modules.dashboard.dto;

import com.talentpredict.modules.skills.dto.SkillResponse;
import com.talentpredict.modules.formation.dto.FormationResponse;
import com.talentpredict.modules.ai.dto.PredictionResponse;
import lombok.Data;

import java.util.List;

@Data
public class DashboardResponse {
    private Long userId;
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
