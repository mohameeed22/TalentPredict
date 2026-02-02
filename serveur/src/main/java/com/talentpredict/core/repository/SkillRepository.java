package com.talentpredict.core.repository;

import com.talentpredict.core.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    
    List<Skill> findByUtilisateurId(Long utilisateurId);
    
    List<Skill> findByUtilisateurIdAndType(Long utilisateurId, Skill.TypeSkill type);
    
    List<Skill> findByUtilisateurIdAndValidee(Long utilisateurId, Boolean validee);
}
