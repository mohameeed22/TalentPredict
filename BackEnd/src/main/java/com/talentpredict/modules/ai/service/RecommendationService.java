package com.talentpredict.modules.ai.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.ai.model.Recommendation;
import com.talentpredict.modules.ai.repository.RecommendationRepository;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class RecommendationService {
    
    private final RecommendationRepository recommendationRepository;
    
    public RecommendationService(RecommendationRepository recommendationRepository) {
        this.recommendationRepository = recommendationRepository;
    }
    
    public Recommendation createRecommendation(Recommendation recommendation) {
        recommendation.setDateCreation(LocalDateTime.now());
        recommendation.setDateModification(LocalDateTime.now());
        recommendation.setDateGeneration(LocalDateTime.now());
        return recommendationRepository.save(recommendation);
    }
    
    public Recommendation updateRecommendation(Long id, Recommendation recommendationDetails) {
        Recommendation recommendation = recommendationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Recommendation not found with id: " + id));
        
        recommendation.setTitre(recommendationDetails.getTitre());
        recommendation.setDescription(recommendationDetails.getDescription());
        recommendation.setScore(recommendationDetails.getScore());
        recommendation.setPriorite(recommendationDetails.getPriorite());
        recommendation.setDateModification(LocalDateTime.now());
        
        return recommendationRepository.save(recommendation);
    }
    
    public Recommendation getRecommendationById(Long id) {
        return recommendationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Recommendation not found with id: " + id));
    }
    
    public List<Recommendation> getRecommendationsByUser(User user) {
        return recommendationRepository.findByUser(user);
    }
    
    public List<Recommendation> getAllRecommendations() {
        return recommendationRepository.findAll();
    }
    
    public void deleteRecommendation(Long id) {
        recommendationRepository.deleteById(id);
    }
}
