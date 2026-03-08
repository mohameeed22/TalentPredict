package com.talentpredict.modules.auth.services;

import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;
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

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final PasswordResetTokenRepository passwordResetTokenRepository;

    /** Optional: injected only if mail is configured. Won't fail if absent. */
    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Override
    @Transactional
    public User createUser(AuthDto.RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ConflictException("Email '" + request.getEmail() + "' is already in use");
        }

        User user = new User();
        user.setLastName(request.getLastName());
        user.setFirstName(request.getFirstName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        // Set role from request — default to USER for safety
        User.Role role = (request.getRole() != null) ? request.getRole() : User.Role.USER;
        user.setRole(role);

        log.info("Creating user for {} with role={}", request.getEmail(), role);
        return userRepository.save(user);
    }

    @Override
    public User getUserById(UUID targetUserId) {
        return userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("user not found with id: " + targetUserId));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("user not found with email: " + email));
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
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());
        if (userOpt.isEmpty()) {
            log.info("Forgot-password: no account found for {} — silent return (security)", request.getEmail());
            return "Si votre email est enregistré, vous recevrez un lien de réinitialisation.";
        }

        User user = userOpt.get();
        String token = UUID.randomUUID().toString();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(15);

        PasswordResetToken resetToken = new PasswordResetToken(token, user, expiry);
        passwordResetTokenRepository.save(resetToken);

        // Try to send email — if not configured, fall back to console log
        try {
            if (mailSender != null) {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(user.getEmail());
                mail.setSubject("TalentPredict — Réinitialisation de votre mot de passe");
                mail.setText(
                        "Bonjour " + user.getFirstName() + ",\n\n" +
                                "Cliquez sur ce lien pour réinitialiser votre mot de passe (valide 15 min) :\n" +
                                "http://localhost:4200/auth/reset-password?token=" + token + "\n\n" +
                                "Si vous n'avez pas fait cette demande, ignorez cet email.\n\n" +
                                "— Équipe TalentPredict");
                mailSender.send(mail);
                log.info("Password reset email sent to {}", user.getEmail());
            } else {
                log.info("Mail not configured — RESET TOKEN for {}: {}", user.getEmail(), token);
            }
        } catch (Exception e) {
            log.warn("Failed to send reset email to {}, logging token instead: {}", user.getEmail(), token);
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

        User user = resetToken.getUser();
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        resetToken.setUsed(true);
        passwordResetTokenRepository.save(resetToken);

        log.info("Password successfully reset for account: {}", user.getEmail());
        return "Mot de passe mis à jour avec succès !";
    }
}
