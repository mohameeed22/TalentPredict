package com.talentpredict.modules.formation.dto;

import com.talentpredict.modules.formation.entities.Formation;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

public class FormationDto {
    @Data
    public static class FormationRequest {
        private String titre;
        private String description;
        private Formation.TypeFormation type;
        private Integer duree;
        private String fournisseur;
        private String url;
        private LocalDateTime dateDebut;
    }

    @Data
    public static class FormationResponse {
        private UUID id;
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
}
