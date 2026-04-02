import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-public-profile-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-profile-view.component.html',
  styleUrl: './public-profile-view.component.scss'
})
export class PublicProfileViewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  data: Record<string, unknown> | null = null;
  error: string | null = null;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.error = 'Profil introuvable.';
      return;
    }
    this.http.get<Record<string, unknown>>(`${environment.apiUrl}/public/profiles/${slug}`).subscribe({
      next: d => (this.data = d),
      error: () => (this.error = 'Profil introuvable.')
    });
  }
}
