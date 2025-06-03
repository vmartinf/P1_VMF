import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // otros componentes que hayas creado
  ],
  imports: [
    BrowserModule
    // otros módulos que necesites importar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
