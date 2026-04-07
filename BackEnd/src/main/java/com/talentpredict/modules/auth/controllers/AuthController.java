package com.talentpredict.modules.auth.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import com.talentpredict.modules.ai.services.ProfileAnalysisOrchestrator;
import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.shared.security.JwtService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthServiceImpl authServiceImpl;
    private final ProfileAnalysisOrchestrator profileAnalysisOrchestrator;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Value("${security.cookie.secure:false}")
    private boolean refreshCookieSecure;

    @PostMapping("/register")
    public ResponseEntity<AuthDto.Response> register(@Valid @RequestBody AuthDto.RegisterRequest request,
            HttpServletResponse response) {
        User user = authServiceImpl.createUser(request);
        String accessToken = jwtService.generateAccessToken(user.getEmail());
        String refreshToken = authServiceImpl.generateRefreshToken(user, "device-id-placeholder");

        // Return refresh token in HttpOnly cookie
        Cookie cookie = buildRefreshCookie(refreshToken, 604800);
        response.addCookie(cookie);

        String redirectUrl = (user.getRole() == User.Role.ADMIN)
                ? "/admin/dashboard"
                : "/dashboard";

        AuthDto.Response responseDto = new AuthDto.Response(
                accessToken,
                user.getId(),
                user.getEmail(),
                user.getRole().name(),
                user.getLastName(),
                user.getFirstName(),
                redirectUrl);

        log.info("Registered: {} role={} → {}", user.getEmail(), user.getRole(), redirectUrl);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthDto.Response> login(@Valid @RequestBody AuthDto.LoginRequest request,
            HttpServletResponse response) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        } catch (LockedException ex) {
            return ResponseEntity.status(HttpStatus.LOCKED)
                    .build();
        } catch (BadCredentialsException ex) {
            authServiceImpl.recordFailedLoginAttempt(request.getEmail());
            throw ex;
        }

        User user = authServiceImpl.getUserByEmail(request.getEmail());
        authServiceImpl.registerSuccessfulLogin(request.getEmail());
        String accessToken = jwtService.generateAccessToken(user.getEmail());
        String refreshToken = authServiceImpl.generateRefreshToken(user, "device-id-placeholder");

        // Return refresh token in HttpOnly cookie
        Cookie cookie = buildRefreshCookie(refreshToken, 604800);
        response.addCookie(cookie);

        String redirectUrl = (user.getRole() == User.Role.ADMIN)
                ? "/admin/dashboard"
                : "/dashboard";

        AuthDto.Response responseDto = new AuthDto.Response(
                accessToken,
                user.getId(),
                user.getEmail(),
                user.getRole().name(),
                user.getLastName(),
                user.getFirstName(),
                redirectUrl);

        log.info("Login: {} role={} → {}", user.getEmail(), user.getRole(), redirectUrl);
        log.info("🤖 Déclenchement analyse IA pour account: {}", responseDto.getId());
        profileAnalysisOrchestrator.analyserProfil(responseDto.getId());
        return ResponseEntity.ok(responseDto);
    }

    /**
     * TASK 3 — POST /api/auth/forgot-password (PUBLIC)
     */
    @PostMapping("/forgot-password")
    public ResponseEntity<AuthDto.MessageResponse> forgotPassword(
            @Valid @RequestBody AuthDto.ForgotPasswordRequest request) {
        String message = authServiceImpl.forgotPassword(request);
        return ResponseEntity.ok(new AuthDto.MessageResponse(message));
    }

    /**
     * TASK 3 — POST /api/auth/reset-password (PUBLIC)
     */
    @PostMapping("/reset-password")
    public ResponseEntity<AuthDto.MessageResponse> resetPassword(
            @Valid @RequestBody AuthDto.ResetPasswordRequest request) {
        try {
            String message = authServiceImpl.resetPassword(request);
            return ResponseEntity.ok(new AuthDto.MessageResponse(message));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new AuthDto.MessageResponse(e.getMessage()));
        }
    }

    @PostMapping("/change-password")
    public ResponseEntity<AuthDto.MessageResponse> changePassword(
            @Valid @RequestBody AuthDto.ChangePasswordRequest request,
            @AuthenticationPrincipal User currentUser) {
        String message = authServiceImpl.changePassword(request, currentUser);
        return ResponseEntity.ok(new AuthDto.MessageResponse(message));
    }

    /**
     * SECURITY FEATURE: Refresh access token using refresh token (stored in HttpOnly cookie)
     */
    @PostMapping("/refresh-token")
    public ResponseEntity<AuthDto.RefreshResponse> refreshToken(
            @CookieValue(value = "refreshToken", required = false) String refreshToken,
            HttpServletResponse response) {
        try {
            if (refreshToken == null || refreshToken.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new AuthDto.RefreshResponse(null, "Missing refresh token"));
            }

            String newAccessToken = authServiceImpl.refreshAccessToken(refreshToken);
            String newRefreshToken = authServiceImpl.generateRefreshToken(
                authServiceImpl.getUserByEmail(jwtService.extractUsername(newAccessToken)),
                "device-id-placeholder"
            );

            // Return new refresh token in HttpOnly cookie
            Cookie cookie = buildRefreshCookie(newRefreshToken, 604800);
            response.addCookie(cookie);

            return ResponseEntity.ok(new AuthDto.RefreshResponse(newAccessToken, "Bearer"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    /**
     * SECURITY FEATURE: Logout by invalidating refresh token
     */
    @PostMapping("/logout")
    public ResponseEntity<AuthDto.MessageResponse> logout(
            @AuthenticationPrincipal User currentUser,
            @CookieValue(value = "refreshToken", required = false) String refreshToken,
            HttpServletResponse response) {
        // Clear refresh token cookie regardless of auth state
        Cookie clear = buildRefreshCookie(null, 0);
        response.addCookie(clear);

        if (currentUser != null) {
            log.info("User logout: {}", currentUser.getEmail());
        }

        return ResponseEntity.ok(new AuthDto.MessageResponse("Déconnecté avec succès."));
    }

    private Cookie buildRefreshCookie(String token, int maxAgeSeconds) {
        Cookie cookie = new Cookie("refreshToken", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(refreshCookieSecure);
        cookie.setPath("/");
        cookie.setMaxAge(maxAgeSeconds);
        cookie.setAttribute("SameSite", "Lax");
        return cookie;
    }
}
