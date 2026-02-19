package com.talentpredict.modules.auth.model;

public enum TypeRecrutement {
    CDI("CDI"),
    CDD("CDD"),
    STAGE("Stage"),
    ALTERNANCE("Alternance"),
    FREELANCE("Freelance"),
    CONTRAT_PROJET("Contrat Projet");
    
    private final String label;
    
    TypeRecrutement(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }
}
