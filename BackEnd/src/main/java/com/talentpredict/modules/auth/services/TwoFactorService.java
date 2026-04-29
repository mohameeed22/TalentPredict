package com.talentpredict.modules.auth.services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HexFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.talentpredict.modules.auth.entities.TwoFactorCode;
import com.talentpredict.modules.auth.repositories.TwoFactorCodeRepository;
import com.talentpredict.modules.user.entities.User;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TwoFactorService {

    private static final SecureRandom SECURE_RANDOM = new SecureRandom();

    private final TwoFactorCodeRepository twoFactorCodeRepository;
    private final com.talentpredict.shared.sms.SmsService smsService;

    @Value("${auth.two-factor.code-expiration-minutes:10}")
    private long twoFactorCodeExpirationMinutes;

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Transactional
    public void sendCode(User user, TwoFactorCode.Purpose purpose) {
        cleanupCodes();
        twoFactorCodeRepository.markUsedByUserAndPurpose(user, purpose);

        String rawCode = generateCode();
        TwoFactorCode code = TwoFactorCode.builder()
                .user(user)
                .purpose(purpose)
                .codeHash(hashCode(rawCode))
                .expiresAt(LocalDateTime.now().plusMinutes(twoFactorCodeExpirationMinutes))
                .used(false)
                .build();

        twoFactorCodeRepository.save(code);
        sendCodeByEmail(user, purpose, rawCode);
        
        if (StringUtils.hasText(user.getPhoneNumber())) {
            smsService.send2FACode(user.getPhoneNumber(), rawCode);
        }
    }

    @Transactional
    public void validateCodeOrThrow(User user, TwoFactorCode.Purpose purpose, String providedCode) {
        cleanupCodes();

        if (!StringUtils.hasText(providedCode)) {
            throw new IllegalArgumentException("2FA code is required.");
        }

        TwoFactorCode code = twoFactorCodeRepository
                .findTopByUserAndPurposeAndUsedFalseOrderByCreatedAtDesc(user, purpose)
                .orElseThrow(() -> new IllegalArgumentException("2FA code missing or expired."));

        if (code.isExpired()) {
            throw new IllegalArgumentException("2FA code expired. Please request a new code.");
        }

        String providedHash = hashCode(providedCode.trim());
        if (!providedHash.equals(code.getCodeHash())) {
            throw new IllegalArgumentException("Invalid 2FA code.");
        }

        code.setUsed(true);
        twoFactorCodeRepository.save(code);
    }

    @Transactional
    public void cleanupCodes() {
        twoFactorCodeRepository.cleanupExpiredOrUsed(LocalDateTime.now());
    }

    private String generateCode() {
        int value = SECURE_RANDOM.nextInt(900000) + 100000;
        return String.valueOf(value);
    }

    private String hashCode(String value) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] bytes = digest.digest(value.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(bytes);
        } catch (NoSuchAlgorithmException ex) {
            throw new IllegalStateException("SHA-256 not available", ex);
        }
    }

    private void sendCodeByEmail(User user, TwoFactorCode.Purpose purpose, String code) {
        String subject;
        String intro;

        if (purpose == TwoFactorCode.Purpose.LOGIN) {
            subject = "TalentPredict login verification code";
            intro = "Use this one-time code to complete your login:";
        } else if (purpose == TwoFactorCode.Purpose.ENABLE) {
            subject = "TalentPredict 2FA activation code";
            intro = "Use this code to enable two-factor authentication:";
        } else {
            subject = "TalentPredict 2FA deactivation code";
            intro = "Use this code to disable two-factor authentication:";
        }

        if (mailSender != null) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(user.getEmail());
                mail.setSubject(subject);
                mail.setText(
                        "Hello " + user.getFirstName() + ",\n\n"
                                + intro + "\n\n"
                                + code + "\n\n"
                                + "This code expires in " + twoFactorCodeExpirationMinutes + " minutes.\n\n"
                                + "If you did not request it, you can ignore this email.\n\n"
                                + "- TalentPredict Security");
                mailSender.send(mail);
                log.info("2FA {} code emailed to {}", purpose, user.getEmail());
                return;
            } catch (RuntimeException ex) {
                log.warn("Failed to send 2FA email to {}. Falling back to logs.", user.getEmail(), ex);
            }
        }

        log.info("2FA {} code for {}: {}", purpose, user.getEmail(), code);
    }
}
