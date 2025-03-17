import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { PLAYERS } from '../../data/players-data'; // Importamos los datos


@Component({
  selector: 'app-players',
  standalone: true,  // Agregado manualmente ya que no encuentro la forma de que sea automático con standalone
  imports: [CommonModule], // Agregamos CommonModule para que *ngFor funcione
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  players = PLAYERS; // Se asignan los datos de los jugadores

  constructor() {
    console.log('Lista de jugadores:', this.players); // Verificar si los datos se están cargando
  }

}
