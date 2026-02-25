package com.talentpredict;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TalentPredictApplication {
    public static void main(String[] args) {
        SpringApplication.run(TalentPredictApplication.class, args);
        System.out.println("Backend TalentPredict is running!");
    }


    @GetMapping("/api/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("TalentPredict API is running!");
    }
}
