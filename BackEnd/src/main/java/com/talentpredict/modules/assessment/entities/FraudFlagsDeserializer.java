package com.talentpredict.modules.assessment.entities;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FraudFlagsDeserializer extends JsonDeserializer<FraudFlags> {

    @Override
    public FraudFlags deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        ObjectMapper mapper = (ObjectMapper) p.getCodec();
        JsonNode node = mapper.readTree(p);

        if (node == null || node.isNull()) {
            return new FraudFlags();
        }

        if (node.isArray()) {
            // Handle legacy format: JSON Array of strings or objects
            FraudFlags flags = new FraudFlags();
            List<FraudFlags.FlagDetail> details = new ArrayList<>();
            for (JsonNode item : node) {
                if (item.isTextual()) {
                    details.add(new FraudFlags.FlagDetail(item.asText(), item.asText(), "MEDIUM"));
                } else if (item.isObject()) {
                    String type = item.has("type") ? item.get("type").asText() : "UNKNOWN";
                    String desc = item.has("description") ? item.get("description").asText() : type;
                    String sev = item.has("severity") ? item.get("severity").asText() : "MEDIUM";
                    details.add(new FraudFlags.FlagDetail(type, desc, sev));
                }
            }
            flags.setFlags(details);
            flags.setScore(0.0);
            flags.setSeverity("LOW");
            return flags;
        }

        // Standard object parsing
        FraudFlags flags = new FraudFlags();
        if (node.has("score") && !node.get("score").isNull()) {
            flags.setScore(node.get("score").asDouble());
        }
        if (node.has("severity") && !node.get("severity").isNull()) {
            flags.setSeverity(node.get("severity").asText());
        }
        if (node.has("message") && !node.get("message").isNull()) {
            flags.setMessage(node.get("message").asText());
        }
        
        List<FraudFlags.FlagDetail> details = new ArrayList<>();
        if (node.has("flags") && node.get("flags").isArray()) {
            for (JsonNode item : node.get("flags")) {
                if (item.isObject()) {
                    String type = item.has("type") ? item.get("type").asText() : "UNKNOWN";
                    String desc = item.has("description") ? item.get("description").asText() : type;
                    String sev = item.has("severity") ? item.get("severity").asText() : "MEDIUM";
                    details.add(new FraudFlags.FlagDetail(type, desc, sev));
                }
            }
        }
        flags.setFlags(details);
        return flags;
    }
}
