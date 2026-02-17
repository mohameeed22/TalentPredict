package com.talentpredict.modules.formation.service;

import com.talentpredict.modules.formation.dto.FormationRequest;
import com.talentpredict.modules.formation.dto.FormationResponse;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.modules.formation.model.Formation;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.formation.repository.FormationRepository;
import com.talentpredict.modules.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Formation Module - Formation Management Service
 * Core functionality: Manage training programs, track progress, and handle user enrollments
 */
@Service
@RequiredArgsConstructor
public class FormationService {
    
    private final FormationRepository formationRepository;
    private final UserService userService;
    
    @Transactional
    public FormationResponse creerFormation(Long userId, FormationRequest request) {
        User user = userService.getUserById(userId);
        
        Formation formation = new Formation();
        formation.setUser(user);
        formation.setTitre(request.getTitre());
        formation.setDescription(request.getDescription());
        formation.setType(request.getType());
        formation.setDuree(request.getDuree());
        formation.setFournisseur(request.getFournisseur());
        formation.setUrl(request.getUrl());
        formation.setDateDebut(request.getDateDebut());
        formation.setStatut(Formation.StatutFormation.PROPOSEE);
        
        Formation saved = formationRepository.save(formation);
        return convertToResponse(saved);
    }
    
    public List<FormationResponse> getFormationsByUser(Long userId) {
        return formationRepository.findByUserId(userId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public FormationResponse getFormationById(Long id) {
        Formation formation = formationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + id));
        return convertToResponse(formation);
    }
    
    @Transactional
    public FormationResponse updateStatut(Long formationId, Formation.StatutFormation statut) {
        Formation formation = formationRepository.findById(formationId)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + formationId));
        formation.setStatut(statut);
        return convertToResponse(formationRepository.save(formation));
    }
    
    @Transactional
    public FormationResponse updateProgression(Long formationId, Integer progression) {
        Formation formation = formationRepository.findById(formationId)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + formationId));
        formation.setProgression(Math.min(100, Math.max(0, progression)));
        
        if (progression >= 100) {
            formation.setStatut(Formation.StatutFormation.TERMINEE);
        }
        
        return convertToResponse(formationRepository.save(formation));
    }
    
    public Long countFormationsByUser(Long userId) {
        return formationRepository.countByUserId(userId);
    }
    
    public Long countFormationsByUserAndStatut(Long userId, Formation.StatutFormation statut) {
        return formationRepository.countByUserIdAndStatut(userId, statut);
    }
    
    private FormationResponse convertToResponse(Formation formation) {
        FormationResponse response = new FormationResponse();
        response.setId(formation.getId());
        response.setTitre(formation.getTitre());
        response.setDescription(formation.getDescription());
        response.setType(formation.getType());
        response.setDuree(formation.getDuree());
        response.setFournisseur(formation.getFournisseur());
        response.setUrl(formation.getUrl());
        response.setStatut(formation.getStatut());
        response.setDateProposition(formation.getDateProposition());
        response.setDateDebut(formation.getDateDebut());
        response.setDateFin(formation.getDateFin());
        response.setProgression(formation.getProgression());
        return response;
    }
}
