import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {
  @Input() question: string = '';
  @Input() questionNumber: number = 1;
  @Input() currentAnswer: string = '';
  @Output() answer = new EventEmitter<string>();

  ratingOptions = [
    { value: '1', label: 'Strongly Disagree' },
    { value: '2', label: 'Disagree' },
    { value: '3', label: 'Neutral' },
    { value: '4', label: 'Agree' },
    { value: '5', label: 'Strongly Agree' }
  ];

  selectRating(value: string): void {
    this.answer.emit(value);
  }

  isSelected(value: string): boolean {
    return this.currentAnswer === value;
  }
}
