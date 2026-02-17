package com.talentpredict.modules.dashboard.controller;

import com.talentpredict.modules.dashboard.dto.DashboardResponse;
import com.talentpredict.modules.dashboard.service.DashboardService;
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
    
    @GetMapping("/user/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<DashboardResponse> getDashboard(@PathVariable Long userId) {
        DashboardResponse dashboard = dashboardService.getDashboard(userId);
        return ResponseEntity.ok(dashboard);
    }
}
