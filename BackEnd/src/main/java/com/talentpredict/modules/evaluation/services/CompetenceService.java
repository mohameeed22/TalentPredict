package com.talentpredict.modules.evaluation.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.evaluation.entities.Competence;
import com.talentpredict.modules.evaluation.repositories.CompetenceRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class CompetenceService {
    
    private final CompetenceRepository competenceRepository;
    
    public CompetenceService(CompetenceRepository competenceRepository) {
        this.competenceRepository = competenceRepository;
    }
    
    public Competence createCompetence(Competence competence) {
        competence.setDateCreation(LocalDateTime.now());
        competence.setDateModification(LocalDateTime.now());
        return competenceRepository.save(competence);
    }
    
    public Competence updateCompetence(UUID id, Competence competenceDetails) {
        Competence competence = competenceRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Competence not found with id: " + id));
        
        competence.setNom(competenceDetails.getNom());
        competence.setCategorie(competenceDetails.getCategorie());
        competence.setDescription(competenceDetails.getDescription());
        competence.setNiveau(competenceDetails.getNiveau());
        competence.setDateEvaluation(LocalDateTime.now());
        competence.setDateModification(LocalDateTime.now());
        
        return competenceRepository.save(competence);
    }
    
    public Competence getCompetenceById(UUID id) {
        return competenceRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Competence not found with id: " + id));
    }
    
    public Competence getCompetenceByNom(String nom) {
        return competenceRepository.findByNom(nom);
    }
    
    public Competence getCompetenceByNomAndCategorie(String nom, String categorie) {
        return competenceRepository.findByNomAndCategorie(nom, categorie);
    }
    
    public List<Competence> getAllCompetences() {
        return competenceRepository.findAll();
    }
    
    public void deleteCompetence(UUID id) {
        competenceRepository.deleteById(id);
    }
}
