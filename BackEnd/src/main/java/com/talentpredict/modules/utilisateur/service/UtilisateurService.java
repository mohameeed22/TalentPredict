package com.talentpredict.modules.utilisateur.service;

import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.auth.repository.UserRepository;
import com.talentpredict.modules.utilisateur.dto.UtilisateurRequest;
import com.talentpredict.modules.utilisateur.dto.UtilisateurResponse;
import com.talentpredict.shared.exception.BadRequestException;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.shared.exception.UnauthorizedException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UtilisateurService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // ─────────────────────────────────────────────────────────────────────────
    // CREATE  (ADMIN only – enforced at controller level via @PreAuthorize)
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional
    public UtilisateurResponse createUtilisateur(UtilisateurRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Un utilisateur avec l'email '" + request.getEmail() + "' existe déjà");
        }
        if (request.getUsername() != null && userRepository.existsByUsername(request.getUsername())) {
            throw new BadRequestException("Le nom d'utilisateur '" + request.getUsername() + "' est déjà pris");
        }
        if (request.getPassword() == null || request.getPassword().isBlank()) {
            throw new BadRequestException("Le mot de passe est obligatoire lors de la création d'un utilisateur");
        }

        User user = new User();
        mapRequestToUser(request, user, true);
        user.setDateCreation(LocalDateTime.now());
        user.setDateModification(LocalDateTime.now());

        return mapToResponse(userRepository.save(user));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // READ ALL  (ADMIN only – enforced at controller level)
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<UtilisateurResponse> getAllUtilisateurs() {
        return userRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // ─────────────────────────────────────────────────────────────────────────
    // READ ONE  (USER: own account | ADMIN: any)
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public UtilisateurResponse getUtilisateurById(Long id, Authentication auth) {
        User user = findUserOrThrow(id);
        checkAccessRights(id, auth);
        return mapToResponse(user);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // UPDATE  (USER: own account, cannot change role | ADMIN: any + role)
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional
    public UtilisateurResponse updateUtilisateur(Long id, UtilisateurRequest request, Authentication auth) {
        User user = findUserOrThrow(id);
        checkAccessRights(id, auth);

        // Check uniqueness only when values change
        if (!user.getEmail().equals(request.getEmail()) && userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("L'email '" + request.getEmail() + "' est déjà utilisé");
        }
        if (request.getUsername() != null
                && !request.getUsername().equals(user.getUsername())
                && userRepository.existsByUsername(request.getUsername())) {
            throw new BadRequestException("Le nom d'utilisateur '" + request.getUsername() + "' est déjà pris");
        }

        boolean isAdmin = auth.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        mapRequestToUser(request, user, false);

        // Only ADMIN can change roles
        if (isAdmin && request.getRole() != null) {
            try {
                user.setRole(User.Role.valueOf(request.getRole().toUpperCase()));
            } catch (IllegalArgumentException e) {
                throw new BadRequestException("Rôle invalide: " + request.getRole() + ". Valeurs acceptées: USER, ADMIN");
            }
        }

        user.setDateModification(LocalDateTime.now());
        return mapToResponse(userRepository.save(user));
    }

    // ─────────────────────────────────────────────────────────────────────────
    // DELETE  (ADMIN only – enforced at controller level)
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional
    public void deleteUtilisateur(Long id) {
        if (!userRepository.existsById(id)) {
            throw new ResourceNotFoundException("Utilisateur non trouvé avec l'ID: " + id);
        }
        userRepository.deleteById(id);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Helpers
    // ─────────────────────────────────────────────────────────────────────────

    private User findUserOrThrow(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur non trouvé avec l'ID: " + id));
    }

    /**
     * Verify that the authenticated principal is either the owner of the resource
     * or has ADMIN role; otherwise throw {@link UnauthorizedException}.
     */
    private void checkAccessRights(Long targetId, Authentication auth) {
        boolean isAdmin = auth.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
        if (isAdmin) return;

        // For regular USERs: compare the authenticated email with the target user's email
        String authenticatedEmail = auth.getName();
        User targetUser = findUserOrThrow(targetId);
        if (!authenticatedEmail.equals(targetUser.getEmail())) {
            throw new UnauthorizedException("Accès refusé: vous ne pouvez accéder qu'à votre propre compte");
        }
    }

    /**
     * Map request fields onto a User entity.
     *
     * @param isCreate when {@code true} the password field is encoded and required;
     *                 when {@code false} the password is only re-encoded if provided.
     */
    private void mapRequestToUser(UtilisateurRequest request, User user, boolean isCreate) {
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPrenom(request.getFirstName());   // prenom = first name
        user.setNom(request.getLastName());        // nom    = last  name
        user.setDepartment(request.getDepartment());
        user.setPosition(request.getPosition());
        user.setHireDate(request.getHireDate());
        user.setProfilePictureUrl(request.getProfilePictureUrl());
        user.setIsActive(request.getIsActive() != null ? request.getIsActive() : Boolean.TRUE);

        if (isCreate) {
            user.setMotDePasse(passwordEncoder.encode(request.getPassword()));
            // Default role on creation is USER; ADMIN can override via the role field
            user.setRole(User.Role.USER);
            if (request.getRole() != null && !request.getRole().isBlank()) {
                try {
                    user.setRole(User.Role.valueOf(request.getRole().toUpperCase()));
                } catch (IllegalArgumentException e) {
                    throw new BadRequestException("Rôle invalide: " + request.getRole());
                }
            }
        } else {
            // Update: only re-hash if a new password was supplied
            if (request.getPassword() != null && !request.getPassword().isBlank()) {
                user.setMotDePasse(passwordEncoder.encode(request.getPassword()));
            }
        }
    }

    /** Convert a {@link User} entity to a {@link UtilisateurResponse}. */
    public UtilisateurResponse mapToResponse(User user) {
        UtilisateurResponse response = new UtilisateurResponse();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setFirstName(user.getPrenom());
        response.setLastName(user.getNom());
        response.setDepartment(user.getDepartment());
        response.setPosition(user.getPosition());
        response.setHireDate(user.getHireDate());
        response.setProfilePictureUrl(user.getProfilePictureUrl());
        response.setIsActive(user.getIsActive());
        response.setRole(user.getRole() != null ? user.getRole().name() : null);
        response.setCreatedAt(user.getDateCreation());
        response.setUpdatedAt(user.getDateModification());
        return response;
    }
}
