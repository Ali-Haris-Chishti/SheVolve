package com.example.thrive.config.cloud;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class CloudConfig {

    @Value("${gcp.credentials.path}")
    private String CREDENTIALS_PATH;

    @Bean
    public Storage storage() throws IOException {
        return StorageOptions.newBuilder()
                .setCredentials(GoogleCredentials.fromStream(new FileInputStream(CREDENTIALS_PATH)))
                .build()
                .getService();
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
