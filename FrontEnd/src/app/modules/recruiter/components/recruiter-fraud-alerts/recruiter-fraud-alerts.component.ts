import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterApiService, RecruiterCandidateRow } from '../../services/recruiter-api.service';

@Component({
  selector: 'app-recruiter-fraud-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recruiter-fraud-alerts.component.html',
  styleUrl: './recruiter-fraud-alerts.component.scss'
})
export class RecruiterFraudAlertsComponent implements OnInit {
  private api = inject(RecruiterApiService);
  rows: RecruiterCandidateRow[] = [];

  ngOnInit(): void {
    this.api.fraudAlerts().subscribe(r => (this.rows = r));
  }
}
