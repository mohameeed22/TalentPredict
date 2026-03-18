package com.talentpredict.shared.sms;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SmsService {

    @Value("${africastalking.username:}")
    private String username;

    @Value("${africastalking.api-key:}")
    private String apiKey;

    @Value("${africastalking.sender-id:}")
    private String senderId;

    public void sendResetToken(String toPhone, String resetLink, String token) {
        if (toPhone == null || toPhone.isBlank()) {
            log.info("SMS reset skipped: no phone provided");
            return;
        }

        if (username == null || username.isBlank() ||
                apiKey == null || apiKey.isBlank()) {
            log.info("Africa's Talking not configured — token for {}: {}", toPhone, token);
            return;
        }

        try {
            String message = "Lien de réinitialisation: " + resetLink;

            String body = "username=" + URLEncoder.encode(username, StandardCharsets.UTF_8)
                    + "&to=" + URLEncoder.encode(toPhone, StandardCharsets.UTF_8)
                    + "&message=" + URLEncoder.encode(message, StandardCharsets.UTF_8);

            if (senderId != null && !senderId.isBlank()) {
                body += "&from=" + URLEncoder.encode(senderId, StandardCharsets.UTF_8);
            }

            // Use sandbox URL for testing
            String url = "https://api.sandbox.africastalking.com/version1/messaging";
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .header("Accept", "application/json")
                    .header("apiKey", apiKey)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            HttpResponse<String> response = HttpClient.newHttpClient()
                    .send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 201) {
                log.info("Password reset SMS sent to {}", toPhone);
            } else {
                log.warn("Africa's Talking returned {} — body: {}", response.statusCode(), response.body());
            }

        } catch (Exception ex) {
            log.warn("Failed to send SMS to {} — token fallback: {}", toPhone, token, ex);
        }
    }
}