package com.talentpredict.modules.evaluation.model;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import com.talentpredict.modules.auth.model.User;

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

@Entity
@Table(name = "tests_personnalite")
public class PersonalityTest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private User user;
    
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

    public PersonalityTest() {
        // JPA requirement
    }

    public PersonalityTest(Long id, User user, LocalDateTime dateTest, String typeTest,
                            Map<String, String> reponses, String resultats, String analyseLlm, Integer score) {
        this.id = id;
        this.user = user;
        this.dateTest = dateTest;
        this.typeTest = typeTest;
        if (reponses != null) {
            this.reponses = reponses;
        }
        this.resultats = resultats;
        this.analyseLlm = analyseLlm;
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getDateTest() {
        return dateTest;
    }

    public void setDateTest(LocalDateTime dateTest) {
        this.dateTest = dateTest;
    }

    public String getTypeTest() {
        return typeTest;
    }

    public void setTypeTest(String typeTest) {
        this.typeTest = typeTest;
    }

    public Map<String, String> getReponses() {
        return reponses;
    }

    public void setReponses(Map<String, String> reponses) {
        this.reponses = reponses;
    }

    public String getResultats() {
        return resultats;
    }

    public void setResultats(String resultats) {
        this.resultats = resultats;
    }

    public String getAnalyseLlm() {
        return analyseLlm;
    }

    public void setAnalyseLlm(String analyseLlm) {
        this.analyseLlm = analyseLlm;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}
