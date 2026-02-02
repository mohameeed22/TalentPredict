package com.talentpredict.core.service;

import com.talentpredict.core.dto.TestPersonnaliteRequest;
import com.talentpredict.core.dto.TestPersonnaliteResponse;
import com.talentpredict.core.exception.ResourceNotFoundException;
import com.talentpredict.core.model.TestPersonnalite;
import com.talentpredict.core.model.Utilisateur;
import com.talentpredict.core.repository.TestPersonnaliteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TestPersonnaliteService {
    
    private final TestPersonnaliteRepository testPersonnaliteRepository;
    private final UtilisateurService utilisateurService;
    private final OpenAIService openAIService;
    
    @Transactional
    public TestPersonnaliteResponse creerTest(Long utilisateurId, TestPersonnaliteRequest request) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(utilisateurId);
        
        TestPersonnalite test = new TestPersonnalite();
        test.setUtilisateur(utilisateur);
        test.setTypeTest(request.getTypeTest());
        test.setReponses(request.getReponses());
        
        // Génération de l'analyse avec OpenAI
        String reponsesStr = request.getReponses().toString();
        String analyseLlm = openAIService.analyserTestPersonnalite(request.getTypeTest(), reponsesStr);
        test.setAnalyseLlm(analyseLlm);
        
        // Score calculé (simplifié)
        test.setScore(calculerScore(request.getReponses()));
        
        TestPersonnalite saved = testPersonnaliteRepository.save(test);
        return convertToResponse(saved);
    }
    
    public List<TestPersonnaliteResponse> getTestsByUtilisateur(Long utilisateurId) {
        return testPersonnaliteRepository.findByUtilisateurIdOrderByDateTestDesc(utilisateurId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public TestPersonnaliteResponse getTestById(Long id) {
        TestPersonnalite test = testPersonnaliteRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Test non trouvé avec l'ID: " + id));
        return convertToResponse(test);
    }
    
    private Integer calculerScore(java.util.Map<String, String> reponses) {
        // Logique simplifiée - à adapter selon le type de test
        return Math.min(100, reponses.size() * 10);
    }
    
    private TestPersonnaliteResponse convertToResponse(TestPersonnalite test) {
        TestPersonnaliteResponse response = new TestPersonnaliteResponse();
        response.setId(test.getId());
        response.setTypeTest(test.getTypeTest());
        response.setReponses(test.getReponses());
        response.setResultats(test.getResultats());
        response.setAnalyseLlm(test.getAnalyseLlm());
        response.setScore(test.getScore());
        response.setDateTest(test.getDateTest());
        return response;
    }
}
