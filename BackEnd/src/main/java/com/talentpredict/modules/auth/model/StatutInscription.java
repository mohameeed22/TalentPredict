package com.talentpredict.modules.auth.model;

public enum StatutInscription {
    EN_COURS("En cours"),
    TERMINEE_ANNULEE("Terminée / Annulée"),
    SUSPENDUE("Suspendue");
    
    private final String label;
    
    StatutInscription(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }
}
