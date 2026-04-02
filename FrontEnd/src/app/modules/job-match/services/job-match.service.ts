import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class JobMatchService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}`;

  match(body: {
    candidate_id: string;
    job_url?: string;
    job_description?: string;
  }): Observable<unknown> {
    return this.http.post(`${this.base}/jobs/match`, body);
  }
}
