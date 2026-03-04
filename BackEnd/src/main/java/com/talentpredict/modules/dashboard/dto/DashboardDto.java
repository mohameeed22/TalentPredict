package com.talentpredict.modules.dashboard.dto;

import com.talentpredict.modules.ai.dto.PredictionDto;
import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.skills.dto.SkillDto;
import lombok.Data;

import java.util.List;
import java.util.UUID;

public class DashboardDto {

    /** Employee dashboard response */
    @Data
    public static class Response {
        private UUID accountId;
        private String nomComplet;
        private String firstName;
        private String lastName;
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

    /** Summary of one employee for the Admin overview */
    @Data
    public static class EmployeeSummaryDto {
        private UUID id;
        private String firstName;
        private String lastName;
        private String position;
        private String department;
        private int formationCount;
        private int testCount;
        private boolean isActive;
        private String email;
    }

    /** Admin (HR) overview dashboard response */
    @Data
    public static class AdminOverviewDto {
        private int totalEmployees;
        private int totalFormationsEnCours;
        private int totalTestsCompleted;
        private int totalPredictions;
        private List<EmployeeSummaryDto> employees;
    }
}
