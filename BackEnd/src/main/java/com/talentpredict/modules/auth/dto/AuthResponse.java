package com.talentpredict.modules.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String email;
    private String role;
    private String nom;
    private String prenom;
    
    public AuthResponse(String token, Long id, String email, String role, String nom, String prenom) {
        this.token = token;
        this.id = id;
        this.email = email;
        this.role = role;
        this.nom = nom;
        this.prenom = prenom;
    }
}
