import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component';
import { MediaComponent } from './components/media/media.component';
import { RouterOutlet } from '@angular/router';
import { PLAYERS } from './data/players-data'; //Importamos los datos del nuevo archivo con los datos de jugadores

@Component({
  selector: 'app-root',
  standalone: true,  // 🔹 Necesario para Standalone
  imports: [RouterOutlet, HeaderComponent, PlayersComponent],  // 🔹 Agregamos los componentes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // 🔹 Corrección en `styleUrls`
 })

export class AppComponent {
  title = 'equipo-basket';
}

