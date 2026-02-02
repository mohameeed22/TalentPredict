package com.talentpredict.core.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "tests_personnalite")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestPersonnalite {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;
    
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
}
