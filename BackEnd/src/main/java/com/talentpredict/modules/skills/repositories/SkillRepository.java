package com.talentpredict.modules.skills.repositories;

import com.talentpredict.modules.skills.entities.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SkillRepository extends JpaRepository<Skill, UUID> {
    List<Skill> findByAccountId(UUID accountId);
    List<Skill> findByAccountIdAndType(UUID accountId, Skill.TypeSkill type);
}
