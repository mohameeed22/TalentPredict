package com.talentpredict.core.dto;

import com.talentpredict.core.model.Skill;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SkillResponse {
    private Long id;
    private String nom;
    private Skill.TypeSkill type;
    private Integer niveau;
    private String description;
    private LocalDateTime dateEvaluation;
    private Boolean validee;
}
