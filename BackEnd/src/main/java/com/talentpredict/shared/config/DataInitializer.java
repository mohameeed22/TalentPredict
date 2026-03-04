package com.talentpredict.shared.config;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.repositories.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements ApplicationRunner {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        if (!accountRepository.existsByEmail("admin@talentpredict.com")) {
            Account admin = new Account();
            admin.setFirstName("Admin");
            admin.setLastName("TalentPredict");
            admin.setEmail("admin@talentpredict.com");
            admin.setPassword(passwordEncoder.encode("Admin@123"));
            admin.setRole(Account.Role.ADMIN);
            admin.setIsActive(true);
            accountRepository.save(admin);
            log.info("=======================================================");
            log.info("  Default admin account created:");
            log.info("  Email   : admin@talentpredict.com");
            log.info("  Password: Admin@123");
            log.info("  Role    : ADMIN");
            log.info("=======================================================");
        } else {
            log.info("Admin account already exists. Skipping seed.");
        }
    }
}
