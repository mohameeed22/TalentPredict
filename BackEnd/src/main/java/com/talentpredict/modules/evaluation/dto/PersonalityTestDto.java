package com.talentpredict.modules.evaluation.dto;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonAlias;

import lombok.Data;

public class PersonalityTestDto {

    @Data
    public static class PersonalityTestRequest {

        private String typeTest = "PCM";

        @JsonAlias("responses")
        private Map<String, String> reponses;

        public Map<String, String> getReponses() {
            return reponses != null ? reponses : new HashMap<>();
        }
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
