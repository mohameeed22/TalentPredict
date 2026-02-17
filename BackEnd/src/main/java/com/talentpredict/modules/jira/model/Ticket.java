package com.talentpredict.modules.jira.model;

import com.talentpredict.modules.formation.model.Formation;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tickets")
public class Ticket {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "jira_key", unique = true)
    private String jiraKey; // Ex: TRN-123
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "formation_id", nullable = false)
    private Formation formation;
    
    @Column(nullable = false)
    private String titre;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutTicket statut = StatutTicket.OUVERT;
    
    @Enumerated(EnumType.STRING)
    private PrioriteTicket priorite = PrioriteTicket.MOYENNE;
    
    @Column(name = "date_creation")
    private LocalDateTime dateCreation = LocalDateTime.now();
    
    @Column(name = "date_mise_a_jour")
    private LocalDateTime dateMiseAJour = LocalDateTime.now();
    
    @Column(name = "assignee")
    private String assignee;
    
    @Column(name = "url_jira")
    private String urlJira;
    
    public Ticket() {
        // JPA requirement
    }

    public Ticket(Long id, String jiraKey, Formation formation, String titre, String description,
                  StatutTicket statut, PrioriteTicket priorite, LocalDateTime dateCreation,
                  LocalDateTime dateMiseAJour, String assignee, String urlJira) {
        this.id = id;
        this.jiraKey = jiraKey;
        this.formation = formation;
        this.titre = titre;
        this.description = description;
        this.statut = statut;
        this.priorite = priorite;
        this.dateCreation = dateCreation;
        this.dateMiseAJour = dateMiseAJour;
        this.assignee = assignee;
        this.urlJira = urlJira;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJiraKey() {
        return jiraKey;
    }

    public void setJiraKey(String jiraKey) {
        this.jiraKey = jiraKey;
    }

    public Formation getFormation() {
        return formation;
    }

    public void setFormation(Formation formation) {
        this.formation = formation;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public StatutTicket getStatut() {
        return statut;
    }

    public void setStatut(StatutTicket statut) {
        this.statut = statut;
    }

    public PrioriteTicket getPriorite() {
        return priorite;
    }

    public void setPriorite(PrioriteTicket priorite) {
        this.priorite = priorite;
    }

    public LocalDateTime getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(LocalDateTime dateCreation) {
        this.dateCreation = dateCreation;
    }

    public LocalDateTime getDateMiseAJour() {
        return dateMiseAJour;
    }

    public void setDateMiseAJour(LocalDateTime dateMiseAJour) {
        this.dateMiseAJour = dateMiseAJour;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public String getUrlJira() {
        return urlJira;
    }

    public void setUrlJira(String urlJira) {
        this.urlJira = urlJira;
    }

    public enum StatutTicket {
        OUVERT,
        EN_COURS,
        EN_ATTENTE,
        RESOLU,
        FERME
    }
    
    public enum PrioriteTicket {
        BASSE,
        MOYENNE,
        HAUTE,
        CRITIQUE
    }
}
