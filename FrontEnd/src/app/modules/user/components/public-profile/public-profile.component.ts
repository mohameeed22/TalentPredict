import { Component, OnInit, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './public-profile.html',
  styleUrl: './public-profile.css'
})
export class PublicProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  profileData: any = null;
  loading = true;
  error = false;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.http.get(`${environment.apiUrl}/api/public/profiles/${slug}`).subscribe({
      next: (data) => {
        this.profileData = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
