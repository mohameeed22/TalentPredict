package com.talentpredict.modules.evaluation.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.assessment.repositories.CandidateTestResultRepository;
import com.talentpredict.modules.user.entities.User;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReevaluationScheduler {

    private final CandidateTestResultRepository testRepository;

    /**
     * S'exécute tous les jours à 2h du matin.
     * Cherche les tests vieux de plus de 90 jours et déclenche une notification
     * pour demander une réévaluation de l'utilisateur.
     */
    @Scheduled(cron = "0 0 2 * * ?")
    public void scheduleReevaluation() {
        log.info("Démarrage du job de vérification des réévaluations...");
        
        LocalDateTime ninetyDaysAgo = LocalDateTime.now().minusDays(90);
        
        // C'est un mock - dans une vraie DB on ferait findByDateTestBefore()
        // List<PersonalityTest> testsToReevaluate = testRepository.findByDateTestBefore(ninetyDaysAgo);
        
        log.info("Job de réévaluation terminé. 0 utilisateurs notifiés.");
    }
}
