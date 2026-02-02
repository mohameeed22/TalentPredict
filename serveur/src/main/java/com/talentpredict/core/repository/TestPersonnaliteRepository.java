package com.talentpredict.core.repository;

import com.talentpredict.core.model.TestPersonnalite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestPersonnaliteRepository extends JpaRepository<TestPersonnalite, Long> {
    
    List<TestPersonnalite> findByUtilisateurId(Long utilisateurId);
    
    List<TestPersonnalite> findByUtilisateurIdOrderByDateTestDesc(Long utilisateurId);
}
