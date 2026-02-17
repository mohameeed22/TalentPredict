/**
 * Evaluation Module - Handles personality tests and assessments  
 * Core functionality: personality test creation, analysis via AI
 */
package com.talentpredict.modules.evaluation.service;

import com.talentpredict.modules.evaluation.dto.PersonalityTestRequest;
import com.talentpredict.modules.evaluation.dto.PersonalityTestResponse;
import com.talentpredict.modules.evaluation.model.PersonalityTest;
import com.talentpredict.modules.evaluation.repository.PersonalityTestRepository;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.auth.service.UserService;
import com.talentpredict.modules.ai.service.OpenAIService;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PersonalityTestService {
    
    private final PersonalityTestRepository testRepository;
    private final UserService userService;
    private final OpenAIService openAIService;
    
    @Transactional
    public PersonalityTestResponse createTest(Long userId, PersonalityTestRequest request) {
        User user = userService.getUserById(userId);
        
        PersonalityTest test = new PersonalityTest();
        test.setUser(user);
        test.setTypeTest(request.getTypeTest());
        test.setReponses(request.getReponses());
        
        // Generate AI analysis
        String reponsesStr = request.getReponses().toString();
        String analyseLlm = openAIService.analyserTestPersonnalite(request.getTypeTest(), reponsesStr);
        test.setAnalyseLlm(analyseLlm);
        
        // Calculate score
        test.setScore(calculateScore(request.getReponses()));
        
        PersonalityTest saved = testRepository.save(test);
        return convertToResponse(saved);
    }
    
    public List<PersonalityTestResponse> getTestsByUser(Long userId) {
        return testRepository.findByUserIdOrderByDateTestDesc(userId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public PersonalityTestResponse getTestById(Long id) {
        PersonalityTest test = testRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Test non trouvé avec l'ID: " + id));
        return convertToResponse(test);
    }
    
    private Integer calculateScore(java.util.Map<String, String> reponses) {
        return Math.min(100, reponses.size() * 10);
    }
    
    private PersonalityTestResponse convertToResponse(PersonalityTest test) {
        PersonalityTestResponse response = new PersonalityTestResponse();
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
