package com.talentpredict.modules.auth.controllers;

import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.services.AuditLogService;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.auth.services.SocialAuthService;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.shared.security.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.ai.services.ProfileAnalysisOrchestrator;

@RestController
@RequestMapping("/api/auth/oauth")
@RequiredArgsConstructor
@Slf4j
public class SocialAuthController {

    private final SocialAuthService socialAuthService;
    private final AuthServiceImpl authServiceImpl;
    private final JwtService jwtService;
    private final AuditLogService auditLogService;
    private final ProfileAnalysisOrchestrator profileAnalysisOrchestrator;

    @Value("${security.cookie.secure:false}")
    private boolean refreshCookieSecure;

    @PostMapping("/google")
    public ResponseEntity<AuthDto.Response> loginWithGoogle(
            @Valid @RequestBody AuthDto.SocialLoginRequest request,
            HttpServletRequest httpRequest,
            HttpServletResponse response) {
        User user = socialAuthService.loginWithGoogle(request.getCode(), request.getRedirectUri());
        return buildAuthResponse(user, httpRequest, response, "google");
    }

    @PostMapping("/github")
    public ResponseEntity<AuthDto.Response> loginWithGithub(
            @Valid @RequestBody AuthDto.SocialLoginRequest request,
            HttpServletRequest httpRequest,
            HttpServletResponse response) {
        User user = socialAuthService.loginWithGithub(request.getCode(), request.getRedirectUri());
        return buildAuthResponse(user, httpRequest, response, "github");
    }

    private String getRedirectUrl(User user) {
        if (user.getRole() == User.Role.ADMIN) {
            return "/admin/dashboard";
        }
        return "/dashboard";
    }

    private ResponseEntity<AuthDto.Response> buildAuthResponse(
            User user,
            HttpServletRequest request,
            HttpServletResponse response,
            String provider) {
        String accessToken = jwtService.generateAccessToken(user.getEmail());
        String refreshToken = authServiceImpl.generateRefreshToken(user, resolveDeviceId(request));

        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setSecure(refreshCookieSecure);
        cookie.setPath("/");
        cookie.setMaxAge(604800);
        cookie.setAttribute("SameSite", "Lax");
        response.addCookie(cookie);

        String redirectUrl = getRedirectUrl(user);

        AuthDto.Response responseDto = new AuthDto.Response(
                accessToken,
                user.getId(),
                user.getEmail(),
                user.getRole().name(),
                user.getLastName(),
                user.getFirstName(),
                redirectUrl);
        responseDto.setEmailVerified(Boolean.TRUE.equals(user.getEmailVerified()));
        responseDto.setTwoFactorEnabled(Boolean.TRUE.equals(user.getTwoFactorEnabled()));

        auditLogService.logLogin(user, resolveClientIp(request), request.getHeader("User-Agent"), resolveDeviceId(request));
        log.info("Social login ({}) success: {}", provider, user.getEmail());
        log.info("🤖 Déclenchement analyse IA pour account social: {}", user.getId());
        authServiceImpl.registerSuccessfulLogin(user.getEmail());
        profileAnalysisOrchestrator.analyserProfil(user.getId());
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    private String resolveClientIp(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (StringUtils.hasText(xForwardedFor)) {
            return xForwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    private String resolveDeviceId(HttpServletRequest request) {
        String headerDeviceId = request.getHeader("X-Device-Id");
        if (StringUtils.hasText(headerDeviceId)) {
            return headerDeviceId.trim();
        }

        String userAgent = request.getHeader("User-Agent");
        if (StringUtils.hasText(userAgent)) {
            return "ua-" + Integer.toHexString(userAgent.hashCode());
        }

        return "oauth-device";
    }
}
