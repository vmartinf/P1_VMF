import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../data/players-data'; // Importamos la interfaz Player


@Component({
  selector: 'app-detail',
  standalone: true,  // Agregado manualmente ya que no encuentro la forma de que sea automático con standalone
  imports: [CommonModule], // Importamos CommonModule para usar *ngIf
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() player?: Player; // Recibe el jugador seleccionado desde el componente padre
}
