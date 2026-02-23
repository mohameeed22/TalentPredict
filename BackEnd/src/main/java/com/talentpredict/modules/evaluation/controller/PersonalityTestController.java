package com.talentpredict.modules.evaluation.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.evaluation.dto.PersonalityTestRequest;
import com.talentpredict.modules.evaluation.dto.PersonalityTestResponse;
import com.talentpredict.modules.evaluation.service.PersonalityTestService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tests")
@RequiredArgsConstructor
public class PersonalityTestController {
    
    private final PersonalityTestService testService;
    
    @PostMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestResponse> createTest(
            @PathVariable Long utilisateurId,
            @Valid @RequestBody PersonalityTestRequest request) {
        PersonalityTestResponse response = testService.createTest(utilisateurId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PersonalityTestResponse>> getTestsByUser(@PathVariable Long utilisateurId) {
        List<PersonalityTestResponse> tests = testService.getTestsByUser(utilisateurId);
        return ResponseEntity.ok(tests);
    }
    
    @GetMapping("/{testId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestResponse> getTestById(@PathVariable Long testId) {
        PersonalityTestResponse test = testService.getTestById(testId);
        return ResponseEntity.ok(test);
    }
}
