import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MiVistaComponent } from '../mi-vista/mi-vista.component';
import { EjemploContenidoUnoComponent } from '../mi-vista/ejemplo-contenido-uno/ejemplo-contenido-uno.component';
import { EjemploContenidoDosComponent } from '../mi-vista/ejemplo-contenido-dos/ejemplo-contenido-dos.component';

const rutas: Routes = [
  {
    path: 'mi-vista',
    component: MiVistaComponent,
    children: [
      { path: 'uno', component: EjemploContenidoUnoComponent },
      { path: 'dos', component: EjemploContenidoDosComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}
