package com.talentpredict.modules.formation.repository;

import com.talentpredict.modules.formation.model.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Long> {
    
    List<Formation> findByUserId(Long userId);
    
    List<Formation> findByUserIdAndStatut(Long userId, Formation.StatutFormation statut);
    
    List<Formation> findByUserIdOrderByDatePropositionDesc(Long userId);
    
    long countByUserId(Long userId);
    
    long countByUserIdAndStatut(Long userId, Formation.StatutFormation statut);
}
