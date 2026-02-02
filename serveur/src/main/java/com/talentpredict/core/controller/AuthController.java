package com.talentpredict.core.controller;

import com.talentpredict.core.dto.AuthRequest;
import com.talentpredict.core.dto.AuthResponse;
import com.talentpredict.core.dto.InscriptionRequest;
import com.talentpredict.core.model.Utilisateur;
import com.talentpredict.core.security.JwtService;
import com.talentpredict.core.service.UtilisateurService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {
    
    private final UtilisateurService utilisateurService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    
    @PostMapping("/inscription")
    public ResponseEntity<AuthResponse> inscription(@Valid @RequestBody InscriptionRequest request) {
        Utilisateur utilisateur = utilisateurService.creerUtilisateur(request);
        String token = jwtService.generateToken(utilisateur.getEmail());
        
        AuthResponse response = new AuthResponse(
            token,
            utilisateur.getId(),
            utilisateur.getEmail(),
            utilisateur.getRole().name()
        );
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @PostMapping("/connexion")
    public ResponseEntity<AuthResponse> connexion(@Valid @RequestBody AuthRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getMotDePasse())
        );
        
        Utilisateur utilisateur = utilisateurService.getUtilisateurByEmail(request.getEmail());
        String token = jwtService.generateToken(utilisateur.getEmail());
        
        AuthResponse response = new AuthResponse(
            token,
            utilisateur.getId(),
            utilisateur.getEmail(),
            utilisateur.getRole().name()
        );
        
        return ResponseEntity.ok(response);
    }
}
