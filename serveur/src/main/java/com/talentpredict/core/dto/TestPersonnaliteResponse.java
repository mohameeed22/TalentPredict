package com.talentpredict.core.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;

@Data
public class TestPersonnaliteResponse {
    private Long id;
    private String typeTest;
    private Map<String, String> reponses;
    private String resultats;
    private String analyseLlm;
    private Integer score;
    private LocalDateTime dateTest;
}
