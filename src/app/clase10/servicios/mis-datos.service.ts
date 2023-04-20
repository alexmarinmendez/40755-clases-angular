import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, interval, map, of, take } from 'rxjs';
import { Alumno } from 'src/app/clase05/alumno';

@Injectable({
  providedIn: 'root',
})
export class MisDatosService {
  public usuarios$: Observable<any[]>;
  public usuarios: Subject<any[]>;

  constructor(private httpClient: HttpClient) {
    this.usuarios = new Subject();
    this.usuarios$ = this.usuarios.asObservable();
    this.getUsuarios().subscribe((response) => {
      this.usuarios.next(response.data);
    });
  }

  public getAlumnos(): Observable<Alumno[]> {
    return of([{ nombre: 'Alex', calificacion: 50 }]);
  }

  public getNumber(): Observable<number> {
    return interval(1000).pipe(take(5));
  }

  public getFecha(): Observable<Date> {
    return interval(1000).pipe(
      // take(5),
      map(() => new Date())
    );
  }

  public getPeliculas(): Observable<any> {
    return this.httpClient.get('https://swapi.dev/api/films');
  }

  public getUsuarios(): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users');
  }

  public addUsuario(usuario: any): void {
    this.usuarios.next(usuario);
  }
}
