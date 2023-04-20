import { Component, OnInit } from '@angular/core';
import { MisDatosService } from '../../servicios/mis-datos.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  // public alumnos = [{ nombre: 'Alex', calificacion: 50 }];
  // public fecha = new Date();

  // constructor(private servicio: MisDatosService) {}
  public visible = true;

  ngOnInit(): void {
    // ERROR COMUN DE JR: Mal manejo de un observable
    // this.servicio
    //   .getAlumnos()
    //   .forEach((item) => console.log('Elemento OBS => ', item));
    // this.alumnos.forEach((item) => console.log('Elemento PROP => ', item));
    // manejo correcto de un observable
    // this.servicio.getAlumnos().subscribe((valores) => console.log(valores));
    // this.servicio.getNumber().subscribe((valor) => console.log(valor));
    // this.servicio.getFecha().subscribe((valor) => console.log(valor));
    // this.servicio.getFecha().subscribe((valor) => (this.fecha = valor));
  }
}
