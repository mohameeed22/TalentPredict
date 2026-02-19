package com.talentpredict.modules.evaluation.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.talentpredict.modules.auth.model.Profil;
import com.talentpredict.modules.evaluation.model.PCMResult;
import com.talentpredict.modules.evaluation.repository.PCMResultRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

@Service
public class PCMResultService {
    
    private final PCMResultRepository pcmResultRepository;
    
    public PCMResultService(PCMResultRepository pcmResultRepository) {
        this.pcmResultRepository = pcmResultRepository;
    }
    
    public PCMResult createPCMResult(PCMResult pcmResult) {
        pcmResult.setDateCreation(LocalDateTime.now());
        pcmResult.setDateModification(LocalDateTime.now());
        pcmResult.setDateEvaluation(LocalDateTime.now());
        return pcmResultRepository.save(pcmResult);
    }
    
    public PCMResult updatePCMResult(Long id, PCMResult pcmResultDetails) {
        PCMResult pcmResult = pcmResultRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("PCMResult not found with id: " + id));
        
        pcmResult.setTypePCM(pcmResultDetails.getTypePCM());
        pcmResult.setScoreTravail(pcmResultDetails.getScoreTravail());
        pcmResult.setScoreSecondaire(pcmResultDetails.getScoreSecondaire());
        pcmResult.setScoreReactif(pcmResultDetails.getScoreReactif());
        pcmResult.setScoreRebelle(pcmResultDetails.getScoreRebelle());
        pcmResult.setDateEvaluation(LocalDateTime.now());
        pcmResult.setDateModification(LocalDateTime.now());
        
        return pcmResultRepository.save(pcmResult);
    }
    
    public PCMResult getPCMResultById(Long id) {
        return pcmResultRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("PCMResult not found with id: " + id));
    }
    
    public List<PCMResult> getPCMResultsByProfil(Profil profil) {
        return pcmResultRepository.findByProfil(profil);
    }
    
    public List<PCMResult> getAllPCMResults() {
        return pcmResultRepository.findAll();
    }
    
    public void deletePCMResult(Long id) {
        pcmResultRepository.deleteById(id);
    }
}
