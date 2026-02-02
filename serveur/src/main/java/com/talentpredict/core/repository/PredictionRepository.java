package com.talentpredict.core.repository;

import com.talentpredict.core.model.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PredictionRepository extends JpaRepository<Prediction, Long> {
    
    List<Prediction> findByUtilisateurId(Long utilisateurId);
    
    List<Prediction> findByUtilisateurIdOrderByDatePredictionDesc(Long utilisateurId);
    
    Optional<Prediction> findFirstByUtilisateurIdOrderByDatePredictionDesc(Long utilisateurId);
}
