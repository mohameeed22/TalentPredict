package com.talentpredict.modules.skills.services;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Skills Module - Skill Management Service
 * Core functionality: Manage account skills, validate competencies, and track skill development
 */
@Service
@RequiredArgsConstructor
public class SkillService {
    
    private final SkillRepository skillRepository;
    private final AuthServiceImpl authServiceImpl;
    
    @Transactional
    public SkillDto.Response creerSkill(UUID accountId, SkillDto.CreateRequest createRequest) {
        Account account = authServiceImpl.getAccountById(accountId);
        
        Skill skill = new Skill();
        skill.setAccount(account);
        skill.setNom(createRequest.getNom());
        skill.setType(createRequest.getType());
        skill.setNiveau(createRequest.getNiveau());
        skill.setDescription(createRequest.getDescription());
        skill.setValidee(false);
        
        Skill saved = skillRepository.save(skill);
        return convertToResponse(saved);
    }
    
    public List<SkillDto.Response> getSkillsByAccount(UUID accountId) {
        return skillRepository.findByAccountId(accountId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public List<SkillDto.Response> getSkillsByAccountAndType(UUID accountId, Skill.TypeSkill type) {
        return skillRepository.findByAccountIdAndType(accountId, type)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    @Transactional
    public SkillDto.Response validerSkill(UUID skillId) {
        Skill skill = skillRepository.findById(skillId)
            .orElseThrow(() -> new ResourceNotFoundException("Skill non trouvé avec l'ID: " + skillId));
        skill.setValidee(true);
        return convertToResponse(skillRepository.save(skill));
    }
    
    @Transactional
    public void supprimerSkill(UUID skillId) {
        if (!skillRepository.existsById(skillId)) {
            throw new ResourceNotFoundException("Skill non trouvé avec l'ID: " + skillId);
        }
        skillRepository.deleteById(skillId);
    }
    
    private SkillDto.Response convertToResponse(Skill skill) {
        SkillDto.Response response = new SkillDto.Response();
        response.setId(skill.getId());
        response.setNom(skill.getNom());
        response.setType(skill.getType());
        response.setNiveau(skill.getNiveau());
        response.setDescription(skill.getDescription());
        response.setDateEvaluation(skill.getDateEvaluation());
        response.setValidee(skill.getValidee());
        return response;
    }
}
