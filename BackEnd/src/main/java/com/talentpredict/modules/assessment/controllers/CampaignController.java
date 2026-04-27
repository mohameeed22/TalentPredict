package com.talentpredict.modules.assessment.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/campaigns")
public class CampaignController {

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Map<String, Object>>> getCampaigns() {
        return ResponseEntity.ok(List.of());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> createCampaign(@RequestBody Map<String, Object> payload) {
        return ResponseEntity.ok(payload);
    }
}
