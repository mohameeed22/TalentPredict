package com.talentpredict.modules.assessment.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonDeserialize(using = FraudFlagsDeserializer.class)
public class FraudFlags {
    private Double score;
    private String severity;
    private String message;
    
    @Builder.Default
    private List<FlagDetail> flags = new ArrayList<>();

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class FlagDetail {
        private String type;
        private String description;
        private String severity;
    }
}
