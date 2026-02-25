package com.talentpredict.shared.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.repositories.AccountRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


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
            admin.setLastName("doe");
            admin.setFirstName("john");
            admin.setEmail("admin@talentpredict.com");
            admin.setPassword(passwordEncoder.encode("password"));
            admin.setRole(Account.Role.ADMIN);
            admin.setIsActive(true);
            accountRepository.save(admin);
            log.info("=======================================================");
            log.info("  Default admin account created:");
            log.info("  Email   : admin@talentpredict.com");
            log.info("  Password: password");
            log.info("=======================================================");
        } else {
            log.info("Admin account already exists. Skipping seed.");
        }
    }
}
