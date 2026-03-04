package com.talentpredict.modules.evaluation.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.talentpredict.modules.account.entities.Account;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "competence_account", uniqueConstraints = @UniqueConstraint(name = "uk_competence_account", columnNames = {
        "account_id", "competence_id" }))
public class CompetenceAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    // infos
    @Column(name = "score")
    private Double score = 0.0;

    @Column(name = "date_evaluation")
    private LocalDateTime dateEvaluation;

    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();

    @Column(name = "date_modification")
    private LocalDateTime dateModification = LocalDateTime.now();

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false, foreignKey = @ForeignKey(name = "fk_competence_account_account"))
    @JsonIgnore
    @ToString.Exclude
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "competence_id", nullable = false, foreignKey = @ForeignKey(name = "fk_competence_account_competence"))
    @JsonIgnore
    @ToString.Exclude
    private Competence competence;
}
