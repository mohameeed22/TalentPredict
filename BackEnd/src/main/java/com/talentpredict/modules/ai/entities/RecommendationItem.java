package com.talentpredict.modules.ai.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
    private UUID id;


    // infos
    @Column(name = "contenu", columnDefinition = "TEXT")
    private String contenu;
    
    @Column(name = "texte")
    private String texte;
    
    @Column(name = "priorite")
    private Integer priorite = 1;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();


    // relationships
    @ManyToOne
    @JoinColumn(name = "recommendation_id", foreignKey = @ForeignKey(name = "fk_recommendation_item_recommendation"))
    private Recommendation recommendation;
}
