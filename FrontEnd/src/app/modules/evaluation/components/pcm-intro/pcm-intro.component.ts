import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pcm-intro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pcm-intro.component.html',
  styleUrl: './pcm-intro.component.scss'
})
export class PcmIntroComponent {
  personalityTypes = [
    {
      name: 'Empathique',
      icon: '❤️',
      color: '#ec4899',
      description: 'Chaleureux, sensible et compatissant. Excelle dans la communication émotionnelle.',
      traits: ['Écoute', 'Compassion', 'Harmonie']
    },
    {
      name: 'Travaillomane',
      icon: '🎯',
      color: '#3b82f6',
      description: 'Logique, organisé et responsable. Se distingue par sa rigueur et sa fiabilité.',
      traits: ['Organisation', 'Logique', 'Fiabilité']
    },
    {
      name: 'Persévérant',
      icon: '🛡️',
      color: '#22c55e',
      description: 'Engagé, observateur et dévoué. Guidé par des valeurs fortes et un sens du devoir.',
      traits: ['Valeurs', 'Engagement', 'Observation']
    },
    {
      name: 'Promoteur',
      icon: '⚡',
      color: '#f59e0b',
      description: 'Charismatique, adaptable et orienté action. Excelle dans le leadership.',
      traits: ['Leadership', 'Action', 'Charisme']
    },
    {
      name: 'Rebelle',
      icon: '🎨',
      color: '#8b5cf6',
      description: 'Créatif, spontané et ludique. Apporte énergie et originalité.',
      traits: ['Créativité', 'Spontanéité', 'Énergie']
    },
    {
      name: 'Rêveur',
      icon: '🌙',
      color: '#06b6d4',
      description: 'Calme, imaginatif et introspectif. Fort en réflexion profonde.',
      traits: ['Imagination', 'Calme', 'Réflexion']
    }
  ];
}
