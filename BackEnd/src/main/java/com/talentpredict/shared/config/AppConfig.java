package com.talentpredict.shared.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.client.RestTemplate;

@Configuration
@EnableScheduling
public class AppConfig {

    @Bean
    public RestTemplate restTemplate(
            @Value("${http.client.connect-timeout-ms:5000}") long connectTimeoutMs,
            @Value("${http.client.read-timeout-ms:45000}") long readTimeoutMs) {
        int safeConnect = (int) Math.max(1000L, Math.min(Integer.MAX_VALUE, connectTimeoutMs));
        int safeRead = (int) Math.max(1000L, Math.min(Integer.MAX_VALUE, readTimeoutMs));
        SimpleClientHttpRequestFactory requestFactory = new SimpleClientHttpRequestFactory();
        requestFactory.setConnectTimeout(safeConnect);
        requestFactory.setReadTimeout(safeRead);
        return new RestTemplate(requestFactory);
    }
}
