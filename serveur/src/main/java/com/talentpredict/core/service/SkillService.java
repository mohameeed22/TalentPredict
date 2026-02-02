package com.talentpredict.core.service;

import com.talentpredict.core.dto.SkillRequest;
import com.talentpredict.core.dto.SkillResponse;
import com.talentpredict.core.exception.ResourceNotFoundException;
import com.talentpredict.core.model.Skill;
import com.talentpredict.core.model.Utilisateur;
import com.talentpredict.core.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SkillService {
    
    private final SkillRepository skillRepository;
    private final UtilisateurService utilisateurService;
    
    @Transactional
    public SkillResponse creerSkill(Long utilisateurId, SkillRequest request) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(utilisateurId);
        
        Skill skill = new Skill();
        skill.setUtilisateur(utilisateur);
        skill.setNom(request.getNom());
        skill.setType(request.getType());
        skill.setNiveau(request.getNiveau());
        skill.setDescription(request.getDescription());
        skill.setValidee(false);
        
        Skill saved = skillRepository.save(skill);
        return convertToResponse(saved);
    }
    
    public List<SkillResponse> getSkillsByUtilisateur(Long utilisateurId) {
        return skillRepository.findByUtilisateurId(utilisateurId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public List<SkillResponse> getSkillsByUtilisateurAndType(Long utilisateurId, Skill.TypeSkill type) {
        return skillRepository.findByUtilisateurIdAndType(utilisateurId, type)
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
