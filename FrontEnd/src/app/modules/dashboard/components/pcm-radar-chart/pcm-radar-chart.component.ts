import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-pcm-radar-chart',
  standalone: true,
  imports: [],
  templateUrl: './pcm-radar-chart.component.html',
  styleUrls: ['./pcm-radar-chart.component.scss']
})
export class PcmRadarChartComponent implements AfterViewInit {
  @Input() data: number[] = [];
  @Input() labels: string[] = ['Empathique', 'Travaillomane', 'Persévérant', 'Rebelle', 'Promoteur', 'Rêveur'];
  @Input() width = 400;
  @Input() height = 400;

  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    if (this.data.length > 0) {
      this.drawRadarChart();
    }
  }

  private drawRadarChart(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Set canvas size
    canvas.width = this.width;
    canvas.height = this.height;

    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const radius = Math.min(this.width, this.height) / 2 - 60;
    const levels = 5;
    const angleStep = (2 * Math.PI) / this.data.length;

    // Clear canvas
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw grid levels
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;

    for (let i = 1; i <= levels; i++) {
      ctx.beginPath();
      const levelRadius = (radius / levels) * i;
      
      for (let j = 0; j <= this.data.length; j++) {
        const angle = angleStep * j - Math.PI / 2;
        const x = centerX + levelRadius * Math.cos(angle);
        const y = centerY + levelRadius * Math.sin(angle);
        
        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#d0d0d0';
    ctx.lineWidth = 1;

    for (let i = 0; i < this.data.length; i++) {
      const angle = angleStep * i - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw labels
      const labelRadius = radius + 35;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);
      
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.labels[i] || `Axis ${i + 1}`, labelX, labelY);
    }

    // Draw data
    ctx.beginPath();
    ctx.strokeStyle = '#667eea';
    ctx.fillStyle = 'rgba(102, 126, 234, 0.25)';
    ctx.lineWidth = 2;

    for (let i = 0; i <= this.data.length; i++) {
      const dataIndex = i % this.data.length;
      const value = this.data[dataIndex] || 0;
      const normalizedValue = Math.min(Math.max(value / 100, 0), 1);
      const angle = angleStep * dataIndex - Math.PI / 2;
      const x = centerX + radius * normalizedValue * Math.cos(angle);
      const y = centerY + radius * normalizedValue * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw data points
    ctx.fillStyle = '#667eea';
    
    for (let i = 0; i < this.data.length; i++) {
      const value = this.data[i] || 0;
      const normalizedValue = Math.min(Math.max(value / 100, 0), 1);
      const angle = angleStep * i - Math.PI / 2;
      const x = centerX + radius * normalizedValue * Math.cos(angle);
      const y = centerY + radius * normalizedValue * Math.sin(angle);
      
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  refresh(): void {
    if (this.canvas) {
      this.drawRadarChart();
    }
  }
}
