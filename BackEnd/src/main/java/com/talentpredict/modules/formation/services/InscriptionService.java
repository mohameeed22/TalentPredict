package com.talentpredict.modules.formation.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.talentpredict.modules.user.entities.User;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.formation.entities.Inscription;
import com.talentpredict.modules.formation.repositories.InscriptionRepository;
import com.talentpredict.shared.exception.BadRequestException;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class InscriptionService {
    
    private final InscriptionRepository inscriptionRepository;
    
    public InscriptionService(InscriptionRepository inscriptionRepository) {
        this.inscriptionRepository = inscriptionRepository;
    }
    
    public Inscription inscrire(User account, Formation formation) {
        Optional<Inscription> existing = inscriptionRepository.findByUserAndFormation(account, formation);
        if (existing.isPresent()) {
            throw new BadRequestException("L'utilisateur est déjà inscrit à cette formation");
        }
        
        Inscription inscription = new Inscription();
        inscription.setUser(account);
        inscription.setFormation(formation);
        return inscriptionRepository.save(inscription);
    }
    
    public void annuler(UUID inscriptionId) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + inscriptionId));
        inscription.setStatut(Inscription.StatutInscription.TERMINEE_ANNULEE);
        inscriptionRepository.save(inscription);
    }
    
    public Inscription terminer(UUID inscriptionId, Double noteFinale) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + inscriptionId));
        inscription.setStatut(Inscription.StatutInscription.TERMINEE_ANNULEE);
        inscription.setNoteFinale(noteFinale);
        inscription.setProgression(100);
        return inscriptionRepository.save(inscription);
    }
    
    public Inscription updateProgression(UUID inscriptionId, Integer progression) {
        Inscription inscription = inscriptionRepository.findById(inscriptionId)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + inscriptionId));
        inscription.setProgression(progression);
        return inscriptionRepository.save(inscription);
    }
    
    public Inscription getInscriptionById(UUID id) {
        return inscriptionRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Inscription not found with id: " + id));
    }
    
    public List<Inscription> getInscriptionsByUser(User account) {
        return inscriptionRepository.findByUser(account);
    }
    
    public List<Inscription> getInscriptionsByFormation(Formation formation) {
        return inscriptionRepository.findByFormation(formation);
    }
    
    public List<Inscription> getAllInscriptions() {
        return inscriptionRepository.findAll();
    }
}
