// Inicializa la aplicación Angular usando el componente raíz AppComponent y la configuración appConfig.
// Este método se usa en proyectos que adoptan componentes standalone (Angular 14+), sin necesidad de AppModule.
// Si ocurre un error durante el arranque, se captura y se muestra en la consola.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
