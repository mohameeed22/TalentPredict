package com.talentpredict.modules.formation.entities;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.user.entities.User;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "inscriptions")
public class Inscription {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(name = "date_inscription")
    private LocalDate dateInscription = LocalDate.now();

    @Enumerated(EnumType.STRING)
    @Column(name = "statut", nullable = false, length = 30)
    private StatutInscription statut = StatutInscription.EN_COURS;

    @Column(name = "progression")
    private Integer progression = 0;

    @Column(name = "date_fin")
    private LocalDate dateFin;

    @Column(name = "note_finale")
    private Double noteFinale;

    // audits
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false, foreignKey = @ForeignKey(name = "fk_inscription_account"))
    @JsonIgnore
    @ToString.Exclude
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "formation_id", nullable = false, foreignKey = @ForeignKey(name = "fk_inscription_formation"))
    @JsonIgnore
    @ToString.Exclude
    private Formation formation;

    // enums
    public enum StatutInscription {
        EN_COURS("En cours"),
        TERMINEE_ANNULEE("Terminée / Annulée"),
        SUSPENDUE("Suspendue");

        private final String label;

        StatutInscription(String label) {
            this.label = label;
        }

        public String getLabel() {
            return label;
        }
    }
}
