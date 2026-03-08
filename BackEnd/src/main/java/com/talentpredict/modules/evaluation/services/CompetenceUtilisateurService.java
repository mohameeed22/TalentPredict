package com.talentpredict.modules.evaluation.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.talentpredict.modules.user.entities.User;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.evaluation.entities.Competence;
import com.talentpredict.modules.evaluation.entities.CompetenceAccount;
import com.talentpredict.modules.evaluation.repositories.CompetenceUtilisateurRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class CompetenceUtilisateurService {
    
    private final CompetenceUtilisateurRepository competenceUtilisateurRepository;
    
    public CompetenceUtilisateurService(CompetenceUtilisateurRepository competenceUtilisateurRepository) {
        this.competenceUtilisateurRepository = competenceUtilisateurRepository;
    }
    
    public CompetenceAccount createCompetenceUtilisateur(CompetenceAccount competenceAccount) {
        competenceAccount.setDateCreation(LocalDateTime.now());
        competenceAccount.setDateModification(LocalDateTime.now());
        return competenceUtilisateurRepository.save(competenceAccount);
    }
    
    public CompetenceAccount updateCompetenceUtilisateur(UUID id, CompetenceAccount competenceAccountDetails) {
        CompetenceAccount competenceAccount = competenceUtilisateurRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("CompetenceUtilisateur not found with id: " + id));
        
        competenceAccount.setScore(competenceAccountDetails.getScore());
        competenceAccount.setDateEvaluation(LocalDateTime.now());
        competenceAccount.setDateModification(LocalDateTime.now());
        
        return competenceUtilisateurRepository.save(competenceAccount);
    }
    
    public CompetenceAccount getCompetenceUtilisateurById(UUID id) {
        return competenceUtilisateurRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("CompetenceUtilisateur not found with id: " + id));
    }
    
    public List<CompetenceAccount> getCompetenceUtilisateurByUser(User account) {
        return competenceUtilisateurRepository.findByUser(account);
    }
    
    public List<CompetenceAccount> getCompetenceUtilisateurByCompetence(Competence competence) {
        return competenceUtilisateurRepository.findByCompetence(competence);
    }
    
    public Optional<CompetenceAccount> getCompetenceUtilisateurByUserAndCompetence(User account, Competence competence) {
        return competenceUtilisateurRepository.findByUserAndCompetence(account, competence);
    }
    
    public List<CompetenceAccount> getAllCompetenceUtilisateurs() {
        return competenceUtilisateurRepository.findAll();
    }
    
    public void deleteCompetenceUtilisateur(UUID id) {
        competenceUtilisateurRepository.deleteById(id);
    }
}
