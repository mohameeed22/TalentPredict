package com.talentpredict.modules.assessment.entities;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.extern.slf4j.Slf4j;

@Converter(autoApply = false)
@Slf4j
public class FraudFlagsConverter implements AttributeConverter<FraudFlags, String> {

    private final static ObjectMapper objectMapper = new ObjectMapper();

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
        if (dbData == null || dbData.isEmpty()) {
            return new FraudFlags();
        }
        try {
            return objectMapper.readValue(dbData, FraudFlags.class);
        } catch (JsonProcessingException e) {
            log.error("Error deserializing JSON to FraudFlags: {}", dbData, e);
            return new FraudFlags();
        }
    }
}
