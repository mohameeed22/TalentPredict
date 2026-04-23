import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-public-profile',
  standalone: true,
  imports: [CommonModule],
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
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.http.get(`${environment.apiUrl}/api/public/profile/${id}`).subscribe({
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
