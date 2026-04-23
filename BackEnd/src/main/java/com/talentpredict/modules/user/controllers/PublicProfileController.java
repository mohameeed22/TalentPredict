package com.talentpredict.modules.user.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.user.entities.User;

import lombok.RequiredArgsConstructor;

@RestController("userPublicProfileController")
@RequestMapping("/api/public")
@RequiredArgsConstructor
public class PublicProfileController {

    private final AuthServiceImpl authService;
    private final SkillRepository skillRepository;

    @GetMapping("/profile/{userId}")
    public ResponseEntity<Map<String, Object>> getPublicProfile(@PathVariable UUID userId) {
        User user = authService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        Map<String, Object> profile = new HashMap<>();
        profile.put("firstName", user.getFirstName());
        profile.put("lastName", user.getLastName());
        profile.put("skills", skillRepository.findByUserId(userId));
        // We could also attach latest predictions/tests if they were public

        return ResponseEntity.ok(profile);
    }
}
