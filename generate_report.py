#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génération du rapport PFE - TalentPredict
Chapitres 1 et 2 en format DOCX et LaTeX
"""

import os
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "rapport doc")

# ─────────────────────────────────────────────
# HELPERS DOCX
# ─────────────────────────────────────────────

def set_font(run, name, size, bold=False, color=None):
    run.font.name = name
    run.font.size = Pt(size)
    run.font.bold = bold
    if color:
        run.font.color.rgb = RGBColor(*color)


def add_heading(doc, text, level, color=(0, 51, 102)):
    """Add styled heading."""
    p = doc.add_heading(text, level=level)
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    for run in p.runs:
        run.font.color.rgb = RGBColor(*color)
        run.font.bold = True
        if level == 1:
            run.font.size = Pt(16)
            run.font.name = "Arial"
        elif level == 2:
            run.font.size = Pt(14)
            run.font.name = "Arial"
        elif level == 3:
            run.font.size = Pt(12)
            run.font.name = "Arial"
    return p


def add_body(doc, text):
    """Add body paragraph."""
    p = doc.add_paragraph(text)
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    for run in p.runs:
        run.font.name = "Times New Roman"
        run.font.size = Pt(12)
    pf = p.paragraph_format
    pf.line_spacing = Pt(18)
    pf.space_after = Pt(6)
    return p


def add_placeholder(doc, label, height_cm=5):
    """Add a grey placeholder box."""
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    shade = OxmlElement("w:shd")
    shade.set(qn("w:val"), "clear")
    shade.set(qn("w:color"), "auto")
    shade.set(qn("w:fill"), "D9D9D9")
    p._p.get_or_add_pPr().append(shade)
    run = p.add_run(f"[À INSÉRER : {label}]")
    run.font.bold = True
    run.font.name = "Arial"
    run.font.size = Pt(11)
    pf = p.paragraph_format
    pf.space_before = Pt(height_cm * 10)
    pf.space_after = Pt(height_cm * 10)
    # Caption
    cap = doc.add_paragraph(f"Figure : {label}")
    cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
    for r in cap.runs:
        r.font.italic = True
        r.font.size = Pt(10)
    return p


def add_table(doc, headers, rows, caption=""):
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Table Grid"
    # Header row
    hrow = table.rows[0]
    for i, h in enumerate(headers):
        cell = hrow.cells[i]
        cell.text = h
        for run in cell.paragraphs[0].runs:
            run.font.bold = True
            run.font.name = "Arial"
            run.font.size = Pt(11)
        shade = OxmlElement("w:shd")
        shade.set(qn("w:val"), "clear")
        shade.set(qn("w:color"), "auto")
        shade.set(qn("w:fill"), "D9D9D9")
        cell._tc.get_or_add_tcPr().append(shade)
    # Data rows
    for ri, row in enumerate(rows):
        r = table.rows[ri + 1]
        for ci, val in enumerate(row):
            r.cells[ci].text = str(val)
            for run in r.cells[ci].paragraphs[0].runs:
                run.font.name = "Times New Roman"
                run.font.size = Pt(11)
    if caption:
        cap = doc.add_paragraph(f"Tableau : {caption}")
        cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in cap.runs:
            r.font.italic = True
            r.font.size = Pt(10)
    return table


# ─────────────────────────────────────────────
# GÉNÉRATION DOCX
# ─────────────────────────────────────────────

def generate_docx():
    doc = Document()

    # Marges
    for section in doc.sections:
        section.top_margin = Cm(2.5)
        section.bottom_margin = Cm(2.5)
        section.left_margin = Cm(2.5)
        section.right_margin = Cm(2.5)

    # ══════════════════════════════════════════
    # PAGE DE TITRE
    # ══════════════════════════════════════════
    doc.add_page_break()
    title_p = doc.add_paragraph()
    title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = title_p.add_run("RAPPORT DE PROJET DE FIN D'ÉTUDES")
    set_font(r, "Arial", 20, bold=True, color=(0, 51, 102))

    sub_p = doc.add_paragraph()
    sub_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r2 = sub_p.add_run("TalentPredict\nPlateforme Intelligente d'Analyse et de Prédiction des Talents")
    set_font(r2, "Arial", 14, bold=True, color=(31, 73, 125))

    doc.add_paragraph()
    p_year = doc.add_paragraph()
    p_year.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r3 = p_year.add_run("Année universitaire 2025 – 2026")
    set_font(r3, "Times New Roman", 12)
    doc.add_page_break()

    # ══════════════════════════════════════════
    # CHAPITRE 1
    # ══════════════════════════════════════════
    add_heading(doc, "Chapitre I : Contexte général et problématique", 1)

    # 1.1
    add_heading(doc, "1.1. Introduction", 2)
    add_body(doc,
        "Dans un contexte économique en constante mutation, où la compétitivité repose "
        "de plus en plus sur le capital humain, les organisations font face à un défi "
        "majeur : identifier, évaluer et développer les talents de manière efficace et "
        "personnalisée. Le présent projet de fin d'études s'inscrit dans cette problématique "
        "en proposant une plateforme innovante dénommée TalentPredict, conçue pour automatiser "
        "et optimiser le processus d'évaluation des compétences au sein des entreprises."
    )
    add_body(doc,
        "Ce premier chapitre a pour objectif de poser le cadre général du projet. Il présente "
        "la problématique identifiée, analyse les solutions existantes sur le marché, puis "
        "introduit la solution proposée avec ses points de différenciation."
    )

    # 1.2
    add_heading(doc, "1.2. Cadre du projet", 2)
    add_heading(doc, "1.2.1. Objectifs du projet", 3)
    add_body(doc,
        "TalentPredict vise à fournir aux équipes RH et aux managers une plateforme centralisée "
        "permettant d'évaluer les compétences comportementales (soft skills) et techniques "
        "(hard skills) des collaborateurs, de générer des recommandations de formation "
        "personnalisées grâce à l'intelligence artificielle, et de suivre leur évolution dans "
        "le temps."
    )
    add_body(doc, "Les objectifs principaux sont :")
    for obj in [
        "Automatiser l'évaluation des soft skills via des tests psychométriques analysés par IA.",
        "Analyser les compétences techniques à partir des profils GitHub et CV des collaborateurs.",
        "Générer des recommandations de formation personnalisées via un moteur IA (LLM).",
        "Offrir un tableau de bord analytique pour le suivi des progrès et des formations.",
        "Intégrer un workflow de validation des formations via Jira.",
    ]:
        p = doc.add_paragraph(obj, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"
            r.font.size = Pt(12)

    add_heading(doc, "1.2.2. Périmètre et limitations", 3)
    add_body(doc,
        "Le périmètre du projet couvre la conception et le développement d'une application web "
        "full-stack comprenant un backend Spring Boot, un frontend Angular et une couche "
        "d'orchestration basée sur n8n. La plateforme s'adresse principalement aux PME et "
        "grandes entreprises disposant d'équipes RH structurées."
    )
    add_body(doc,
        "Dans le cadre de ce projet de fin d'études, la responsabilité est divisée entre deux "
        "binômistes : la partie soft skills (analyse comportementale, tests psychométriques, "
        "intégration Ollama/LLM) constitue le périmètre de ce rapport, tandis que l'analyse "
        "des hard skills (extraction GitHub, analyse technique) est traitée séparément."
    )

    add_heading(doc, "1.2.3. Enjeux et motivations", 3)
    add_body(doc,
        "Les enjeux de TalentPredict sont multiples. Sur le plan organisationnel, la plateforme "
        "permet de réduire le temps consacré aux évaluations manuelles, d'objectiver les "
        "décisions RH et d'optimiser les investissements en formation. Sur le plan technologique, "
        "elle exploite des technologies modernes (IA générative, workflows automatisés) pour "
        "créer une valeur ajoutée concrète."
    )

    # 1.3
    add_heading(doc, "1.3. Étude de l'existant", 2)
    add_heading(doc, "1.3.1. Analyse des solutions existantes", 3)
    add_body(doc,
        "Plusieurs plateformes existent pour l'évaluation et la gestion des talents. Parmi les "
        "solutions les plus répandues, nous pouvons citer : LinkedIn Learning, Cornerstone OnDemand, "
        "SAP SuccessFactors, Talentsoft (maintenant Cegid Talentsoft) et Pymetrics."
    )

    add_heading(doc, "1.3.2. Tableau comparatif des solutions existantes", 3)
    add_placeholder(doc, "Tableau comparatif – Analyse des plateformes concurrentes", 3)
    add_body(doc,
        "Sur la base de cette analyse comparative [SOURCE NÉCESSAIRE – compléter avec le tableau "
        "fourni], il ressort que la majorité des solutions existantes présentent des lacunes "
        "importantes : absence d'analyse comportementale par IA générative, manque de personnalisation "
        "des recommandations, et faible intégration avec les outils de gestion de projet."
    )

    add_heading(doc, "1.3.3. Limites des solutions actuelles", 3)
    add_body(doc,
        "Les solutions actuelles présentent plusieurs limitations :\n"
        "• Coût élevé des licences pour les PME.\n"
        "• Manque de personnalisation selon le profil individuel du collaborateur.\n"
        "• Absence d'intégration native avec des outils comme Jira ou n8n.\n"
        "• Faible exploitation de l'IA générative pour l'analyse comportementale.\n"
        "• Pas de suivi GitHub pour l'évaluation des compétences techniques."
    )

    # 1.4
    add_heading(doc, "1.4. Solution proposée", 2)
    add_heading(doc, "1.4.1. Vue d'ensemble de TalentPredict", 3)
    add_body(doc,
        "TalentPredict est une plateforme web basée sur une architecture moderne en couches, "
        "intégrant un frontend Angular 17, un backend Spring Boot 3.2 (Java 17), une base de "
        "données PostgreSQL 15, et une couche d'orchestration de workflows via n8n couplée à "
        "un modèle de langage local Ollama (llama3.2). La plateforme est conteneurisée avec "
        "Docker et déployable sur Kubernetes."
    )

    add_heading(doc, "1.4.2. Valeur ajoutée et innovations", 3)
    for va in [
        "Analyse des soft skills par IA générative locale (Ollama/llama3.2) : confidentialité des données garantie.",
        "Orchestration des workflows avec n8n : flexibilité et automatisation sans code complexe.",
        "Architecture modulaire Spring Boot : séparation claire des modules (auth, évaluation, formation, etc.).",
        "Tableau de bord analytique en temps réel avec Chart.js.",
        "Intégration Jira pour la gestion des formations comme tickets de suivi.",
    ]:
        p = doc.add_paragraph(va, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"
            r.font.size = Pt(12)

    add_heading(doc, "1.4.3. Architecture globale", 3)
    add_placeholder(doc, "Diagramme d'architecture globale de TalentPredict", 6)

    # 1.5
    add_heading(doc, "1.5. Conclusion du chapitre", 2)
    add_body(doc,
        "Ce premier chapitre a permis de situer TalentPredict dans son contexte, d'identifier "
        "les limites des solutions existantes et de présenter la valeur ajoutée de notre "
        "approche. Le chapitre suivant détaillera l'analyse et la spécification des besoins "
        "fonctionnels et non fonctionnels de la plateforme."
    )

    doc.add_page_break()

    # ══════════════════════════════════════════
    # CHAPITRE 2
    # ══════════════════════════════════════════
    add_heading(doc, "Chapitre II : Analyse et spécification des besoins", 1)

    # 2.1
    add_heading(doc, "2.1. Introduction", 2)
    add_body(doc,
        "Ce chapitre présente la phase d'analyse et de spécification des besoins de la plateforme "
        "TalentPredict. Nous identifierons les différents acteurs du système, détaillerons les "
        "besoins fonctionnels et non fonctionnels, et présenterons les diagrammes UML constitutifs "
        "de la conception préliminaire."
    )

    # 2.2
    add_heading(doc, "2.2. Identification des acteurs", 2)
    add_heading(doc, "2.2.1. Diagramme de contexte", 3)
    add_placeholder(doc, "Diagramme de contexte de TalentPredict", 5)

    add_heading(doc, "2.2.2. Description des acteurs", 3)
    actors = [
        ("Administrateur", "Gère les utilisateurs, configure la plateforme, valide les compétences et supervise les formations."),
        ("Responsable RH / Manager", "Consulte les tableaux de bord, assigne des formations, suit les progrès des collaborateurs."),
        ("Employé (Candidat)", "Passe les tests, consulte ses résultats, suit ses formations et voit ses recommandations."),
        ("Système IA (Ollama/LLM)", "Analyse les réponses aux tests, génère des recommandations et prédit les besoins en formation."),
        ("Système n8n", "Orchestre les workflows d'analyse et de notification."),
        ("Jira (Système externe)", "Reçoit les tickets de formation générés automatiquement."),
    ]
    add_table(doc,
        ["Acteur", "Rôle et responsabilités"],
        actors,
        "Description des acteurs du système TalentPredict"
    )

    # 2.3
    add_heading(doc, "2.3. Besoins fonctionnels", 2)
    add_heading(doc, "2.3.1. Module d'authentification et gestion des utilisateurs", 3)
    add_body(doc,
        "Ce module gère l'inscription, la connexion et la gestion des profils utilisateurs. "
        "Il repose sur Spring Security avec authentification JWT (JSON Web Token), valide "
        "24 heures. Deux rôles sont définis : USER (employé) et ADMIN."
    )
    for f in ["Inscription avec email/mot de passe.", "Connexion avec génération de token JWT.",
              "Modification du profil (nom, prénom).", "Gestion des rôles par l'administrateur."]:
        p = doc.add_paragraph(f, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"; r.font.size = Pt(12)

    add_heading(doc, "2.3.2. Module d'analyse des soft skills", 3)
    add_body(doc,
        "Ce module constitue le cœur de la contribution de ce rapport. Il permet aux "
        "collaborateurs de passer des tests psychométriques (MBTI, Big Five, DISC, PCM) "
        "dont les résultats sont analysés par le modèle de langage Ollama (llama3.2) via "
        "le workflow n8n."
    )
    for f in [
        "Soumission d'un test de personnalité avec réponses structurées.",
        "Envoi du CV (PDF) dont le texte est extrait côté client (pdfjs-dist).",
        "Analyse automatique par LLM via webhook n8n.",
        "Calcul des scores par dimension (communication, leadership, adaptabilité…).",
        "Identification du type PCM dominant.",
        "Génération de recommandations de formation comportementale.",
        "Historique des tests et évolution des scores.",
    ]:
        p = doc.add_paragraph(f, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"; r.font.size = Pt(12)

    add_heading(doc, "2.3.3. Module d'analyse des hard skills", 3)
    add_body(doc,
        "[NOTE : Ce module est développé par le binôme. Les éléments suivants sont mentionnés "
        "à titre informatif pour la cohérence du rapport global.]"
    )
    for f in ["Analyse des dépôts GitHub de l'utilisateur.", "Extraction automatique des compétences techniques.",
              "Comparaison CV vs compétences détectées par l'IA.", "Calcul de scores techniques par catégorie."]:
        p = doc.add_paragraph(f, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"; r.font.size = Pt(12)

    add_heading(doc, "2.3.4. Module de recommandations et formations", 3)
    for f in [
        "Génération de prédictions IA combinant soft et hard skills.",
        "Proposition de formations adaptées avec score de confiance.",
        "Suivi de la progression des formations (0–100 %).",
        "Statuts de formation : Proposée, Acceptée, En cours, Terminée.",
        "Création automatique de tickets Jira pour chaque formation prioritaire.",
    ]:
        p = doc.add_paragraph(f, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"; r.font.size = Pt(12)

    add_heading(doc, "2.3.5. Module tableau de bord", 3)
    for f in ["Vue d'ensemble des évaluations et formations.", "Statistiques graphiques (Chart.js).",
              "Top compétences identifiées.", "Dernière prédiction IA.", "Historique des tests."]:
        p = doc.add_paragraph(f, style="List Bullet")
        for r in p.runs:
            r.font.name = "Times New Roman"; r.font.size = Pt(12)

    add_heading(doc, "2.3.6. Diagrammes de cas d'utilisation", 3)
    add_placeholder(doc, "Diagramme de cas d'utilisation global – TalentPredict", 6)
    add_placeholder(doc, "Diagramme de cas d'utilisation – Module Soft Skills", 6)
    add_placeholder(doc, "Diagramme de cas d'utilisation – Module Formations et Recommandations", 6)

    add_heading(doc, "2.3.7. Description détaillée des cas d'utilisation", 3)
    uc_rows = [
        ("UC01", "S'authentifier", "Employé, Admin", "L'utilisateur entre ses identifiants et reçoit un token JWT valide."),
        ("UC02", "Passer un test soft skills", "Employé", "L'employé soumet ses réponses + CV ; l'IA analyse et retourne les scores."),
        ("UC03", "Consulter ses résultats", "Employé", "L'employé visualise ses scores par dimension et son type PCM."),
        ("UC04", "Valider une compétence", "Admin", "L'administrateur confirme ou rejette une compétence déclarée."),
        ("UC05", "Générer une prédiction IA", "Employé, RH", "Le système génère une prédiction de développement personnalisée."),
        ("UC06", "Suivre une formation", "Employé", "L'employé met à jour la progression d'une formation assignée."),
        ("UC07", "Créer un ticket Jira", "Système", "Un ticket Jira est créé automatiquement pour une formation prioritaire."),
        ("UC08", "Consulter le tableau de bord", "RH, Admin", "Visualisation des statistiques et KPIs de l'équipe."),
    ]
    add_table(doc,
        ["ID", "Cas d'utilisation", "Acteur(s)", "Description"],
        uc_rows,
        "Description des cas d'utilisation principaux"
    )
    add_placeholder(doc, "Tableaux de description détaillée des UC (format fiche UC)", 4)

    # 2.4
    add_heading(doc, "2.4. Besoins non fonctionnels", 2)
    nf_rows = [
        ("Performance", "Temps de réponse < 3s pour les analyses IA ; extraction CV < 1s (client-side)."),
        ("Sécurité", "Authentification JWT, BCrypt pour les mots de passe, CORS configuré, protection SQL Injection via JPA."),
        ("Scalabilité", "Architecture conteneurisée Docker, déployable sur Kubernetes. Connexion pooling HikariCP."),
        ("Disponibilité", "Uptime cible > 99,5 %. Monitoring via Spring Actuator."),
        ("Compatibilité", "Application web responsive, compatible Chrome, Firefox, Edge (dernières versions)."),
        ("Ergonomie (UX/UI)", "Interface Angular Material, design responsive, retour visuel immédiat sur les actions."),
        ("Maintenabilité", "Architecture en couches (Controller/Service/Repository), DTOs découplés, gestion centralisée des exceptions."),
        ("Confidentialité", "Extraction PDF côté client (PDF ne quitte pas le navigateur). Conformité RGPD."),
    ]
    add_table(doc,
        ["Besoin", "Description"],
        nf_rows,
        "Besoins non fonctionnels de TalentPredict"
    )

    # 2.5
    add_heading(doc, "2.5. Diagrammes de séquence", 2)
    for seq in [
        "Séquence – Authentification (Login + JWT)",
        "Séquence – Analyse soft skills (Test + CV + LLM + n8n)",
        "Séquence – Génération de prédiction IA",
        "Séquence – Création ticket Jira",
    ]:
        add_placeholder(doc, seq, 6)

    # 2.6
    add_heading(doc, "2.6. Spécifications techniques", 2)
    add_heading(doc, "2.6.1. Stack technologique", 3)
    tech_rows = [
        ("Frontend", "Angular 17", "Framework SPA moderne, TypeScript, Angular Material"),
        ("Backend", "Spring Boot 3.2 / Java 17", "REST API, Spring Security, Spring Data JPA"),
        ("Base de données", "PostgreSQL 15", "SGBD relationnel robuste, JSONB pour données flexibles"),
        ("ORM", "Hibernate / JPA", "Mapping objet-relationnel, Lazy Loading, pagination"),
        ("Sécurité", "Spring Security + JWT", "Authentification stateless, BCrypt"),
        ("Orchestration IA", "n8n", "Workflows automatisés sans code, webhooks"),
        ("LLM", "Ollama (llama3.2)", "IA générative locale, analyse comportementale"),
        ("Conteneurisation", "Docker + Docker Compose", "Environnements reproductibles"),
        ("CI/CD", "GitLab CI", "Pipeline build/test/deploy automatisé"),
        ("Gestion de tickets", "Jira REST API v3", "Création automatique de tickets de formation"),
        ("Graphiques", "Chart.js", "Visualisation des statistiques du tableau de bord"),
        ("PDF Client", "pdfjs-dist", "Extraction du texte CV côté navigateur"),
    ]
    add_table(doc,
        ["Couche", "Technologie", "Justification"],
        tech_rows,
        "Stack technologique de TalentPredict"
    )

    add_heading(doc, "2.6.2. Architecture applicative", 3)
    add_body(doc,
        "L'application adopte une architecture en couches (Layered Architecture) côté backend, "
        "organisée en modules fonctionnels indépendants : auth, user, evaluation, skills, "
        "formation, ai, jira, dashboard. Chaque module expose ses services via des contrôleurs "
        "REST et communique via des interfaces de service (interfaces Java), garantissant un "
        "couplage faible et une testabilité élevée."
    )
    add_body(doc,
        "Le modèle de données principal comprend les entités suivantes : Utilisateur, "
        "TestPersonnalite, Skill, Formation, Prediction et Ticket. Les relations sont gérées "
        "par JPA/Hibernate avec des clés étrangères et des stratégies de chargement optimisées."
    )

    # 2.7
    add_heading(doc, "2.7. Conclusion du chapitre", 2)
    add_body(doc,
        "Ce chapitre a permis de définir de manière exhaustive les besoins fonctionnels et "
        "non fonctionnels de TalentPredict, d'identifier les acteurs et leurs interactions, "
        "et de présenter les choix technologiques justifiés. Le chapitre suivant détaillera "
        "la conception détaillée et l'implémentation des modules de la plateforme."
    )

    # Save
    out_path = os.path.join(OUTPUT_DIR, "Chapitre1_Chapitre2.docx")
    doc.save(out_path)
    print(f"✅ DOCX généré : {out_path}")
    return out_path


# ─────────────────────────────────────────────
# GÉNÉRATION LaTeX
# ─────────────────────────────────────────────

LATEX_CONTENT = r"""\documentclass[12pt,a4paper]{report}

