import { Component, OnInit, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { SkillsService } from '../../../skills/services/skills.service';
import { AuthService } from '../../../auth/services/auth.service';
import { SkillResponse } from '../../../skills/models/skill.model';

@Component({
  selector: 'app-skills-radar-chart',
  standalone: true,
  imports: [],
  template: `
    <div class="radar-card">
      <div class="radar-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <h2>Radar de Compétences</h2>
      </div>

      @if (loading) {
      <div class="radar-loading">
        <div class="spinner"></div>
        <p>Chargement des compétences…</p>
      </div>
      } @else if (skills.length === 0) {
      <div class="radar-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <p>Aucune compétence enregistrée.<br>Ajoutez des skills pour voir votre radar.</p>
      </div>
      } @else {
      <div class="radar-content">
        <canvas #radarCanvas></canvas>
      </div>
      <div class="radar-legend">
        <span class="legend-item legend-tech">
          <span class="legend-dot tech"></span> Tech ({{ techCount }})
        </span>
        <span class="legend-item legend-soft">
          <span class="legend-dot soft"></span> Soft ({{ softCount }})
        </span>
      </div>
      }
    </div>
  `,
  styles: [`
    .radar-card {
      background: var(--bg-card);
      border: 1px solid var(--border-light);
      border-radius: 14px;
      padding: 1.25rem;
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.25s;
      animation: fadeIn 0.4s ease;
    }

    .radar-card:hover {
      box-shadow: var(--shadow-md);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .radar-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .radar-header svg {
      color: var(--primary);
    }

    .radar-header h2 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }

    .radar-loading, .radar-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 2rem 1rem;
      color: var(--text-muted);
      text-align: center;
    }

    .radar-empty svg {
      opacity: 0.3;
    }

    .radar-empty p {
      font-size: 0.8125rem;
      line-height: 1.5;
    }

    .spinner {
      width: 2rem;
      height: 2rem;
      border: 3px solid var(--border);
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .radar-content {
      display: flex;
      justify-content: center;
      padding: 0.5rem 0;
    }

    .radar-content canvas {
      max-width: 100%;
      height: auto;
    }

    .radar-legend {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border-light);
      margin-top: 0.75rem;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .legend-dot.tech { background: #6366f1; }
    .legend-dot.soft { background: #8b5cf6; }
  `]
})
export class SkillsRadarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('radarCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private skillsService = inject(SkillsService);
  private authService = inject(AuthService);

  skills: SkillResponse[] = [];
  loading = true;
  techCount = 0;
  softCount = 0;

  private radarLabels: string[] = [];
  private radarData: number[] = [];
  private canvasReady = false;

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user?.id) {
      this.loading = false;
      return;
    }

    this.skillsService.getUserSkills(String(user.id)).subscribe({
      next: (skills) => {
        this.skills = skills;
        this.techCount = skills.filter(s => s.type === 'TECH').length;
        this.softCount = skills.filter(s => s.type === 'SOFT').length;
        this.prepareRadarData(skills);
        this.loading = false;
        // If canvas was already initialized by AfterViewInit, draw now
        if (this.canvasReady) {
          setTimeout(() => this.drawRadar(), 0);
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.canvasReady = true;
    if (this.radarData.length > 0) {
      setTimeout(() => this.drawRadar(), 0);
    }
  }

  private prepareRadarData(skills: SkillResponse[]): void {
    // Sort by level desc combined, take top 8
    const sorted = [...skills].sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0)).slice(0, 8);

    // Need at least 3 axes
    if (sorted.length < 3) {
      // Pad with empty axes
      while (sorted.length < 3) {
        sorted.push({ id: '', nom: '—', type: 'TECH' as any, niveau: 0, description: '', source: '', dateEvaluation: '', validee: false });
      }
    }

    this.radarLabels = sorted.map(s => s.nom);
    this.radarData = sorted.map(s => ((s.niveau ?? 0) / 5) * 100); // normalize 1-5 to 0-100
  }

  private drawRadar(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 350;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 50;
    const levels = 5;
    const n = this.radarData.length;
    const angleStep = (2 * Math.PI) / n;

    // Detect dark mode
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(148, 163, 184, 0.15)' : 'rgba(0, 0, 0, 0.08)';
    const axisColor = isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(0, 0, 0, 0.06)';
    const labelColor = isDark ? '#94a3b8' : '#64748b';
    const fillColor = 'rgba(99, 102, 241, 0.2)';
    const strokeColor = '#6366f1';
    const dotColor = '#6366f1';

    ctx.clearRect(0, 0, size, size);

    // Draw grid (pentagons / polygons)
    for (let i = 1; i <= levels; i++) {
      ctx.beginPath();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const lr = (radius / levels) * i;
      for (let j = 0; j <= n; j++) {
        const a = angleStep * j - Math.PI / 2;
        const x = centerX + lr * Math.cos(a);
        const y = centerY + lr * Math.sin(a);
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw axes
    for (let i = 0; i < n; i++) {
      const a = angleStep * i - Math.PI / 2;
      const x = centerX + radius * Math.cos(a);
      const y = centerY + radius * Math.sin(a);
      ctx.beginPath();
      ctx.strokeStyle = axisColor;
      ctx.lineWidth = 1;
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw labels
    ctx.fillStyle = labelColor;
    ctx.font = '600 11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
      const a = angleStep * i - Math.PI / 2;
      const labelR = radius + 28;
      const lx = centerX + labelR * Math.cos(a);
      const ly = centerY + labelR * Math.sin(a);
      // Truncate long labels
      const label = this.radarLabels[i].length > 12
        ? this.radarLabels[i].slice(0, 11) + '…'
        : this.radarLabels[i];
      ctx.fillText(label, lx, ly);
    }

    // Animate the data fill
    this.animateData(ctx, centerX, centerY, radius, angleStep, n, fillColor, strokeColor, dotColor);
  }

  private animateData(
    ctx: CanvasRenderingContext2D,
    cx: number, cy: number, radius: number,
    angleStep: number, n: number,
    fillColor: string, strokeColor: string, dotColor: string
  ): void {
    let progress = 0;
    const duration = 600; // ms
    const start = performance.now();

    const frame = (now: number) => {
      progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      // Clear only the data area (redraw data on top of grid)
      // We save and restore to not clear the grid
      ctx.save();

      // Draw data polygon
      ctx.beginPath();
      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = fillColor;
      ctx.lineWidth = 2.5;

      for (let i = 0; i <= n; i++) {
        const idx = i % n;
        const val = (this.radarData[idx] / 100) * eased;
        const a = angleStep * idx - Math.PI / 2;
        const x = cx + radius * val * Math.cos(a);
        const y = cy + radius * val * Math.sin(a);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw dots
      ctx.fillStyle = dotColor;
      for (let i = 0; i < n; i++) {
        const val = (this.radarData[i] / 100) * eased;
        const a = angleStep * i - Math.PI / 2;
        const x = cx + radius * val * Math.cos(a);
        const y = cy + radius * val * Math.sin(a);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.restore();

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }
}
