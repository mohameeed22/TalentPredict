package com.talentpredict.modules.auth.model;

public enum Niveau {
    DEBUTANT("Débutant"),
    INTERMEDIAIRE("Intermédiaire"),
    AVANCE("Avancé"),
    EXPERT("Expert");
    
    private final String label;
    
    Niveau(String label) {
        this.label = label;
    }
    
    public String getLabel() {
        return label;
    }
}
