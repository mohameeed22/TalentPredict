/*package com.talentpredict.modules.ai.services;

import java.time.LocalDateTime;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.ai.repositories.PredictionRepository;
import com.talentpredict.modules.user.repositories.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Periodic reevaluation scheduler.
 * - 30 days: sends reminder email to user
 * - 90 days: triggers automatic reevaluation
 */
/*@Service
@RequiredArgsConstructor
@Slf4j
public class SoftSkillsSchedulerService {

    private final UserRepository userRepo;
    private final PredictionRepository predictionRepo;
    // Inject your existing EmailService here
    // private final EmailService emailService;
    // private final SoftSkillsService softSkillsService;

    private static final int REMINDER_DAYS     = 30;
    private static final int AUTO_REEVAL_DAYS  = 90;

    @Scheduled(cron = "0 0 9 * * *") // every day at 9:00 AM
    public void checkAndNotify() {
        log.info("Running soft skills reevaluation check...");

        LocalDateTime reminderThreshold    = LocalDateTime.now().minusDays(REMINDER_DAYS);
        LocalDateTime autoReevalThreshold  = LocalDateTime.now().minusDays(AUTO_REEVAL_DAYS);

        userRepo.findAll().forEach(user -> {
            predictionRepo
                .findFirstByUserIdOrderByDatePredictionDesc(user.getId())
                .ifPresent(last -> {
                    LocalDateTime lastDate = last.getDatePrediction();

                    if (lastDate.isBefore(autoReevalThreshold)) {
                        log.info("Auto reevaluation for userId={}", user.getId());
                        // softSkillsService.reevaluate(buildDefaultRequest(user), user.getId());

                    } else if (lastDate.isBefore(reminderThreshold)) {
                        log.info("Sending reminder to userId={}", user.getId());
                        // emailService.sendSoftSkillsReminder(user.getEmail(), user.getUsername());
                    }
                });
        });

        log.info("Reevaluation check completed.");
    }
}*/
