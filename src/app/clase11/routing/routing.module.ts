import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MiVistaComponent } from '../mi-vista/mi-vista.component';
import { ChildRoutesModule } from './child-routes.module';

const rutas: Routes = [
  // { path: 'mi-vista/:parametro', component: MiVistaComponent },
  { path: 'mi-vista', component: MiVistaComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ChildRoutesModule, RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class RoutingModule {}
