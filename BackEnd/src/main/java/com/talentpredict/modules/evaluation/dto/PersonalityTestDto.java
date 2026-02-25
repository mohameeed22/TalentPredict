package com.talentpredict.modules.evaluation.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;

public class PersonalityTestDto {

    @Data
    public static class PersonalityTestRequest {

        @NotBlank(message = "Le type de test est requis")
        private String typeTest;

        @NotNull(message = "Les réponses sont requises")
        private Map<String, String> reponses;
    }

    @Data
    public static class PersonalityTestResponse {
        private UUID id;
        private String typeTest;
        private Map<String, String> reponses;
        private String resultats;
        private String analyseLlm;
        private Integer score;
        private LocalDateTime dateTest;
    }
}
