package com.talentpredict.modules.evaluation.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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
@Table(name = "competences")
public class Competence {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(nullable = false, length = 200)
    private String nom;

    @Column(nullable = false, length = 100)
    private String categorie;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "niveau", nullable = false, length = 30)
    private Niveau niveau = Niveau.DEBUTANT;

    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation;

    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();

    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();

    // relationships
    @OneToMany(mappedBy = "competence", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    @ToString.Exclude
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
