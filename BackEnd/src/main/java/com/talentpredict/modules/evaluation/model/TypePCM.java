package com.talentpredict.modules.evaluation.model;

public enum TypePCM {
    ANALYTIQUE("Analytique"),
    AMIABLE("Amiable"),
    DIRECTIF("Directif"),
    EXPRESSIF("Expressif");
    
    private final String label;
    
    TypePCM(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }
}
