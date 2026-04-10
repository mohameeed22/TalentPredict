/**
 * Evaluation Module - Handles personality tests and assessments  
 * Core functionality: personality test creation, analysis via AI
 */
package com.talentpredict.modules.evaluation.services;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.talentpredict.modules.ai.services.OpenAIService;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.evaluation.dto.PersonalityTestDto;
import com.talentpredict.modules.evaluation.entities.PersonalityTest;
import com.talentpredict.modules.evaluation.repositories.PersonalityTestRepository;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PersonalityTestService {
    
    private final PersonalityTestRepository testRepository;
    private final AuthServiceImpl authServiceImpl;
    private final OpenAIService openAIService;


    @Transactional
    public PersonalityTestDto.PersonalityTestResponse createTest(UUID accountId, PersonalityTestDto.PersonalityTestRequest request) {
        User user = authServiceImpl.getUserById(accountId);

        if (request.getReponses() == null || request.getReponses().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "Les réponses au test ne peuvent pas être vides");
        }

        PersonalityTest test = new PersonalityTest();
        test.setUser(user);
        test.setTypeTest(request.getTypeTest());
        test.setReponses(request.getReponses());
        
        // Generate AI analysis
        String reponsesStr = request.getReponses() != null ? request.getReponses().toString() : "{}";
        String analyseLlm = openAIService.analyserTestPersonnalite(request.getTypeTest(), reponsesStr);
        test.setAnalyseLlm(analyseLlm);
        
        // Calculate score
        test.setScore(calculateScore(request.getReponses()));
        
        PersonalityTest saved = testRepository.save(test);
        return convertToResponse(saved);
    }
    
    public List<PersonalityTestDto.PersonalityTestResponse> getTestsByUser(UUID userId) {
        return testRepository.findByUserIdOrderByDateTestDesc(userId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public PersonalityTestDto.PersonalityTestResponse getTestById(UUID id) {
        PersonalityTest test = testRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Test non trouvé avec l'ID: " + id));
        return convertToResponse(test);
    }
    
    public PersonalityTestDto.PersonalityTestResponse getLatestTestByUser(UUID userId) {
        List<PersonalityTest> tests = testRepository.findByUserIdOrderByDateTestDesc(userId);
        if (tests.isEmpty()) {
            // Return null instead of throwing exception - let controller handle empty response
            return null;
        }
        return convertToResponse(tests.get(0));
    }
    
    public List<PersonalityTestDto.PersonalityTestResponse> getAllTests() {
        return testRepository.findAll()
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    private Integer calculateScore(java.util.Map<String, String> reponses) {
        if (reponses == null || reponses.isEmpty()) return 0;
        return Math.min(100, reponses.size() * 10);
    }
    
    private PersonalityTestDto.PersonalityTestResponse convertToResponse(PersonalityTest test) {
        PersonalityTestDto.PersonalityTestResponse response = new PersonalityTestDto.PersonalityTestResponse();
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
