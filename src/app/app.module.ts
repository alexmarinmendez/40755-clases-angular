import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './clase02/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './clase02/componente-dos/componente-dos.component';
import { InterpolacionComponent } from './clase04/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase04/mi-directiva.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUnoComponent,
    ComponenteDosComponent,
    InterpolacionComponent,
    MiDirectivaDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
