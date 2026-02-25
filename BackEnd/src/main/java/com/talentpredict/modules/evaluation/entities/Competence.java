package com.talentpredict.modules.evaluation.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "competences")
public class Competence {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    // infos
    @Column(nullable = false)
    private String nom;
    
    @Column(nullable = false)
    private String categorie;
    
    @Column(name = "description")
    private String description;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "niveau")
    private Niveau niveau = Niveau.DEBUTANT;
    
    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();

    // relationships
    @OneToMany(mappedBy = "competence", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CompetenceAccount> utilisateurs = new ArrayList<>();

    // enums
    public enum Niveau {
        DEBUTANT("Débutant"),
        INTERMEDIAIRE("Intermédiaire"),
        AVANCE("Avancé"),
        EXPERT("Expert");

        private final String label;

        Niveau(String label) {
            this.label = label;
        }

        public String getLabel() {
            return label;
        }
    }
}
