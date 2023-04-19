import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/clase05/alumno';

@Injectable({
  providedIn: 'root',
})
export class MiServicioService {
  public contador = 0;

  constructor() {}

  public obtenerAlumnos(): Alumno[] {
    return [
      {
        nombre: 'Alex',
        calificacion: 80,
      },
    ];
  }
}
