// Importamos el decorador @Component para definir el componente
import { Component } from '@angular/core';

// Importamos CommonModule para poder usar *ngFor y *ngIf
import { CommonModule } from '@angular/common';

// Importamos los datos (array de jugadores) y la interfaz Player
import { PLAYERS, Player } from '../../data/players-data';

// Importamos el componente de detalle que vamos a usar desde la plantilla
import { DetailComponent } from '../detail/detail.component';

@Component({
  // Selector personalizado para usar el componente en otras plantillas
  selector: 'app-players',

  // Declaramos que este componente es standalone (no usa NgModule)
  standalone: true,

  // Indicamos qué módulos y componentes necesita este componente
  imports: [CommonModule, DetailComponent],

  // Ruta al HTML asociado a este componente
  templateUrl: './players.component.html',

  // Ruta al archivo de estilos de este componente
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  // Almacenamos todos los jugadores en esta propiedad para usarlos en el HTML
  players = PLAYERS;

  // Propiedad para guardar el jugador que se ha seleccionado al hacer clic
  selectedPlayer!: Player;

  // Función que se ejecuta cuando el usuario hace clic en un jugador
  // Guarda ese jugador como "seleccionado"
  selectPlayer(player: Player): void {
    console.log('Jugador seleccionado:', player);
    this.selectedPlayer = player;
  }
}
