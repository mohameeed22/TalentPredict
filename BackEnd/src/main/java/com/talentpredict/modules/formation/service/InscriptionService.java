package com.talentpredict.modules.formation.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.auth.model.StatutInscription;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.formation.model.Formation;
import com.talentpredict.modules.formation.model.Inscription;
import com.talentpredict.modules.formation.repository.InscriptionRepository;
import com.talentpredict.shared.exception.BadRequestException;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class InscriptionService {
    
    private final InscriptionRepository inscriptionRepository;
    
    public InscriptionService(InscriptionRepository inscriptionRepository) {
        this.inscriptionRepository = inscriptionRepository;
    }
    
    public Inscription inscrire(User user, Formation formation) {
        Optional<Inscription> existing = inscriptionRepository.findByUserAndFormation(user, formation);
        if (existing.isPresent()) {
            throw new BadRequestException("L'utilisateur est déjà inscrit à cette formation");
        }
        
        Inscription inscription = new Inscription(user, formation);
        inscription.setDateCreation(LocalDateTime.now());
        inscription.setDateModification(LocalDateTime.now());
        return inscriptionRepository.save(inscription);
    }
    
    public void annuler(Long inscriptionId) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + inscriptionId));
        inscription.setStatut(StatutInscription.TERMINEE_ANNULEE);
        inscription.setDateModification(LocalDateTime.now());
        inscriptionRepository.save(inscription);
    }
    
    public Inscription terminer(Long inscriptionId, Double noteFinale) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + inscriptionId));
        inscription.setStatut(StatutInscription.TERMINEE_ANNULEE);
        inscription.setNoteFinale(noteFinale);
        inscription.setProgression(100);
        inscription.setDateModification(LocalDateTime.now());
        return inscriptionRepository.save(inscription);
    }
    
    public Inscription updateProgression(Long inscriptionId, Integer progression) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + inscriptionId));
        inscription.setProgression(progression);
        inscription.setDateModification(LocalDateTime.now());
        return inscriptionRepository.save(inscription);
    }
    
    public Inscription getInscriptionById(Long id) {
        return inscriptionRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + id));
    }
    
    public List<Inscription> getInscriptionsByUser(User user) {
        return inscriptionRepository.findByUser(user);
    }
    
    public List<Inscription> getInscriptionsByFormation(Formation formation) {
        return inscriptionRepository.findByFormation(formation);
    }
    
    public List<Inscription> getAllInscriptions() {
        return inscriptionRepository.findAll();
    }
}
