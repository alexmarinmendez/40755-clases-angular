import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Alumno } from 'src/app/clase05/alumno';

@Injectable({
  providedIn: 'root',
})
export class MiServicioService {
  public contador = 0;

  constructor(private http: HttpClient) {}

  public obtenerAlumnos(): Alumno[] {
    return [
      {
        nombre: 'Alex',
        calificacion: 80,
      },
    ];
  }

  public obtenerPersonajes(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
