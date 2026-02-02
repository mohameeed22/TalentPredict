package com.talentpredict.core.controller;

import com.talentpredict.core.dto.TestPersonnaliteRequest;
import com.talentpredict.core.dto.TestPersonnaliteResponse;
import com.talentpredict.core.service.TestPersonnaliteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tests")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TestPersonnaliteController {
    
    private final TestPersonnaliteService testPersonnaliteService;
    
    @PostMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<TestPersonnaliteResponse> creerTest(
            @PathVariable Long utilisateurId,
            @Valid @RequestBody TestPersonnaliteRequest request) {
        TestPersonnaliteResponse response = testPersonnaliteService.creerTest(utilisateurId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<TestPersonnaliteResponse>> getTestsByUtilisateur(@PathVariable Long utilisateurId) {
        List<TestPersonnaliteResponse> tests = testPersonnaliteService.getTestsByUtilisateur(utilisateurId);
        return ResponseEntity.ok(tests);
    }
    
    @GetMapping("/{testId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<TestPersonnaliteResponse> getTestById(@PathVariable Long testId) {
        TestPersonnaliteResponse test = testPersonnaliteService.getTestById(testId);
        return ResponseEntity.ok(test);
    }
}
