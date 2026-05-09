package com.talentpredict.modules.reporting.services;

import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import com.talentpredict.modules.dashboard.dto.DashboardDto;
import com.talentpredict.modules.dashboard.services.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ExportService {

    private final DashboardService dashboardService;

    public byte[] generateTalentPassport(UUID userId) {
        DashboardDto.Response data = dashboardService.getDashboard(userId);
        String html = buildTalentPassportHtml(data);
        return generatePdf(html);
    }

    public byte[] generateHrReport() {
        // In a real app, this would fetch aggregated admin data
        String html = buildHrReportHtml();
        return generatePdf(html);
    }

    private byte[] generatePdf(String html) {
        try (ByteArrayOutputStream os = new ByteArrayOutputStream()) {
            PdfRendererBuilder builder = new PdfRendererBuilder();
            builder.useFastMode();
            builder.withHtmlContent(html, "/");
            builder.toStream(os);
            builder.run();
            return os.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Error generating PDF", e);
        }
    }

    private String buildTalentPassportHtml(DashboardDto.Response data) {
        // Simple HTML template for the Talent Passport
        return """
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Arial', sans-serif; color: #333; margin: 40px; }
                .header { text-align: center; border-bottom: 2px solid #6366f1; padding-bottom: 20px; }
                .title { color: #6366f1; font-size: 28px; margin-bottom: 5px; }
                .subtitle { color: #666; font-size: 16px; }
                .section { margin-top: 30px; }
                .section-title { font-size: 20px; color: #1e293b; border-left: 4px solid #6366f1; padding-left: 10px; margin-bottom: 15px; }
                .grid { display: flex; flex-wrap: wrap; }
                .card { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 10px; width: 100%; }
                .stat-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px; }
                .stat-box { background: #eef2ff; padding: 15px; text-align: center; border-radius: 10px; }
                .stat-val { font-size: 24px; font-weight: bold; color: #4338ca; }
                .stat-lbl { font-size: 12px; color: #6366f1; text-transform: uppercase; }
                .footer { margin-top: 50px; font-size: 10px; color: #94a3b8; text-align: center; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="title">TALENT PASSPORT</div>
                <div class="subtitle">Analyse IA & Profil de Compétences - TalentPredict</div>
            </div>
            
            <div class="section">
                <div class="section-title">Informations Générales</div>
                <p><strong>Nom:</strong> %s %s</p>
                <p><strong>Profil IA:</strong> %s</p>
            </div>

            <div class="stat-grid">
                <div class="stat-box">
                    <div class="stat-val">%s%%</div>
                    <div class="stat-lbl">Score Moyen</div>
                </div>
                <div class="stat-box">
                    <div class="stat-val">%d</div>
                    <div class="stat-lbl">Tests Passés</div>
                </div>
                <div class="stat-box">
                    <div class="stat-val">%d</div>
                    <div class="stat-lbl">Skills Soft/Tech</div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">Prédiction IA (Dernière Analyse)</div>
                <div class="card">
                    <p>%s</p>
                </div>
            </div>

            <div class="section">
                <div class="section-title">Recommandations de Carrière</div>
                <ul>
                    <li>Potentiel de mobilité interne élevé</li>
                    <li>Aptitude au leadership démontrée via les tests PCM</li>
                </ul>
            </div>

            <div class="footer">
                Document généré automatiquement par TalentPredict AI Engine - 2026
            </div>
        </body>
        </html>
        """.formatted(
            data.getFirstName(), data.getLastName(), 
            (data.getDernierePrediction() != null ? "Analysé" : "En attente"),
            (data.getScoreEvaluationMoyen() != null ? data.getScoreEvaluationMoyen() : 0.0),
            data.getNombreTests(),
            (data.getNombreSkillsSoft() + data.getNombreSkillsTech()),
            (data.getDernierePrediction() != null ? data.getDernierePrediction().getRecommandationSoft() : "Aucune recommandation disponible.")
        );
    }

    private String buildHrReportHtml() {
        return """
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Arial', sans-serif; color: #333; margin: 40px; }
                .header { text-align: center; border-bottom: 2px solid #0ea5e9; padding-bottom: 20px; }
                .title { color: #0ea5e9; font-size: 28px; margin-bottom: 5px; }
                .section { margin-top: 30px; }
                .section-title { font-size: 20px; color: #1e293b; border-left: 4px solid #0ea5e9; padding-left: 10px; margin-bottom: 15px; }
                .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                .table th, .table td { border: 1px solid #e2e8f0; padding: 12px; text-align: left; }
                .table th { background-color: #f8fafc; color: #0ea5e9; }
                .footer { margin-top: 50px; font-size: 10px; color: #94a3b8; text-align: center; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="title">RAPPORT ANALYTIQUE RH</div>
                <div class="subtitle">Synthèse Globale du Capital Humain - TalentPredict</div>
            </div>
            
            <div class="section">
                <div class="section-title">Indicateurs Clés de Performance (KPIs)</div>
                <p><strong>Couverture des tests:</strong> 85%</p>
                <p><strong>Taux de complétion des formations:</strong> 72%</p>
                <p><strong>Prédictions IA générées:</strong> 124</p>
            </div>

            <div class="section">
                <div class="section-title">Distribution des Compétences par Département</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Département</th>
                            <th>Effectif</th>
                            <th>Score Moyen</th>
                            <th>Besoin Formation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Ingénierie</td><td>45</td><td>82%</td><td>Faible</td></tr>
                        <tr><td>Marketing</td><td>12</td><td>74%</td><td>Moyen</td></tr>
                        <tr><td>RH</td><td>5</td><td>88%</td><td>Faible</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="footer">
                Confidentiel - TalentPredict Executive Intelligence - 2026
            </div>
        </body>
        </html>
        """;
    }
}
