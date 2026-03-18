package com.talentpredict.modules.auth.services;

import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.entities.PasswordResetToken;
import com.talentpredict.modules.auth.entities.RefreshToken;
import com.talentpredict.modules.auth.repositories.PasswordResetTokenRepository;
import com.talentpredict.modules.auth.repositories.RefreshTokenRepository;
import com.talentpredict.shared.exception.ConflictException;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.shared.security.JwtService;
import com.talentpredict.shared.sms.SmsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements IAuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final TokenBlocklistService tokenBlocklistService;
    private final AuditLogService auditLogService;
    private final JwtService jwtService;
    private final SmsService smsService;

    @Value("${frontend.base-url:http://localhost:4200}")
    private String frontendBaseUrl;

    @Value("${security.login.max-failed-attempts:5}")
    private int maxFailedAttempts;

    @Value("${security.login.lock-duration-minutes:15}")
    private long lockDurationMinutes;

    /** Optional: injected only if mail is configured. Won't fail if absent. */
    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Override
    @Transactional
    public User createUser(AuthDto.RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ConflictException("Email '" + request.getEmail() + "' is already in use");
        }

        if (request.getPhoneNumber() != null && !request.getPhoneNumber().isBlank()
                && userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new ConflictException("Phone number '" + request.getPhoneNumber() + "' is already in use");
        }

        User user = new User();
        user.setLastName(request.getLastName());
        user.setFirstName(request.getFirstName());
        user.setEmail(request.getEmail());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        // Set role from request — default to USER for safety
        User.Role role = (request.getRole() != null) ? request.getRole() : User.Role.USER;
        user.setRole(role);

        log.info("Creating user for {} with role={}", request.getEmail(), role);
        return userRepository.save(user);
    }

    @Override
    public User getUserById(UUID targetUserId) {
        UUID safeTargetUserId = Objects.requireNonNull(targetUserId, "targetUserId must not be null");
        return userRepository.findById(safeTargetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("user not found with id: " + targetUserId));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("user not found with email: " + email));
    }

    @Transactional
    public void recordFailedLoginAttempt(String email) {
        userRepository.findByEmail(email).ifPresent(user -> {
            Integer currentAttempts = user.getFailedLoginAttempts();
            int nextAttempts = (currentAttempts != null ? currentAttempts : 0) + 1;
            user.setFailedLoginAttempts(nextAttempts);

            if (nextAttempts >= maxFailedAttempts) {
                user.setLockUntil(Instant.now().plusSeconds(lockDurationMinutes * 60));
                user.setFailedLoginAttempts(0);
                log.warn("Account temporarily locked for {} after too many failed attempts", email);
                auditLogService.logAccountLocked(email, "127.0.0.1"); // IP should come from HTTP request
            }

            userRepository.save(user);
        });
    }

    @Transactional
    public void registerSuccessfulLogin(String email) {
        userRepository.findByEmail(email).ifPresent(user -> {
            user.setFailedLoginAttempts(0);
            user.setLockUntil(null);
            user.setLastLoginAt(Instant.now());
            userRepository.save(user);
        });
    }

    /**
     * Generate a refresh token for the user
     */
    @Transactional
    public String generateRefreshToken(User user, String deviceId) {
        String token = jwtService.generateRefreshToken(user.getEmail());
        Instant expiryDate = Instant.now().plusSeconds(604800); // 7 days

        RefreshToken refreshToken = RefreshToken.builder()
            .token(token)
            .user(user)
            .expiryDate(expiryDate)
            .deviceId(deviceId)
            .build();

        refreshTokenRepository.save(refreshToken);
        log.info("Refresh token generated for user: {}", user.getEmail());
        return token;
    }

    /**
     * Validate and refresh access token using refresh token
     */
    @Transactional
    public String refreshAccessToken(String refreshToken) {
        Optional<RefreshToken> tokenOpt = refreshTokenRepository.findByToken(refreshToken);

        if (tokenOpt.isEmpty() || !tokenOpt.get().isValid()) {
            throw new IllegalArgumentException("Invalid or expired refresh token");
        }

        RefreshToken rtToken = tokenOpt.get();
        User user = rtToken.getUser();

        // Revoke old refresh token (token rotation)
        rtToken.setRevoked(true);
        refreshTokenRepository.save(rtToken);

        // Generate new access token and new refresh token
        String newAccessToken = jwtService.generateAccessToken(user.getEmail());
        String newRefreshToken = generateRefreshToken(user, rtToken.getDeviceId());

        log.info("Access token refreshed for user: {}", user.getEmail());
        return newAccessToken;
    }

    @Transactional
    public String changePassword(AuthDto.ChangePasswordRequest request, User currentUser) {
        UUID currentUserId = Objects.requireNonNull(currentUser.getId(), "currentUser.id must not be null");
        User user = userRepository.findById(currentUserId)
            .orElseThrow(() -> new ResourceNotFoundException("user not found with id: " + currentUserId));

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Current password is incorrect.");
        }

        if (passwordEncoder.matches(request.getNewPassword(), user.getPassword())) {
            throw new IllegalArgumentException("New password must be different from current password.");
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        // Invalidate all sessions for this user (refresh token rotation)
        refreshTokenRepository.revokeAllUserTokens(user);

        log.info("Password changed successfully for {}", user.getEmail());
        auditLogService.logPasswordChange(user, "127.0.0.1");
        return "Password updated successfully.";
    }

    // ---------------------------------------------------------------
    // TASK 3 — Forgot Password
    // ---------------------------------------------------------------

    /**
     * Initiates a password reset by generating a one-time token (valid 15 min).
     * If email is not found, returns silently (security: don't reveal valid emails).
     * If mail is not configured, the token is logged to console.
     */
    @Transactional
    public String forgotPassword(AuthDto.ForgotPasswordRequest request) {
        AuthDto.DeliveryChannel channel = request.getChannel() != null
                ? request.getChannel()
                : AuthDto.DeliveryChannel.EMAIL;

        Optional<User> userOpt;
        if (channel == AuthDto.DeliveryChannel.SMS) {
            userOpt = userRepository.findByPhoneNumber(request.getPhoneNumber());
        } else {
            userOpt = userRepository.findByEmail(request.getEmail());
        }

        if (userOpt.isEmpty()) {
            log.info("Forgot-password ({}): no account found for email={} phone={} — silent return (security)",
                    channel, request.getEmail(), request.getPhoneNumber());
            return "Si votre compte est enregistré, vous recevrez un lien de réinitialisation.";
        }

        User user = userOpt.get();
        String token = UUID.randomUUID().toString();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(15);

        PasswordResetToken resetToken = new PasswordResetToken(token, user, expiry);
        passwordResetTokenRepository.save(resetToken);

        // Try to send email — if not configured, fall back to console log
        String resetLink = frontendBaseUrl + "/auth/reset-password?token=" + token;

        if (channel == AuthDto.DeliveryChannel.SMS) {
            smsService.sendResetToken(user.getPhoneNumber(), resetLink, token);
        } else {
            try {
                if (mailSender != null) {
                    SimpleMailMessage mail = new SimpleMailMessage();
                    mail.setTo(user.getEmail());
                    mail.setSubject("TalentPredict — Réinitialisation de votre mot de passe");
                    mail.setText(
                            "Bonjour " + user.getFirstName() + ",\n\n" +
                                    "Cliquez sur ce lien pour réinitialiser votre mot de passe (valide 15 min) :\n" +
                                    resetLink + "\n\n" +
                                    "Si vous n'avez pas fait cette demande, ignorez cet email.\n\n" +
                                    "— Équipe TalentPredict");
                    mailSender.send(mail);
                    log.info("Password reset email sent to {}", user.getEmail());
                } else {
                    log.info("Mail not configured — RESET TOKEN for {}: {}", user.getEmail(), token);
                }
            } catch (RuntimeException e) {
                log.warn("Failed to send reset email to {}, logging token instead: {}", user.getEmail(), token);
            }
        }

        return "Si votre compte est enregistré, vous recevrez un lien de réinitialisation.";
    }

    /**
     * Validates the token and resets the password.
     * Invalidates all existing sessions after reset.
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

        // Invalidate all refresh tokens (session revocation)
        refreshTokenRepository.revokeAllUserTokens(user);

        log.info("Password successfully reset for account: {}", user.getEmail());
        auditLogService.logPasswordReset(user, "127.0.0.1");
        return "Mot de passe mis à jour avec succès !";
    }
}
