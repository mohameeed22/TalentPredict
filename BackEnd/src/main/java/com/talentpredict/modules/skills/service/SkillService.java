package com.talentpredict.modules.skills.service;

import com.talentpredict.modules.skills.dto.SkillRequest;
import com.talentpredict.modules.skills.dto.SkillResponse;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.modules.skills.model.Skill;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.skills.repository.SkillRepository;
import com.talentpredict.modules.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Skills Module - Skill Management Service
 * Core functionality: Manage user skills, validate competencies, and track skill development
 */
@Service
@RequiredArgsConstructor
public class SkillService {
    
    private final SkillRepository skillRepository;
    private final UserService userService;
    
    @Transactional
    public SkillResponse creerSkill(Long userId, SkillRequest request) {
        User user = userService.getUserById(userId);
        
        Skill skill = new Skill();
        skill.setUser(user);
        skill.setNom(request.getNom());
        skill.setType(request.getType());
        skill.setNiveau(request.getNiveau());
        skill.setDescription(request.getDescription());
        skill.setValidee(false);
        
        Skill saved = skillRepository.save(skill);
        return convertToResponse(saved);
    }
    
    public List<SkillResponse> getSkillsByUser(Long userId) {
        return skillRepository.findByUserId(userId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public List<SkillResponse> getSkillsByUserAndType(Long userId, Skill.TypeSkill type) {
        return skillRepository.findByUserIdAndType(userId, type)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    @Transactional
    public SkillResponse validerSkill(Long skillId) {
        Skill skill = skillRepository.findById(skillId)
            .orElseThrow(() -> new ResourceNotFoundException("Skill non trouvé avec l'ID: " + skillId));
        skill.setValidee(true);
        return convertToResponse(skillRepository.save(skill));
    }
    
    @Transactional
    public void supprimerSkill(Long skillId) {
        if (!skillRepository.existsById(skillId)) {
            throw new ResourceNotFoundException("Skill non trouvé avec l'ID: " + skillId);
        }
        skillRepository.deleteById(skillId);
    }
    
    private SkillResponse convertToResponse(Skill skill) {
        SkillResponse response = new SkillResponse();
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
