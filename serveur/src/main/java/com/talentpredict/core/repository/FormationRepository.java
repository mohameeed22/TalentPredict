package com.talentpredict.core.repository;

import com.talentpredict.core.model.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Long> {
    
    List<Formation> findByUtilisateurId(Long utilisateurId);
    
    List<Formation> findByUtilisateurIdAndStatut(Long utilisateurId, Formation.StatutFormation statut);
    
    List<Formation> findByStatut(Formation.StatutFormation statut);
    
    Long countByUtilisateurId(Long utilisateurId);
    
    Long countByUtilisateurIdAndStatut(Long utilisateurId, Formation.StatutFormation statut);
}
