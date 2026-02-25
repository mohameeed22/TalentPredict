package com.talentpredict.modules.evaluation.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import com.talentpredict.modules.account.entities.Account;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "competence_account", uniqueConstraints = @UniqueConstraint(columnNames = {"account_id", "competence_id"}))
public class CompetenceAccount {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
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
    @ManyToOne
    @JoinColumn(name = "account_id", foreignKey = @ForeignKey(name = "fk_competence_utilisateur_user"))
    private Account account;

    @ManyToOne
    private Competence competence;
}
