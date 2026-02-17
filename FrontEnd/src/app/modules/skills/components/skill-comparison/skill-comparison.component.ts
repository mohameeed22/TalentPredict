import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../services/skills.service';
import { SkillComparison } from '../../models/skill.model';

@Component({
  selector: 'app-skill-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-comparison.component.html',
  styleUrl: './skill-comparison.component.scss'
})
export class SkillComparisonComponent implements OnInit {
  private skillsService = inject(SkillsService);
  
  comparisons = signal<SkillComparison[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadSkillComparisons();
  }

  loadSkillComparisons(): void {
    this.loading.set(true);
    this.error.set(null);

    // TODO: Implement actual comparison API
    // For now, mock data
    setTimeout(() => {
      this.comparisons.set([
        {
          skillName: 'JavaScript',
          userLevel: 4,
          averageLevel: 3.2,
          gap: 0.8
        },
        {
          skillName: 'TypeScript',
          userLevel: 4,
          averageLevel: 2.8,
          gap: 1.2
        },
        {
          skillName: 'Angular',
          userLevel: 3,
          averageLevel: 3.5,
          gap: -0.5
        },
        {
          skillName: 'React',
          userLevel: 2,
          averageLevel: 3.8,
          gap: -1.8
        },
        {
          skillName: 'Node.js',
          userLevel: 3,
          averageLevel: 3.1,
          gap: -0.1
        }
      ]);
      this.loading.set(false);
    }, 1000);
  }

  getGapClass(gap: number): string {
    if (gap > 0.5) return 'gap-positive';
    if (gap < -0.5) return 'gap-negative';
    return 'gap-neutral';
  }

  getGapText(gap: number): string {
    if (gap > 0) return `+${gap.toFixed(1)}`;
    return gap.toFixed(1);
  }

  getBarWidth(level: number): number {
    return (level / 5) * 100;
  }
}
