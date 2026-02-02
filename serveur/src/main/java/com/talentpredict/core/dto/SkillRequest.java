package com.talentpredict.core.dto;

import com.talentpredict.core.model.Skill;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SkillRequest {
    
    @NotBlank(message = "Le nom du skill est requis")
    private String nom;
    
    @NotNull(message = "Le type est requis")
    private Skill.TypeSkill type;
    
    @NotNull(message = "Le niveau est requis")
    @Min(value = 1, message = "Le niveau minimum est 1")
    @Max(value = 5, message = "Le niveau maximum est 5")
    private Integer niveau;
    
    private String description;
}
