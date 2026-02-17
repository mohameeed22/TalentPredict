package com.talentpredict.modules.skills.dto;

import com.talentpredict.modules.skills.model.Skill;
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
