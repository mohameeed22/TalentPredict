import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.scss'
})
export class ProgressTrackerComponent {
  progression = input.required<number>();

  progressPercentage = computed(() => {
    const value = this.progression();
    return Math.min(Math.max(value, 0), 100);
  });

  progressClass = computed(() => {
    const progress = this.progressPercentage();
    if (progress < 25) return 'low';
    if (progress < 50) return 'medium-low';
    if (progress < 75) return 'medium-high';
    return 'high';
  });
}
