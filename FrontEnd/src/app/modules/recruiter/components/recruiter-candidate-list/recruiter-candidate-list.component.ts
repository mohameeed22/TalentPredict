import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterApiService, RecruiterCandidateRow } from '../../services/recruiter-api.service';

@Component({
  selector: 'app-recruiter-candidate-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recruiter-candidate-list.component.html',
  styleUrl: './recruiter-candidate-list.component.scss'
})
export class RecruiterCandidateListComponent implements OnInit {
  private api = inject(RecruiterApiService);
  rows: RecruiterCandidateRow[] = [];
  error: string | null = null;

  ngOnInit(): void {
    this.api.listCandidates().subscribe({
      next: r => (this.rows = r),
      error: () => (this.error = 'Impossible de charger les candidats.')
    });
  }
}
