package com.talentpredict.core.controller;

import com.talentpredict.core.dto.DashboardResponse;
import com.talentpredict.core.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DashboardController {
    
    private final DashboardService dashboardService;
    
    @GetMapping("/utilisateur/{utilisateurId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<DashboardResponse> getDashboard(@PathVariable Long utilisateurId) {
        DashboardResponse dashboard = dashboardService.getDashboard(utilisateurId);
        return ResponseEntity.ok(dashboard);
    }
}
