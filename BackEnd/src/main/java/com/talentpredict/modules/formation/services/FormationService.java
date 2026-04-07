package com.talentpredict.modules.formation.services;

import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.formation.repositories.FormationRepository;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Formation Module - Formation Management Service
 * Core functionality: Manage training programs, track progress, and handle account enrollments
 */
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class FormationService {
    
    private final FormationRepository formationRepository;
    private final AuthServiceImpl authServiceImpl;
    
    @Transactional
    public FormationDto.FormationResponse creerFormation(UUID accountId, FormationDto.FormationRequest request) {
        User user = authServiceImpl.getUserById(accountId);
        
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
    
    public List<FormationDto.FormationResponse> getFormationsByUser(UUID userId) {
        return formationRepository.findByUserId(userId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public FormationDto.FormationResponse getFormationById(UUID id) {
        Formation formation = formationRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + id));
        return convertToResponse(formation);
    }
    
    @Transactional
    public FormationDto.FormationResponse updateStatut(UUID formationId, Formation.StatutFormation statut) {
        Formation formation = formationRepository.findById(formationId)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + formationId));
        formation.setStatut(statut);
        return convertToResponse(formationRepository.save(formation));
    }
    
    @Transactional
    public FormationDto.FormationResponse updateProgression(UUID formationId, Integer progression) {
        Formation formation = formationRepository.findById(formationId)
            .orElseThrow(() -> new ResourceNotFoundException("Formation non trouvée avec l'ID: " + formationId));
        formation.setProgression(Math.min(100, Math.max(0, progression)));
        
        if (progression >= 100) {
            formation.setStatut(Formation.StatutFormation.TERMINEE);
        }
        
        return convertToResponse(formationRepository.save(formation));
    }
    
    public Long countFormationsByUser(UUID userId) {
        return formationRepository.countByUserId(userId);
    }
    
    public Long countFormationsByUserAndStatut(UUID userId, Formation.StatutFormation statut) {
        return formationRepository.countByUserIdAndStatut(userId, statut);
    }
    
    private FormationDto.FormationResponse convertToResponse(Formation formation) {
        FormationDto.FormationResponse response = new FormationDto.FormationResponse();
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
