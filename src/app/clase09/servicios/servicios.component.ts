import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './mi-servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  valores: any;
  constructor(private servicio: MiServicioService) {}

  ngOnInit(): void {
    console.log(this.servicio.obtenerAlumnos());
    console.log(1);
    this.servicio.obtenerPersonajes().subscribe((valores) => {
      console.log(valores);
      console.log(2);
      this.valores = valores;
    });
    console.log(3);
    console.log(this.valores.results);
  }

  click() {
    this.servicio.contador = this.servicio.contador + 1;
  }
}
