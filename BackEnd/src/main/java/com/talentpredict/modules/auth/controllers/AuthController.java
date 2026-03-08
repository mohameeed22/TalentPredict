package com.talentpredict.modules.auth.controllers;

import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.shared.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthServiceImpl authServiceImpl;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<AuthDto.Response> register(@Valid @RequestBody AuthDto.RegisterRequest request) {
        User user = authServiceImpl.createUser(request);
        String token = jwtService.generateToken(user.getEmail());

        String redirectUrl = (user.getRole() == User.Role.ADMIN)
                ? "/admin/dashboard"
                : "/dashboard";

        AuthDto.Response response = new AuthDto.Response(
                token,
                user.getId(),
                user.getEmail(),
                user.getRole().name(),
                user.getLastName(),
                user.getFirstName(),
                redirectUrl);

        log.info("Registered: {} role={} → {}", user.getEmail(), user.getRole(), redirectUrl);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthDto.Response> login(@Valid @RequestBody AuthDto.LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        User user = authServiceImpl.getUserByEmail(request.getEmail());
        String token = jwtService.generateToken(user.getEmail());

        String redirectUrl = (user.getRole() == User.Role.ADMIN)
                ? "/admin/dashboard"
                : "/dashboard";

        AuthDto.Response response = new AuthDto.Response(
                token,
                user.getId(),
                user.getEmail(),
                user.getRole().name(),
                user.getLastName(),
                user.getFirstName(),
                redirectUrl);

        log.info("Login: {} role={} → {}", user.getEmail(), user.getRole(), redirectUrl);
        return ResponseEntity.ok(response);
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
}
