package com.talentpredict.modules.evaluation.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;

@Data
public class PersonalityTestResponse {
    private Long id;
    private String typeTest;
    private Map<String, String> reponses;
    private String resultats;
    private String analyseLlm;
    private Integer score;
    private LocalDateTime dateTest;
}
