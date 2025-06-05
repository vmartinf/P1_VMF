// Importamos el decorador @Component necesario para definir un componente en Angular
import { Component } from '@angular/core';

// Importamos los componentes que vamos a usar directamente en esta plantilla
import { HeaderComponent } from './components/header/header.component';
import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component'; // 🔸 No se está usando directamente aquí, pero puede estar planeado
import { MediaComponent } from './components/media/media.component';     // 🔸 Igual que el anterior

// Importamos RouterOutlet para usar <router-outlet> en el HTML y permitir navegación
import { RouterOutlet } from '@angular/router';

// Importamos los datos locales (array de jugadores), aunque aquí no se usan directamente
import { PLAYERS } from './data/players-data'; // Importamos los datos del nuevo archivo con los datos de jugadores

// Declaramos el componente principal (raíz) de la aplicación Angular
@Component({
  selector: 'app-root', // Nombre de la etiqueta que se usará en index.html → <app-root>
  standalone: true,     // 🔹 Define que este componente no pertenece a un NgModule, sino que se declara por sí mismo (Angular moderno)
  
  // 🔹 Importamos los componentes y módulos que se usarán directamente en su plantilla
  imports: [RouterOutlet, HeaderComponent, PlayersComponent], 
  
  // Plantilla HTML asociada a este componente
  templateUrl: './app.component.html',

  // Estilos específicos asociados a este componente
  styleUrls: ['./app.component.css']
})

// Definimos la clase del componente, que contiene su lógica
export class AppComponent {
  // Propiedad 'title' que podría usarse en la plantilla como {{ title }}
  //title = 'equipo-basket'; Ya lo utilizamos en <h1> en el 
}


