package com.talentpredict.modules.auth.controllers;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.auth.dto.AuthDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.shared.security.JwtService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthServiceImpl authServiceImpl;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    @PostMapping("/register")
    public ResponseEntity<AuthDto.Response> register(@Valid @RequestBody AuthDto.RegisterRequest request) {
        Account account = authServiceImpl.createAccount(request);
        String token = jwtService.generateToken(account.getEmail());
        
        AuthDto.Response response = new AuthDto.Response(
            token,
            account.getId(),
            account.getEmail(),
            account.getRole().name(),
            account.getLastName(),
            account.getFirstName()
        );
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @PostMapping("/login")
    public ResponseEntity<AuthDto.Response> login(@Valid @RequestBody AuthDto.LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        Account account = authServiceImpl.getAccountByEmail(request.getEmail());
        String token = jwtService.generateToken(account.getEmail());
        
        AuthDto.Response response = new AuthDto.Response(
            token,
            account.getId(),
            account.getEmail(),
            account.getRole().name(),
            account.getLastName(),
            account.getFirstName()
        );
        
        return ResponseEntity.ok(response);
    }

}