% ─── Packages ───────────────────────────────
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[french]{babel}
\usepackage[top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
\usepackage{graphicx}
\usepackage{array}
\usepackage{tabularx}
\usepackage{longtable}
\usepackage{booktabs}
\usepackage{xcolor}
\usepackage{fancyhdr}
\usepackage{hyperref}
\usepackage{listings}
\usepackage{setspace}
\usepackage{titlesec}
\usepackage{microtype}
\usepackage{parskip}
\usepackage{tocloft}

% ─── Couleurs ───────────────────────────────
\definecolor{darkblue}{RGB}{0,51,102}
\definecolor{medblue}{RGB}{31,73,125}
\definecolor{lightgray}{RGB}{217,217,217}
\definecolor{codegreen}{rgb}{0,0.6,0}
\definecolor{codegray}{rgb}{0.5,0.5,0.5}

% ─── Titre des sections ─────────────────────
\titleformat{\chapter}[hang]
  {\huge\bfseries\color{darkblue}}
  {Chapitre \thechapter :}{0.5em}{}
\titleformat{\section}
  {\Large\bfseries\color{medblue}}
  {\thesection}{0.5em}{}
\titleformat{\subsection}
  {\large\bfseries\color{darkblue}}
  {\thesubsection}{0.5em}{}

% ─── En-têtes / Pieds de page ───────────────
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\textit{TalentPredict – Rapport PFE}}
\fancyhead[R]{\small\textit{\leftmark}}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}

