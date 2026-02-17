package com.talentpredict.modules.skills.repository;

import com.talentpredict.modules.skills.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    
    List<Skill> findByUserId(Long userId);
    
    List<Skill> findByUserIdAndValideeTrue(Long userId);
    
    List<Skill> findByUserIdAndType(Long userId, Skill.TypeSkill type);
}
