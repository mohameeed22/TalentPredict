package com.talentpredict.modules.utilisateur.controller;

import com.talentpredict.modules.utilisateur.dto.UtilisateurRequest;
import com.talentpredict.modules.utilisateur.dto.UtilisateurResponse;
import com.talentpredict.modules.utilisateur.service.UtilisateurService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST endpoints for managing Utilisateur resources.
 *
 * Route-level access summary:
 *   POST   /api/utilisateurs          → ADMIN only
 *   GET    /api/utilisateurs          → ADMIN only
 *   GET    /api/utilisateurs/{id}     → authenticated (USER can only see own; ADMIN can see all)
 *   PUT    /api/utilisateurs/{id}     → authenticated (USER can only edit own; ADMIN can edit all)
 *   DELETE /api/utilisateurs/{id}     → ADMIN only
 */
@RestController
@RequestMapping("/api/utilisateurs")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    // ─── POST /api/utilisateurs ─────────────────────────────────────────────

    /**
     * Create a new user. ADMIN only.
     */
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UtilisateurResponse> createUtilisateur(
            @Valid @RequestBody UtilisateurRequest request) {

        UtilisateurResponse created = utilisateurService.createUtilisateur(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // ─── GET /api/utilisateurs ──────────────────────────────────────────────

    /**
     * List all users. ADMIN only.
     */
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<UtilisateurResponse>> getAllUtilisateurs() {
        return ResponseEntity.ok(utilisateurService.getAllUtilisateurs());
    }

    // ─── GET /api/utilisateurs/{id} ─────────────────────────────────────────

    /**
     * Get a single user by ID.
     * USER can only fetch their own profile; ADMIN can fetch any.
     */
    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UtilisateurResponse> getUtilisateurById(
            @PathVariable Long id,
            Authentication authentication) {

        return ResponseEntity.ok(utilisateurService.getUtilisateurById(id, authentication));
    }

    // ─── PUT /api/utilisateurs/{id} ─────────────────────────────────────────

    /**
     * Update a user.
     * USER can only update their own account (role change ignored).
     * ADMIN can update any account including role.
     */
    @PutMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UtilisateurResponse> updateUtilisateur(
            @PathVariable Long id,
            @Valid @RequestBody UtilisateurRequest request,
            Authentication authentication) {

        return ResponseEntity.ok(utilisateurService.updateUtilisateur(id, request, authentication));
    }

    // ─── DELETE /api/utilisateurs/{id} ──────────────────────────────────────

    /**
     * Delete a user. ADMIN only.
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUtilisateur(@PathVariable Long id) {
        utilisateurService.deleteUtilisateur(id);
        return ResponseEntity.noContent().build();
    }
}
