import { Component, Input } from '@angular/core';
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
}
