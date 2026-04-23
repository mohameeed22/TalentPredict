package com.talentpredict.modules.ai.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import lombok.Data;

public class RecommendationDto {

    @Data
    public static class Response {
        private UUID id;
        private String titre;
        private String description;
        private Double score;
        private Integer priorite;
        private LocalDateTime dateGeneration;
        private List<ItemResponse> items;
    }

    @Data
    public static class ItemResponse {
        private UUID id;
        private String contenu;
        private String texte;
        private Integer priorite;
    }
}
