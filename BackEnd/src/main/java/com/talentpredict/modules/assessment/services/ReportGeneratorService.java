package com.talentpredict.modules.assessment.services;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import com.talentpredict.modules.assessment.entities.CandidateTestResult;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReportGeneratorService {

    public byte[] buildPdfReport(User user, Profile profile, List<Skill> skills,
            List<CandidateTestResult> history) throws IOException {
        String html = buildHtml(user, profile, skills, history);
        try {
            ByteArrayOutputStream os = new ByteArrayOutputStream();
            PdfRendererBuilder builder = new PdfRendererBuilder();
            builder.useFastMode();
            builder.withHtmlContent(html, null);
            builder.toStream(os);
            builder.run();
            return os.toByteArray();
        } catch (IOException | RuntimeException | LinkageError e) {
            log.error("HTML PDF render failed, fallback renderer will be used", e);
            return buildFallbackPdf(user, profile, skills, history);
        }
    }

    private String buildHtml(User user, Profile profile, List<Skill> skills,
            List<CandidateTestResult> history) {
        StringBuilder sb = new StringBuilder();
        sb.append("<html><head><meta charset='UTF-8'><style>")
                .append("body{font-family:Arial,sans-serif;margin:24px;color:#111}")
                .append("h1{font-size:22px} h2{font-size:16px;margin-top:20px}")
                .append("table{border-collapse:collapse;width:100%} td,th{border:1px solid #ccc;padding:6px;font-size:12px}")
                .append("</style></head><body>");
        sb.append("<h1>TalentPredict — Candidate report</h1>");
        sb.append("<p><strong>Name:</strong> ")
                .append(escape(user.getFirstName())).append(" ").append(escape(user.getLastName())).append("</p>");
        if (profile != null && profile.getTitreProfessionnel() != null) {
            sb.append("<p><strong>Title:</strong> ").append(escape(profile.getTitreProfessionnel())).append("</p>");
        }
        if (profile != null && profile.getRealScore() != null) {
            sb.append("<p><strong>Latest skill test score:</strong> ").append(profile.getRealScore()).append("</p>");
        }
        sb.append("<h2>Skills</h2><table><tr><th>Skill</th><th>Level (1-5)</th></tr>");
        for (Skill s : skills) {
            sb.append("<tr><td>").append(escape(s.getNom())).append("</td><td>")
                    .append(s.getNiveau() != null ? s.getNiveau() : "")
                    .append("</td></tr>");
        }
        sb.append("</table><h2>Test history</h2><table><tr><th>Date</th><th>Overall</th><th>Passed</th></tr>");
        for (CandidateTestResult h : history) {
            sb.append("<tr><td>").append(h.getTakenAt() != null ? h.getTakenAt().toString() : "")
                    .append("</td><td>").append(h.getOverallScore() != null ? h.getOverallScore() : "")
                    .append("</td><td>").append(Boolean.TRUE.equals(h.getPassed()) ? "Yes" : "No")
                    .append("</td></tr>");
        }
        sb.append("</table></body></html>");
        return sb.toString();
    }

    private static String escape(String s) {
        if (s == null) {
            return "";
        }
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
    }

    private byte[] buildFallbackPdf(User user, Profile profile, List<Skill> skills,
            List<CandidateTestResult> history) throws IOException {
        List<String> lines = new ArrayList<>();
        lines.add("TalentPredict - Candidate report");
        lines.add("");
        lines.add("Name: " + safe(user.getFirstName()) + " " + safe(user.getLastName()));
        if (profile != null && profile.getTitreProfessionnel() != null) {
            lines.add("Title: " + safe(profile.getTitreProfessionnel()));
        }
        if (profile != null && profile.getRealScore() != null) {
            lines.add("Latest skill test score: " + profile.getRealScore());
        }

        lines.add("");
        lines.add("Skills:");
        for (Skill s : skills) {
            lines.add("- " + safe(s.getNom()) + " (level " + (s.getNiveau() != null ? s.getNiveau() : "?") + ")");
        }

        lines.add("");
        lines.add("Test history:");
        for (CandidateTestResult h : history) {
            lines.add("- "
                    + (h.getTakenAt() != null ? h.getTakenAt().toString() : "n/a")
                    + " | score: " + (h.getOverallScore() != null ? h.getOverallScore() : "n/a")
                    + " | passed: " + (Boolean.TRUE.equals(h.getPassed()) ? "Yes" : "No"));
        }

        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage(PDRectangle.A4);
            document.addPage(page);

            float margin = 50;
            float y = page.getMediaBox().getHeight() - margin;
            float leading = 15;
            PDType1Font baseFont = new PDType1Font(Standard14Fonts.FontName.HELVETICA);

            PDPageContentStream content = new PDPageContentStream(document, page);
            content.setFont(baseFont, 11);
            content.beginText();
            content.newLineAtOffset(margin, y);

            for (String line : lines) {
                if (y <= margin) {
                    content.endText();
                    content.close();
                    page = new PDPage(PDRectangle.A4);
                    document.addPage(page);
                    y = page.getMediaBox().getHeight() - margin;
                    content = new PDPageContentStream(document, page);
                    content.setFont(baseFont, 11);
                    content.beginText();
                    content.newLineAtOffset(margin, y);
                }

                content.showText(asciiOnly(line));
                content.newLineAtOffset(0, -leading);
                y -= leading;
            }

            content.endText();
            content.close();

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            document.save(out);
            return out.toByteArray();
        }
    }

    private static String safe(String value) {
        return value == null ? "" : value;
    }

    private static String asciiOnly(String value) {
        if (value == null || value.isEmpty()) {
            return "";
        }
        StringBuilder sb = new StringBuilder(value.length());
        for (int i = 0; i < value.length(); i++) {
            char c = value.charAt(i);
            if (c >= 32 && c <= 126) {
                sb.append(c);
            } else {
                sb.append('?');
            }
        }
        return sb.toString();
    }
}
