package com.talentpredict.modules.evaluation.entities;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.talentpredict.modules.account.entities.Account;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapKeyColumn;
import jakarta.persistence.Table;
import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "tests_personnalite")
public class PersonalityTest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    // infos
    @Column(name = "date_test", nullable = false)
    private LocalDateTime dateTest = LocalDateTime.now();

    @Column(name = "type_test")
    private String typeTest; // MBTI, Big Five, DISC, etc.

    @ElementCollection
    @CollectionTable(name = "test_reponses", joinColumns = @JoinColumn(name = "test_id"))
    @MapKeyColumn(name = "question")
    @Column(name = "reponse")
    private Map<String, String> reponses = new HashMap<>();

    @Column(columnDefinition = "TEXT")
    private String resultats;

    @Column(name = "analyse_llm", columnDefinition = "TEXT")
    private String analyseLlm; // Analyse générée par OpenAI

    @Column
    private Integer score;

    // relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;
}
