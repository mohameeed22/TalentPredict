package com.talentpredict.core.dto;

import com.talentpredict.core.model.Formation;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FormationResponse {
    private Long id;
    private String titre;
    private String description;
    private Formation.TypeFormation type;
    private Integer duree;
    private String fournisseur;
    private String url;
    private Formation.StatutFormation statut;
    private LocalDateTime dateProposition;
    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;
    private Integer progression;
}
