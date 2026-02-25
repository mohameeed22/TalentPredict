package com.talentpredict.modules.formation.entities;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

import com.talentpredict.modules.account.entities.Account;

import jakarta.persistence.*;
import lombok.*;

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
    private UUID id;


    // infos
    @Column(name = "date_inscription")
    private LocalDate dateInscription = LocalDate.now();
    
    @Enumerated(EnumType.STRING)
    @Column(name = "statut")
    private StatutInscription statut = StatutInscription.EN_COURS;
    
    @Column(name = "progression")
    private Integer progression = 0;
    
    @Column(name = "date_fin")
    private LocalDate dateFin;
    
    @Column(name = "note_finale")
    private Double noteFinale;


    // audits
    @Column
    private Instant createdAt;

    @Column
    private Instant updatedAt;


    // Lifecycle
    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }

    @PrePersist
    protected void onCreate() {
        Instant now = Instant.now();
        createdAt = now;
        updatedAt = now;
    }


    // relationships
    @ManyToOne
    @JoinColumn(name = "account_id", foreignKey = @ForeignKey(name = "fk_inscription_user"))
    private Account account;

    @ManyToOne
    @JoinColumn(name = "formation_id", foreignKey = @ForeignKey(name = "fk_inscription_formation"))
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
