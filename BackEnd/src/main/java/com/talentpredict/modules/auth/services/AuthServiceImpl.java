package com.talentpredict.modules.auth.services;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.repositories.AccountRepository;
import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.entities.PasswordResetToken;
import com.talentpredict.modules.auth.repositories.PasswordResetTokenRepository;
import com.talentpredict.shared.exception.ConflictException;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements IAuthService {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final PasswordResetTokenRepository passwordResetTokenRepository;

    /** Optional: injected only if mail is configured. Won't fail if absent. */
    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Override
    @Transactional
    public Account createAccount(AuthDto.RegisterRequest request) {
        if (accountRepository.existsByEmail(request.getEmail())) {
            throw new ConflictException("Email '" + request.getEmail() + "' is already in use");
        }

        Account account = new Account();
        account.setLastName(request.getLastName());
        account.setFirstName(request.getFirstName());
        account.setEmail(request.getEmail());
        account.setPassword(passwordEncoder.encode(request.getPassword()));

        // Set role from request — default to USER for safety
        Account.Role role = (request.getRole() != null) ? request.getRole() : Account.Role.USER;
        account.setRole(role);

        log.info("Creating account for {} with role={}", request.getEmail(), role);
        return accountRepository.save(account);
    }

    @Override
    public Account getAccountById(UUID targetAccountId) {
        return accountRepository.findById(targetAccountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with id: " + targetAccountId));
    }

    @Override
    public Account getAccountByEmail(String email) {
        return accountRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with email: " + email));
    }

    // ---------------------------------------------------------------
    // TASK 3 — Forgot Password
    // ---------------------------------------------------------------

    /**
     * Initiates a password reset by generating a one-time token (valid 15 min).
     * If email is not found, returns silently (security: don't reveal valid
     * emails).
     * If mail is not configured, the token is logged to console.
     */
    @Transactional
    public String forgotPassword(AuthDto.ForgotPasswordRequest request) {
        Optional<Account> accountOpt = accountRepository.findByEmail(request.getEmail());
        if (accountOpt.isEmpty()) {
            log.info("Forgot-password: no account found for {} — silent return (security)", request.getEmail());
            return "Si votre email est enregistré, vous recevrez un lien de réinitialisation.";
        }

        Account account = accountOpt.get();
        String token = UUID.randomUUID().toString();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(15);

        PasswordResetToken resetToken = new PasswordResetToken(token, account, expiry);
        passwordResetTokenRepository.save(resetToken);

        // Try to send email — if not configured, fall back to console log
        try {
            if (mailSender != null) {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(account.getEmail());
                mail.setSubject("TalentPredict — Réinitialisation de votre mot de passe");
                mail.setText(
                        "Bonjour " + account.getFirstName() + ",\n\n" +
                                "Cliquez sur ce lien pour réinitialiser votre mot de passe (valide 15 min) :\n" +
                                "http://localhost:4200/auth/reset-password?token=" + token + "\n\n" +
                                "Si vous n'avez pas fait cette demande, ignorez cet email.\n\n" +
                                "— Équipe TalentPredict");
                mailSender.send(mail);
                log.info("Password reset email sent to {}", account.getEmail());
            } else {
                log.info("Mail not configured — RESET TOKEN for {}: {}", account.getEmail(), token);
            }
        } catch (Exception e) {
            log.warn("Failed to send reset email to {}, logging token instead: {}", account.getEmail(), token);
        }

        return "Si votre email est enregistré, vous recevrez un lien de réinitialisation.";
    }

    /**
     * Validates the token and resets the password.
     */
    @Transactional
    public String resetPassword(AuthDto.ResetPasswordRequest request) {
        PasswordResetToken resetToken = passwordResetTokenRepository.findByToken(request.getToken())
                .orElseThrow(() -> new IllegalArgumentException("Lien invalide ou expiré."));

        if (resetToken.isUsed()) {
            throw new IllegalArgumentException("Ce lien a déjà été utilisé.");
        }

        if (resetToken.isExpired()) {
            throw new IllegalArgumentException("Ce lien est expiré. Veuillez refaire une demande.");
        }

        Account account = resetToken.getAccount();
        account.setPassword(passwordEncoder.encode(request.getNewPassword()));
        accountRepository.save(account);

        resetToken.setUsed(true);
        passwordResetTokenRepository.save(resetToken);

        log.info("Password successfully reset for account: {}", account.getEmail());
        return "Mot de passe mis à jour avec succès !";
    }
}
