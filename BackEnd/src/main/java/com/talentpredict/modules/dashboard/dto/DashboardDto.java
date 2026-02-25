package com.talentpredict.modules.dashboard.dto;

import com.talentpredict.modules.ai.dto.PredictionDto;
import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.skills.dto.SkillDto;
import lombok.Data;

import java.util.List;
import java.util.UUID;

public class DashboardDto {
    @Data
    public static class Response {
        private UUID accountId;
        private String nomComplet;
        private Integer nombreTests;
        private Integer nombreSkillsSoft;
        private Integer nombreSkillsTech;
        private Integer nombreFormationsTotal;
        private Integer nombreFormationsEnCours;
        private Integer nombreFormationsTerminees;
        private Double scoreEvaluationMoyen;
        private List<SkillDto.Response> topSkills;
        private List<FormationDto.FormationResponse> formationsRecentes;
        private PredictionDto.Response dernierePrediction;
    }
}
