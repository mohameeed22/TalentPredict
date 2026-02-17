package com.talentpredict.modules.evaluation.controller;

import com.talentpredict.modules.evaluation.dto.PersonalityTestRequest;
import com.talentpredict.modules.evaluation.dto.PersonalityTestResponse;
import com.talentpredict.modules.evaluation.service.PersonalityTestService;
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
