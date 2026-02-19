package com.talentpredict.modules.evaluation.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.evaluation.model.Competence;
import com.talentpredict.modules.evaluation.model.CompetenceUtilisateur;
import com.talentpredict.modules.evaluation.repository.CompetenceUtilisateurRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class CompetenceUtilisateurService {
    
    private final CompetenceUtilisateurRepository competenceUtilisateurRepository;
    
    public CompetenceUtilisateurService(CompetenceUtilisateurRepository competenceUtilisateurRepository) {
        this.competenceUtilisateurRepository = competenceUtilisateurRepository;
    }
    
    public CompetenceUtilisateur createCompetenceUtilisateur(CompetenceUtilisateur competenceUtilisateur) {
        competenceUtilisateur.setDateCreation(LocalDateTime.now());
        competenceUtilisateur.setDateModification(LocalDateTime.now());
        return competenceUtilisateurRepository.save(competenceUtilisateur);
    }
    
    public CompetenceUtilisateur updateCompetenceUtilisateur(Long id, CompetenceUtilisateur competenceUtilisateurDetails) {
        CompetenceUtilisateur competenceUtilisateur = competenceUtilisateurRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("CompetenceUtilisateur not found with id: " + id));
        
        competenceUtilisateur.setScore(competenceUtilisateurDetails.getScore());
        competenceUtilisateur.setDateEvaluation(LocalDateTime.now());
        competenceUtilisateur.setDateModification(LocalDateTime.now());
        
        return competenceUtilisateurRepository.save(competenceUtilisateur);
    }
    
    public CompetenceUtilisateur getCompetenceUtilisateurById(Long id) {
        return competenceUtilisateurRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("CompetenceUtilisateur not found with id: " + id));
    }
    
    public List<CompetenceUtilisateur> getCompetenceUtilisateurByUser(User user) {
        return competenceUtilisateurRepository.findByUser(user);
    }
    
    public List<CompetenceUtilisateur> getCompetenceUtilisateurByCompetence(Competence competence) {
        return competenceUtilisateurRepository.findByCompetence(competence);
    }
    
    public Optional<CompetenceUtilisateur> getCompetenceUtilisateurByUserAndCompetence(User user, Competence competence) {
        return competenceUtilisateurRepository.findByUserAndCompetence(user, competence);
    }
    
    public List<CompetenceUtilisateur> getAllCompetenceUtilisateurs() {
        return competenceUtilisateurRepository.findAll();
    }
    
    public void deleteCompetenceUtilisateur(Long id) {
        competenceUtilisateurRepository.deleteById(id);
    }
}
