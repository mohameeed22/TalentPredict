package com.talentpredict.shared.config;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.auth.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        if (!userRepository.existsByEmail("admin@talentpredict.com")) {
            User admin = new User();
            admin.setNom("Admin");
            admin.setPrenom("System");
            admin.setEmail("admin@talentpredict.com");
            admin.setMotDePasse(passwordEncoder.encode("Admin@1234"));
            admin.setRole(User.Role.ADMIN);
            admin.setIsActive(true);
            userRepository.save(admin);
            log.info("=======================================================");
            log.info("  Default admin user created:");
            log.info("  Email   : admin@talentpredict.com");
            log.info("  Password: Admin@1234");
            log.info("=======================================================");
        } else {
            log.info("Admin user already exists. Skipping seed.");
        }
    }
}
