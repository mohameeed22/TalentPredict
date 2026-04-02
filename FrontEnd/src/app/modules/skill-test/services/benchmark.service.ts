import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CandidateProgressItem {
  taken_at: string;
  overall_score: number;
  passed: boolean;
  test_type: string | null;
  skill_scores: Record<string, number>;
}

@Injectable({ providedIn: 'root' })
export class BenchmarkService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}`;

  benchmark(candidateId: string, skills: string[]): Observable<unknown> {
    return this.http.post(`${this.base}/analytics/benchmark`, {
      candidate_id: candidateId,
      skills
    });
  }

  progress(userId: string): Observable<CandidateProgressItem[]> {
    return this.http.get<CandidateProgressItem[]>(`${this.base}/candidates/${userId}/progress`);
  }

  downloadReportResponse(userId: string): Observable<HttpResponse<Blob>> {
    return this.http.post(`${this.base}/candidates/${userId}/generate-report`, {}, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  downloadReport(userId: string): Observable<Blob> {
    return this.downloadReportResponse(userId).pipe(
      map(response => response.body ?? new Blob())
    );
  }

  resolveReportFileName(response: HttpResponse<Blob>, fallbackName: string): string {
    const disposition = response.headers.get('content-disposition') ?? '';
    const utf8Name = disposition.match(/filename\*=\s*UTF-8''([^;]+)/i)?.[1];
    if (utf8Name) {
      try {
        return decodeURIComponent(utf8Name.replace(/['"]/g, ''));
      } catch {
        return utf8Name.replace(/['"]/g, '');
      }
    }

    const plainName = disposition.match(/filename=\s*"?([^";]+)"?/i)?.[1];
    if (plainName?.trim()) {
      return plainName.trim();
    }

    return fallbackName;
  }

  isPdfResponse(response: HttpResponse<Blob>, fileName: string): boolean {
    const contentType = (
      response.headers.get('content-type') ??
      response.body?.type ??
      ''
    ).toLowerCase();

    if (contentType.includes('application/pdf')) {
      return true;
    }

    return fileName.toLowerCase().endsWith('.pdf');
  }

  async extractBlobMessage(blob: Blob, fallback: string): Promise<string> {
    try {
      const text = (await blob.text()).trim();
      if (!text) {
        return fallback;
      }

      try {
        const parsed = JSON.parse(text) as Record<string, unknown>;
        const candidateMessage = parsed['message'] ?? parsed['error'] ?? parsed['detail'];
        if (typeof candidateMessage === 'string' && candidateMessage.trim()) {
          return candidateMessage.trim();
        }
      } catch {
        // Ignore JSON parsing errors and fallback to raw text.
      }

      return text.slice(0, 220);
    } catch {
      return fallback;
    }
  }

  async extractErrorMessage(error: unknown, fallback: string): Promise<string> {
    const err = error as { error?: unknown; message?: unknown };

    if (err?.error instanceof Blob) {
      return this.extractBlobMessage(err.error, fallback);
    }

    if (err?.error && typeof err.error === 'object') {
      const objectError = err.error as Record<string, unknown>;
      const candidateMessage = objectError['message'] ?? objectError['error'] ?? objectError['detail'];
      if (typeof candidateMessage === 'string' && candidateMessage.trim()) {
        return candidateMessage.trim();
      }
    }

    if (typeof err?.message === 'string' && err.message.trim()) {
      return err.message.trim();
    }

    return fallback;
  }
}
