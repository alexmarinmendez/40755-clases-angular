import { NgModule } from '@angular/core';
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
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
