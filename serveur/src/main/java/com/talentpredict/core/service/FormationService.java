package com.talentpredict.core.service;

import com.talentpredict.core.dto.FormationRequest;
import com.talentpredict.core.dto.FormationResponse;
import com.talentpredict.core.exception.ResourceNotFoundException;
import com.talentpredict.core.model.Formation;
import com.talentpredict.core.model.Utilisateur;
import com.talentpredict.core.repository.FormationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FormationService {
    
    private final FormationRepository formationRepository;
    private final UtilisateurService utilisateurService;
    
    @Transactional
    public FormationResponse creerFormation(Long utilisateurId, FormationRequest request) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(utilisateurId);
        
        Formation formation = new Formation();
        formation.setUtilisateur(utilisateur);
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
    
    public List<FormationResponse> getFormationsByUtilisateur(Long utilisateurId) {
        return formationRepository.findByUtilisateurId(utilisateurId)
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
    
    public Long countFormationsByUtilisateur(Long utilisateurId) {
        return formationRepository.countByUtilisateurId(utilisateurId);
    }
    
    public Long countFormationsByUtilisateurAndStatut(Long utilisateurId, Formation.StatutFormation statut) {
        return formationRepository.countByUtilisateurIdAndStatut(utilisateurId, statut);
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
