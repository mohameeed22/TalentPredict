//9dim
 package com.talentpredict.modules.ai.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.ai.entities.Recommendation;
import com.talentpredict.modules.ai.repositories.RecommendationRepository;
import com.talentpredict.modules.user.entities.User;
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
    
    public Recommendation updateRecommendation(UUID id, Recommendation recommendationDetails) {
        Recommendation recommendation = recommendationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Recommendation not found with id: " + id));
        
        recommendation.setTitre(recommendationDetails.getTitre());
        recommendation.setDescription(recommendationDetails.getDescription());
        recommendation.setScore(recommendationDetails.getScore());
        recommendation.setPriorite(recommendationDetails.getPriorite());
        recommendation.setDateModification(LocalDateTime.now());
        
        return recommendationRepository.save(recommendation);
    }
    
    public Recommendation getRecommendationById(UUID id) {
        return recommendationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Recommendation not found with id: " + id));
    }
    
    public List<Recommendation> getRecommendationsByUser(User account) {
        return recommendationRepository.findByUser(account);
    }
    
    public List<Recommendation> getAllRecommendations() {
        return recommendationRepository.findAll();
    }
    
    public void deleteRecommendation(UUID id) {
        recommendationRepository.deleteById(id);
    }
}
