package com.talentpredict.modules.formation.dto;

import com.talentpredict.modules.formation.model.Formation;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FormationRequest {
    private String titre;
    private String description;
    private Formation.TypeFormation type;
    private Integer duree;
    private String fournisseur;
    private String url;
    private LocalDateTime dateDebut;
}
