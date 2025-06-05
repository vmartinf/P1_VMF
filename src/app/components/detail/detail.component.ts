import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../data/players-data';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() player!: Player;

  // 🔹 Emite un evento al padre cuando se hace clic en "Volver"
  @Output() volver = new EventEmitter<void>();

  onBack(): void {
    this.volver.emit();
  }
}
