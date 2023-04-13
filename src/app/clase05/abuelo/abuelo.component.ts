import { Component } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css'],
})
export class AbueloComponent {
  public alumnos: Alumno[] = [
    { nombre: 'Juan', calificacion: 70 },
    { nombre: 'José', calificacion: 80 },
    { nombre: 'Julian', calificacion: 50 },
  ];
}
