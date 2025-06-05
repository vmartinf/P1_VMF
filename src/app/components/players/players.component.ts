// Importamos el decorador @Component necesario para definir el componente
import { Component } from '@angular/core';

// Importamos CommonModule para poder usar directivas como *ngFor y *ngIf en la plantilla
import { CommonModule } from '@angular/common';

// Importamos el array de jugadores y su interfaz correspondiente
import { PLAYERS, Player } from '../../data/players-data';

// Importamos el componente de detalle para poder usarlo dentro de la plantilla
import { DetailComponent } from '../detail/detail.component';

@Component({
  // Selector personalizado del componente, se usará como <app-players>
  selector: 'app-players',

  // Declaramos que este componente es standalone (independiente de AppModule)
  standalone: true,

  // Indicamos qué módulos y componentes necesita este componente
  imports: [CommonModule, DetailComponent],

  // Ruta al archivo de plantilla HTML asociado
  templateUrl: './players.component.html',

  // Ruta al archivo CSS con los estilos del componente
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  // Almacenamos el array completo de jugadores
  players = PLAYERS;

  // Propiedad que guardará el jugador seleccionado cuando el usuario haga clic
  selectedPlayer: Player | null = null; // ← inicialmente null, no se muestra ningún detalle

  // Función que se llama cuando el usuario hace clic en un jugador de la lista
  // Actualiza la propiedad selectedPlayer con el jugador pulsado
  selectPlayer(player: Player): void {
    this.selectedPlayer = player;
  }
}
