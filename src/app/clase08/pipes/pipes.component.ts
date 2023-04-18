import { Component } from '@angular/core';
import { Alumno } from 'src/app/clase05/alumno';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  public hoy = new Date();
  public miPropiedad = 'Curso Angular';
  // public alumno: Alumno;
  public alumnos: Alumno[];

  constructor() {
    // this.alumno = {
    //   nombre: 'Alex',
    //   calificacion: 80,
    // };
    this.alumnos = [
      { nombre: 'Alex', calificacion: 80 },
      { nombre: 'Sandra', calificacion: 90 },
      { nombre: 'Romina', calificacion: 75 },
    ];
  }
}
