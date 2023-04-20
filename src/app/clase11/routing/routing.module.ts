import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EjemploContenidoUnoComponent } from '../mi-vista/ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from '../mi-vista/ejemplo-contenido-dos/ejemplo-contenido-dos.component';
import { MiVistaComponent } from '../mi-vista/mi-vista.component';

const rutas: Routes = [
  { path: 'uno', component: EjemploContenidoUnoComponent },
  { path: 'dos', component: EjemploContenidoDosComponent },
  { path: 'mi-vista', component: MiVistaComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class RoutingModule {}
