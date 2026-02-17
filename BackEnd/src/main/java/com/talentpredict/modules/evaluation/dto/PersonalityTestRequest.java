package com.talentpredict.modules.evaluation.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Map;

@Data
public class PersonalityTestRequest {
    
    @NotBlank(message = "Le type de test est requis")
    private String typeTest;
    
    @NotNull(message = "Les réponses sont requises")
    private Map<String, String> reponses;
}
