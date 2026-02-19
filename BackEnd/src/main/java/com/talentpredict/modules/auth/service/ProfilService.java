package com.talentpredict.modules.auth.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.auth.model.Profil;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.auth.repository.ProfilRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class ProfilService {
    
    private final ProfilRepository profilRepository;
    
    public ProfilService(ProfilRepository profilRepository) {
        this.profilRepository = profilRepository;
    }
    
    public Profil createProfil(Profil profil) {
        profil.setDateCreation(LocalDateTime.now());
        profil.setDateModification(LocalDateTime.now());
        return profilRepository.save(profil);
    }
    
    public Profil updateProfil(Long id, Profil profilDetails) {
        Profil profil = profilRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Profil not found with id: " + id));
        
        profil.setTitreProfessionnel(profilDetails.getTitreProfessionnel());
        profil.setDescription(profilDetails.getDescription());
        profil.setUrlPhoto(profilDetails.getUrlPhoto());
        profil.setExperienceAns(profilDetails.getExperienceAns());
        profil.setNiveauEtudes(profilDetails.getNiveauEtudes());
        profil.setLienLinkedin(profilDetails.getLienLinkedin());
        profil.setDateModification(LocalDateTime.now());
        
        return profilRepository.save(profil);
    }
    
    public Profil getProfilById(Long id) {
        return profilRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Profil not found with id: " + id));
    }
    
    public Optional<Profil> getProfilByUser(User user) {
        return profilRepository.findByUser(user);
    }
    
    public List<Profil> getAllProfils() {
        return profilRepository.findAll();
    }
    
    public void deleteProfil(Long id) {
        profilRepository.deleteById(id);
    }
}
