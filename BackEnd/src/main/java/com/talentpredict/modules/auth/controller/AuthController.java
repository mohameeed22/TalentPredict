package com.talentpredict.modules.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.auth.dto.AuthRequest;
import com.talentpredict.modules.auth.dto.AuthResponse;
import com.talentpredict.modules.auth.dto.InscriptionRequest;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.auth.service.UserService;
import com.talentpredict.shared.security.JwtService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    
    @PostMapping("/inscription")
    public ResponseEntity<AuthResponse> inscription(@Valid @RequestBody InscriptionRequest request) {
        User user = userService.createUser(request);
        String token = jwtService.generateToken(user.getEmail());
        
        AuthResponse response = new AuthResponse(
            token,
            user.getId(),
            user.getEmail(),
            user.getRole().name(),
            user.getNom(),
            user.getPrenom()
        );
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @PostMapping("/connexion")
    public ResponseEntity<AuthResponse> connexion(@Valid @RequestBody AuthRequest request) {
        return login(request);
    }

    /**
     * Standard login endpoint (English alias for /connexion).
     * Returns a JWT bearer token on success.
     */
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        User user = userService.getUserByEmail(request.getEmail());
        String token = jwtService.generateToken(user.getEmail());
        
        AuthResponse response = new AuthResponse(
            token,
            user.getId(),
            user.getEmail(),
            user.getRole().name(),
            user.getNom(),
            user.getPrenom()
        );
        
        return ResponseEntity.ok(response);
    }
}
