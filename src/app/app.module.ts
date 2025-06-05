// Importa el decorador NgModule necesario para definir un módulo en Angular
import { NgModule } from '@angular/core';
// Importa BrowserModule, requerido para que la aplicación funcione en un navegador
import { BrowserModule } from '@angular/platform-browser';
// Importa el componente raíz de la aplicación
import { AppComponent } from './app.component';

@NgModule({
  // declarations: aquí se registran los componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    AppComponent
    // otros componentes que hayas creado como PlayersComponent, PlayerDetailComponent, etc.
  ],

  // imports: aquí se importan otros módulos necesarios para que funcionen los componentes declarados
  imports: [
    BrowserModule
    // otros módulos como FormsModule, HttpClientModule, etc.
  ],

  // providers: aquí se declaran los servicios que estarán disponibles en toda la aplicación
  providers: [],

  // bootstrap: indica qué componente se debe cargar al iniciar la aplicación (el componente raíz)
  bootstrap: [AppComponent]
})
export class AppModule { }