% ─── Interligne ────────────────────────────
\setstretch{1.5}

% ─── Listings (code) ───────────────────────
\lstset{
  backgroundcolor=\color{lightgray!40},
  basicstyle=\ttfamily\small,
  breaklines=true,
  captionpos=b,
  commentstyle=\color{codegreen},
  keywordstyle=\color{blue},
  stringstyle=\color{red},
  frame=single,
  rulecolor=\color{lightgray}
}

% ─── Macro placeholder diagramme ───────────
\newcommand{\placeholder}[2][5cm]{%
  \begin{figure}[h]
    \centering
    \fbox{\parbox{0.85\textwidth}{%
      \centering\vspace{#1}%
      \textbf{[À INSÉRER : #2]}%
      \vspace{#1}}}
    \caption{#2}
    \label{fig:\detokenize{#2}}
  \end{figure}
}

% ──────────────────────────────────────────────
\begin{document}

% ─── Page de titre ───────────────────────────
\begin{titlepage}
  \centering
  \vspace*{2cm}
  {\Huge\bfseries\color{darkblue} RAPPORT DE PROJET DE FIN D'ÉTUDES\par}
  \vspace{1cm}
  {\Large\bfseries\color{medblue} TalentPredict\par}
  \vspace{0.5cm}
  {\large Plateforme Intelligente d'Analyse et de Prédiction des Talents\par}
  \vspace{2cm}
  % Logo institution [À INSÉRER]
  \vspace{2cm}
  {\large Année universitaire 2025 – 2026\par}
\end{titlepage}

% ─── Table des matières ──────────────────────
\tableofcontents
\newpage

% ══════════════════════════════════════════════
% CHAPITRE 1
% ══════════════════════════════════════════════
\chapter{Contexte général et problématique}

\section{Introduction}

Dans un contexte économique en constante mutation, où la compétitivité repose de plus en plus
sur le capital humain, les organisations font face à un défi majeur : identifier, évaluer et
développer les talents de manière efficace et personnalisée. Le présent projet de fin d'études
s'inscrit dans cette problématique en proposant une plateforme innovante dénommée
\textbf{TalentPredict}, conçue pour automatiser et optimiser le processus d'évaluation des
compétences au sein des entreprises.

Ce premier chapitre a pour objectif de poser le cadre général du projet. Il présente la
problématique identifiée, analyse les solutions existantes sur le marché, puis introduit la
solution proposée avec ses points de différenciation.

\section{Cadre du projet}

\subsection{Objectifs du projet}

TalentPredict vise à fournir aux équipes RH et aux managers une plateforme centralisée permettant
d'évaluer les compétences comportementales (\textit{soft skills}) et techniques (\textit{hard
skills}) des collaborateurs, de générer des recommandations de formation personnalisées grâce
à l'intelligence artificielle, et de suivre leur évolution dans le temps.

Les objectifs principaux sont :
\begin{itemize}
  \item Automatiser l'évaluation des soft skills via des tests psychométriques analysés par IA.
  \item Analyser les compétences techniques à partir des profils GitHub et CV des collaborateurs.
  \item Générer des recommandations de formation personnalisées via un moteur IA (LLM).
  \item Offrir un tableau de bord analytique pour le suivi des progrès et des formations.
  \item Intégrer un workflow de validation des formations via Jira.
\end{itemize}

\subsection{Périmètre et limitations}

Le périmètre du projet couvre la conception et le développement d'une application web full-stack
comprenant un backend Spring Boot, un frontend Angular et une couche d'orchestration basée sur
n8n. La plateforme s'adresse principalement aux PME et grandes entreprises disposant d'équipes
RH structurées.

Dans le cadre de ce projet de fin d'études, la responsabilité est divisée entre deux binômistes :
la partie soft skills (analyse comportementale, tests psychométriques, intégration Ollama/LLM)
constitue le périmètre de ce rapport, tandis que l'analyse des hard skills (extraction GitHub,
analyse technique) est traitée séparément.

\subsection{Enjeux et motivations}

Les enjeux de TalentPredict sont multiples. Sur le plan organisationnel, la plateforme permet de
réduire le temps consacré aux évaluations manuelles, d'objectiver les décisions RH et
d'optimiser les investissements en formation. Sur le plan technologique, elle exploite des
technologies modernes (IA générative, workflows automatisés) pour créer une valeur ajoutée
concrète.

\section{Étude de l'existant}

\subsection{Analyse des solutions existantes}

Plusieurs plateformes existent pour l'évaluation et la gestion des talents. Parmi les solutions
les plus répandues, on peut citer : LinkedIn Learning, Cornerstone OnDemand, SAP SuccessFactors,
Cegid Talentsoft et Pymetrics.

\subsection{Tableau comparatif des solutions existantes}

% [TODO : Insérer tableau comparatif avec données réelles]
\placeholder[2cm]{Tableau comparatif -- Analyse des plateformes concurrentes}

Sur la base de cette analyse comparative \textbf{[SOURCE NÉCESSAIRE]}, il ressort que la majorité
des solutions existantes présentent des lacunes importantes : absence d'analyse comportementale
par IA générative, manque de personnalisation des recommandations, et faible intégration avec
les outils de gestion de projet.

\begin{table}[h]
\centering
\renewcommand{\arraystretch}{1.3}
\begin{tabularx}{\textwidth}{|l|X|X|X|X|}
\hline
\rowcolor{lightgray}
\textbf{Critère} & \textbf{LinkedIn}& \textbf{Cornerstone}& \textbf{SAP SF}& \textbf{TalentPredict}\\
\hline
Soft skills IA & Partiel & Oui & Oui & Oui (LLM local)\\
\hline
Hard skills GitHub & Non & Non & Non & Oui\\
\hline
Open Source & Non & Non & Non & Oui\\
\hline
Intégration Jira & Non & Partiel & Oui & Oui\\
\hline
Prix & Élevé & Élevé & Très élevé & Sur mesure\\
\hline
\end{tabularx}
\caption{Comparaison des solutions de gestion des talents}
\label{tab:comparaison}
\end{table}

\subsection{Limites des solutions actuelles}

Les solutions actuelles présentent plusieurs limitations :
\begin{itemize}
  \item Coût élevé des licences pour les PME.
  \item Manque de personnalisation selon le profil individuel du collaborateur.
  \item Absence d'intégration native avec des outils comme Jira ou n8n.
  \item Faible exploitation de l'IA générative pour l'analyse comportementale.
  \item Pas de suivi GitHub pour l'évaluation des compétences techniques.
\end{itemize}

\section{Solution proposée}

\subsection{Vue d'ensemble de TalentPredict}

TalentPredict est une plateforme web basée sur une architecture moderne en couches, intégrant :
\begin{itemize}
  \item Un frontend \textbf{Angular 17} avec Angular Material.
  \item Un backend \textbf{Spring Boot 3.2} (Java 17) exposant une API REST sécurisée.
  \item Une base de données \textbf{PostgreSQL 15}.
  \item Une couche d'orchestration de workflows via \textbf{n8n}.
  \item Un modèle de langage local \textbf{Ollama (llama3.2)} pour l'analyse comportementale.
  \item Une conteneurisation complète avec \textbf{Docker} et \textbf{Docker Compose}.
\end{itemize}

\subsection{Valeur ajoutée et innovations}

\begin{itemize}
  \item \textbf{IA générative locale} (Ollama/llama3.2) : confidentialité des données garantie,
        aucun envoi vers des API tierces payantes.
  \item \textbf{Orchestration n8n} : workflows automatisés flexibles sans infrastructure complexe.
  \item \textbf{Architecture modulaire} Spring Boot : maintainabilité et extensibilité.
  \item \textbf{Extraction PDF côté client} (pdfjs-dist) : performance améliorée (1-3s vs 4-7s).
  \item \textbf{Intégration Jira} : suivi des formations via tickets créés automatiquement.
\end{itemize}

\subsection{Architecture globale}

\placeholder[3cm]{Diagramme d'architecture globale de TalentPredict}

\section{Conclusion du chapitre}

Ce premier chapitre a permis de situer TalentPredict dans son contexte, d'identifier les limites
des solutions existantes et de présenter la valeur ajoutée de notre approche. Le chapitre suivant
détaillera l'analyse et la spécification des besoins fonctionnels et non fonctionnels de la
plateforme.

% ══════════════════════════════════════════════
% CHAPITRE 2
% ══════════════════════════════════════════════
\chapter{Analyse et spécification des besoins}

\section{Introduction}

Ce chapitre présente la phase d'analyse et de spécification des besoins de la plateforme
TalentPredict. Nous identifierons les différents acteurs du système, détaillerons les besoins
fonctionnels et non fonctionnels, et présenterons les diagrammes UML constitutifs de la
conception préliminaire.

\section{Identification des acteurs}

\subsection{Diagramme de contexte}

\placeholder[3cm]{Diagramme de contexte de TalentPredict}

\subsection{Description des acteurs}

\begin{table}[h]
\centering
\renewcommand{\arraystretch}{1.3}
\begin{tabularx}{\textwidth}{|l|X|}
\hline
\rowcolor{lightgray}
\textbf{Acteur} & \textbf{Rôle et responsabilités}\\
\hline
Administrateur & Gère les utilisateurs, configure la plateforme, valide les compétences et supervise les formations.\\
\hline
Responsable RH / Manager & Consulte les tableaux de bord, assigne des formations, suit les progrès des collaborateurs.\\
\hline
Employé (Candidat) & Passe les tests, consulte ses résultats, suit ses formations et voit ses recommandations.\\
\hline
Système IA (Ollama/LLM) & Analyse les réponses aux tests, génère les recommandations et prédit les besoins en formation.\\
\hline
Système n8n & Orchestre les workflows d'analyse et de notification.\\
\hline
Jira (Externe) & Reçoit les tickets de formation générés automatiquement.\\
\hline
\end{tabularx}
\caption{Description des acteurs du système TalentPredict}
\label{tab:acteurs}
\end{table}

\section{Besoins fonctionnels}

\subsection{Module d'authentification et gestion des utilisateurs}

Ce module gère l'inscription, la connexion et la gestion des profils. Il repose sur Spring
Security avec authentification JWT valide 24 heures. Deux rôles sont définis : \texttt{USER}
et \texttt{ADMIN}.

\begin{itemize}
  \item Inscription avec email et mot de passe (hashé BCrypt).
  \item Connexion avec génération de token JWT.
  \item Modification du profil (nom, prénom).
  \item Gestion des rôles par l'administrateur.
\end{itemize}

\subsection{Module d'analyse des soft skills}

Ce module constitue le cœur de la contribution de ce rapport. Il permet aux collaborateurs de
passer des tests psychométriques (MBTI, Big Five, DISC, PCM) dont les résultats sont analysés
par le modèle de langage Ollama (\texttt{llama3.2}) via le workflow n8n.

\begin{itemize}
  \item Soumission d'un test de personnalité avec réponses structurées (PCM : 18 questions).
  \item Envoi du CV (PDF/TXT) dont le texte est extrait côté client (\texttt{pdfjs-dist}).
  \item Analyse automatique par LLM via webhook n8n.
  \item Calcul des scores par dimension comportementale.
  \item Identification du type PCM dominant (Thinker, Persister, Harmonizer, etc.).
  \item Génération de recommandations de formation comportementale.
  \item Historique des tests et évolution des scores dans le temps.
\end{itemize}

\subsection{Module d'analyse des hard skills}
\textit{[NOTE : Ce module est développé par le binôme.]}
\begin{itemize}
  \item Analyse des dépôts GitHub de l'utilisateur.
  \item Extraction automatique des compétences techniques.
  \item Comparaison CV vs compétences détectées par l'IA.
\end{itemize}

\subsection{Module de recommandations et formations}

\begin{itemize}
  \item Génération de prédictions IA combinant soft et hard skills (score de confiance inclus).
  \item Proposition de formations adaptées au profil.
  \item Suivi de la progression des formations (0--100\,\%).
  \item Statuts : Proposée, Acceptée, En cours, Terminée.
  \item Création automatique de tickets Jira pour chaque formation prioritaire.
\end{itemize}

\subsection{Module tableau de bord}

\begin{itemize}
  \item Vue d'ensemble des évaluations et formations de l'utilisateur.
  \item Statistiques graphiques via Chart.js.
  \item Top compétences identifiées.
  \item Dernière prédiction IA.
  \item Historique complet des tests.
\end{itemize}

\subsection{Diagrammes de cas d'utilisation}

\placeholder[3cm]{Diagramme de cas d'utilisation global -- TalentPredict}
\placeholder[3cm]{Diagramme de cas d'utilisation -- Module Soft Skills}
\placeholder[3cm]{Diagramme de cas d'utilisation -- Module Formations et Recommandations}

\subsection{Description détaillée des cas d'utilisation}

\begin{longtable}{|p{1.2cm}|p{3.5cm}|p{2.5cm}|p{6cm}|}
\hline
\rowcolor{lightgray}
\textbf{ID} & \textbf{Cas d'utilisation} & \textbf{Acteur(s)} & \textbf{Description}\\
\hline
\endhead
UC01 & S'authentifier & Employé, Admin & L'utilisateur entre ses identifiants et reçoit un token JWT valide.\\
\hline
UC02 & Passer un test soft skills & Employé & L'employé soumet réponses + CV ; l'IA analyse et retourne les scores.\\
\hline
UC03 & Consulter ses résultats & Employé & L'employé visualise ses scores par dimension et son type PCM.\\
\hline
UC04 & Valider une compétence & Admin & L'administrateur confirme ou rejette une compétence déclarée.\\
\hline
UC05 & Générer une prédiction IA & Employé, RH & Le système génère une prédiction de développement personnalisée.\\
\hline
UC06 & Suivre une formation & Employé & L'employé met à jour la progression d'une formation assignée.\\
\hline
UC07 & Créer ticket Jira & Système & Un ticket Jira est créé automatiquement pour une formation prioritaire.\\
\hline
UC08 & Consulter tableau de bord & RH, Admin & Visualisation des statistiques et KPIs de l'équipe.\\
\hline
\caption{Description des cas d'utilisation principaux de TalentPredict}
\label{tab:uc}
\end{longtable}

\placeholder[2cm]{Fiches de description détaillée des UC (format standardisé)}

\section{Besoins non fonctionnels}

\begin{table}[h]
\centering
\renewcommand{\arraystretch}{1.3}
\begin{tabularx}{\textwidth}{|l|X|}
\hline
\rowcolor{lightgray}
\textbf{Besoin} & \textbf{Description}\\
\hline
Performance & Temps de réponse $<$ 3s pour les analyses IA ; extraction CV $<$ 1s (client-side).\\
\hline
Sécurité & JWT, BCrypt, CORS, protection SQL via JPA.\\
\hline
Scalabilité & Docker + Kubernetes, HikariCP connection pooling.\\
\hline
Disponibilité & Uptime cible $>$ 99,5\,\%. Monitoring Spring Actuator.\\
\hline
Compatibilité & Navigateurs modernes (Chrome, Firefox, Edge).\\
\hline
Ergonomie & Angular Material, design responsive, retours immédiats.\\
\hline
Maintenabilité & Architecture en couches, DTOs, exceptions centralisées.\\
\hline
Confidentialité & PDF extrait côté client, conformité RGPD.\\
\hline
\end{tabularx}
\caption{Besoins non fonctionnels de TalentPredict}
\label{tab:nf}
\end{table}

\section{Diagrammes de séquence}

\placeholder[3cm]{Diagramme de séquence -- Authentification (Login + JWT)}
\placeholder[3cm]{Diagramme de séquence -- Analyse soft skills (Test + CV + LLM + n8n)}
\placeholder[3cm]{Diagramme de séquence -- Génération de prédiction IA}
\placeholder[3cm]{Diagramme de séquence -- Création ticket Jira}

\section{Spécifications techniques}

\subsection{Stack technologique justifié}

\begin{table}[h]
\centering
\renewcommand{\arraystretch}{1.3}
\begin{tabularx}{\textwidth}{|l|l|X|}
\hline
\rowcolor{lightgray}
\textbf{Couche} & \textbf{Technologie} & \textbf{Justification}\\
\hline
Frontend & Angular 17 & SPA moderne, TypeScript, Angular Material\\
\hline
Backend & Spring Boot 3.2 / Java 17 & REST API, sécurité Spring, JPA\\
\hline
Base de données & PostgreSQL 15 & SGBD robuste, JSONB pour données flexibles\\
\hline
Sécurité & Spring Security + JWT & Authentification stateless, BCrypt\\
\hline
Orchestration IA & n8n & Workflows automatisés, webhooks\\
\hline
LLM & Ollama (llama3.2) & IA générative locale, confidentialité\\
\hline
Conteneurisation & Docker + Compose & Environnements reproductibles\\
\hline
PDF Client & pdfjs-dist & Extraction CV côté navigateur ($<$1s)\\
\hline
Gestion tickets & Jira REST API v3 & Création automatique de tickets\\
\hline
\end{tabularx}
\caption{Stack technologique de TalentPredict}
\label{tab:stack}
\end{table}

\subsection{Architecture applicative}

L'application adopte une \textbf{architecture en couches} (\textit{Layered Architecture}) côté
backend, organisée en modules fonctionnels indépendants :
\texttt{auth}, \texttt{user}, \texttt{evaluation}, \texttt{skills}, \texttt{formation},
\texttt{ai}, \texttt{jira}, \texttt{dashboard}.

Chaque module expose ses services via des contrôleurs REST et communique via des interfaces de
service Java, garantissant un couplage faible et une testabilité élevée.

Le modèle de données comprend les entités principales :
\texttt{Utilisateur}, \texttt{TestPersonnalite}, \texttt{Skill}, \texttt{Formation},
\texttt{Prediction}, \texttt{Ticket}.

\section{Conclusion du chapitre}

Ce chapitre a permis de définir de manière exhaustive les besoins fonctionnels et non fonctionnels
de TalentPredict, d'identifier les acteurs et leurs interactions, et de présenter les choix
technologiques justifiés. Le chapitre suivant détaillera la conception détaillée et
l'implémentation des modules de la plateforme.

\end{document}
"""


def generate_latex():
    out_path = os.path.join(OUTPUT_DIR, "Chapitre1_Chapitre2.tex")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(LATEX_CONTENT)
    print(f"✅ LaTeX généré : {out_path}")
    return out_path


INSTRUCTIONS_CONTENT = """=======================================================
INSTRUCTIONS D'UTILISATION - RAPPORT PFE TalentPredict
=======================================================

FICHIERS GÉNÉRÉS
----------------
1. Chapitre1_Chapitre2.docx  → Document Word éditable
2. Chapitre1_Chapitre2.tex   → Source LaTeX compilable
3. Instructions_utilisation.txt → Ce fichier

=======================================================
ESPACES RÉSERVÉS À COMPLÉTER (DOCX & LaTeX)
=======================================================

[1] Tableau comparatif - Analyse des plateformes concurrentes
    → Ajouter les données comparatives réelles provenant de votre étude de l'existant
    → Colonnes suggérées : Plateforme, Soft Skills IA, Hard Skills, Prix, Intégration Jira

[2] Diagramme d'architecture globale de TalentPredict
    → Insérer le diagramme dc.png ou un diagramme équivalent depuis le dossier rapport doc

[3] Diagramme de contexte de TalentPredict
    → Schéma montrant les acteurs externes et leurs interactions avec le système

[4] Diagramme de cas d'utilisation global
    → Diagramme UML use case avec tutti acteurs (d_use_cases.jpeg disponible dans rapport doc)

[5] Diagramme de cas d'utilisation - Module Soft Skills
    → Use case spécifique au module d'évaluation comportementale

[6] Diagramme de cas d'utilisation - Module Formations
    → Use case pour le workflow formation + recommandations + Jira

[7] Fiches de description détaillée des UC
    → Tableaux format : Nom, Acteurs, Préconditions, Postconditions, Scénario nominal, Alternatives

[8] Diagramme de séquence - Authentification
    → Séquence Login → Spring Security → JWT → Client (d_sequences.jpeg disponible)

[9] Diagramme de séquence - Analyse soft skills
    → Frontend → n8n webhook → Ollama → Réponse avec scores

[10] Diagramme de séquence - Génération prédiction IA
     → Backend → OpenAI/Ollama → Sauvegarde → Réponse

[11] Diagramme de séquence - Création ticket Jira
     → System → JiraService → Jira REST API → Ticket créé

=======================================================
COMPILATION LaTeX
=======================================================

Prérequis : TeX Live ou MiKTeX installé

Commande de compilation :
  pdflatex Chapitre1_Chapitre2.tex
  pdflatex Chapitre1_Chapitre2.tex  (2ème fois pour la table des matières)

Ou avec latexmk (recommandé) :
  latexmk -pdf Chapitre1_Chapitre2.tex

Packages requis (inclus dans TeX Live complet) :
  babel, geometry, graphicx, tabularx, longtable, booktabs,
  xcolor, fancyhdr, hyperref, listings, setspace, titlesec,
  microtype, parskip, tocloft

Pour insérer une image dans LaTeX (remplacer un placeholder) :
  \\begin{figure}[h]
    \\centering
    \\includegraphics[width=0.8\\textwidth]{nom_image.png}
    \\caption{Légende}
    \\label{fig:nom}
  \\end{figure}

=======================================================
PERSONNALISATION DOCX
=======================================================

1. Ouvrir Chapitre1_Chapitre2.docx avec Microsoft Word
2. Mettre à jour la table des matières : Références → Mettre à jour la table
3. Remplacer les placeholders gris par vos diagrammes :
   - Clic droit sur le placeholder → Supprimer
   - Insertion → Image → Sélectionner votre fichier
4. Compléter les annotations [SOURCE NÉCESSAIRE]

=======================================================
DIVISION DES TÂCHES (BINÔME)
=======================================================

CE RAPPORT (votre partie) :
  - Module Soft Skills : tests psychométriques, analyse LLM, n8n, Ollama
  - Module Authentification et Utilisateurs
  - Module Tableau de bord et Dashboard
  - Module Recommandations (formations proposées par l'IA)
  - Module Jira Integration

PARTIE BINÔME :
  - Module Hard Skills : analyse GitHub, extraction compétences techniques
  - CV Comparator (CV vs GitHub skills)
  - Scoring technique

=======================================================
CONTACT ANNOTATIONS
=======================================================

Chercher dans les fichiers les marqueurs suivants pour compléter :
  [À INSÉRER : ...]    → Placeholder visuel à remplacer
  [SOURCE NÉCESSAIRE]  → Référence bibliographique manquante
  [NOTE : ...]         → Commentaire éditorial à supprimer avant rendu final

=======================================================
"""


def generate_instructions():
    out_path = os.path.join(OUTPUT_DIR, "Instructions_utilisation.txt")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(INSTRUCTIONS_CONTENT)
    print(f"✅ Instructions générées : {out_path}")
    return out_path


# ─────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────

if __name__ == "__main__":
    print("🚀 Génération du rapport PFE TalentPredict...\n")
    generate_docx()
    generate_latex()
    generate_instructions()
    print("\n✅ Tous les fichiers ont été générés dans :", OUTPUT_DIR)
