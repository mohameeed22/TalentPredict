package com.talentpredict.modules.assessment.entities;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.extern.slf4j.Slf4j;

@Converter(autoApply = false)
@Slf4j
public class FraudFlagsConverter implements AttributeConverter<FraudFlags, String> {

    private static final ObjectMapper objectMapper;

    static {
        objectMapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addDeserializer(FraudFlags.class, new FraudFlagsDeserializer());
        objectMapper.registerModule(module);
    }

    @Override
    public String convertToDatabaseColumn(FraudFlags attribute) {
        if (attribute == null) {
            return null;
        }
        try {
            return objectMapper.writeValueAsString(attribute);
        } catch (JsonProcessingException e) {
            log.error("Error serializing FraudFlags to JSON", e);
            return null;
        }
    }

    @Override
    public FraudFlags convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.isBlank()) {
            return new FraudFlags();
        }
        try {
            return objectMapper.readValue(dbData, FraudFlags.class);
        } catch (Exception e) {
            log.warn("Error deserializing FraudFlags from DB (returning empty): data='{}', error={}", dbData, e.getMessage());
            return new FraudFlags();
        }
    }
}

