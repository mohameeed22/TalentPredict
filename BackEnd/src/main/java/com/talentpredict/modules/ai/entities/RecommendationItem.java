package com.talentpredict.modules.ai.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "recommendation_items")
public class RecommendationItem {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(name = "contenu", columnDefinition = "TEXT")
    private String contenu;

    @Column(name = "texte", length = 500)
    private String texte;

    @Column(name = "priorite")
    @Builder.Default
    private Integer priorite = 1;

    @Column(name = "date_creation")
    @Builder.Default
    private LocalDateTime dateCreation = LocalDateTime.now();

    @Column(name = "date_modification")
    @Builder.Default
    private LocalDateTime dateModification = LocalDateTime.now();

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recommendation_id", nullable = false, foreignKey = @ForeignKey(name = "fk_recommendation_item_recommendation"))
    @JsonIgnore
    @ToString.Exclude
    private Recommendation recommendation;
}
