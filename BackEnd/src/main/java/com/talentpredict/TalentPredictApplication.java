package com.talentpredict;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TalentPredictApplication {
    public static void main(String[] args) {
        SpringApplication.run(TalentPredictApplication.class, args);
        System.out.println("Backend TalentPredict is running!");
    }
}
