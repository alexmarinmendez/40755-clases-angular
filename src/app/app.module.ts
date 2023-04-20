import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './clase02/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './clase02/componente-dos/componente-dos.component';
import { InterpolacionComponent } from './clase04/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase04/mi-directiva.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiPipePipe } from './clase04/mi-pipe.pipe';
import { AbueloComponent } from './clase05/abuelo/abuelo.component';
import { HijoUnoComponent } from './clase05/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './clase05/hijo-dos/hijo-dos.component';
import { NietoUnoComponent } from './clase05/nieto-uno/nieto-uno.component';
import { FormulariosComponent } from './clase06/formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjemplosMaterialComponent } from './clase07/ejemplos-material/ejemplos-material.component';
import { MaterialModule } from './modulos/material/material.module';
import { ModalComponent } from './clase07/modal/modal.component';
import { PipesComponent } from './clase08/pipes/pipes.component';
import { MiCustomPipe } from './clase08/pipes/mi-custom.pipe';
import { AlumnoPipe } from './clase08/pipes/alumno.pipe';
import { MiPropiaDirective } from './clase08/directivas/mi-propia.directive';
import { RepetirDirective } from './clase08/directivas/repetir.directive';
import { ServiciosComponent } from './clase09/servicios/servicios.component';
import { ListaAlumnosComponent } from './clase09/servicios/lista-alumnos/lista-alumnos.component';
import { LoggerService } from './clase09/servicios/logger.service';
import { LegacyLogger } from './clase09/servicios/logger.legacy';
import { ExperimentalLoggerService } from './clase09/servicios/experimental-logger.service';
import { HttpClientModule } from '@angular/common/http';
import { ObservablesComponent } from './clase10/componentes/observables/observables.component';
import { FechaComponent } from './clase10/componentes/fecha/fecha.component';
import { ContadorComponent } from './clase10/componentes/contador/contador.component';
import { MiVistaComponent } from './clase11/mi-vista/mi-vista.component';
import { EjemploContenidoUnoComponent } from './clase11/mi-vista/ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from './clase11/mi-vista/ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './clase11/routing/routing.module';

export const APIURL = new InjectionToken('APIURL');

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUnoComponent,
    ComponenteDosComponent,
    InterpolacionComponent,
    MiDirectivaDirective,
    MiPipePipe,
    AbueloComponent,
    HijoUnoComponent,
    HijoDosComponent,
    NietoUnoComponent,
    FormulariosComponent,
    EjemplosMaterialComponent,
    ModalComponent,
    PipesComponent,
    MiCustomPipe,
    AlumnoPipe,
    MiPropiaDirective,
    RepetirDirective,
    ServiciosComponent,
    ListaAlumnosComponent,
    ObservablesComponent,
    FechaComponent,
    ContadorComponent,
    MiVistaComponent,
    EjemploContenidoUnoComponent,
    EjemploContenidoDosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [
    {
      provide: LoggerService,
      useExisting: ExperimentalLoggerService,
    },
    {
      provide: APIURL,
      useValue: 'https://rickandmortyapi.com/api',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
