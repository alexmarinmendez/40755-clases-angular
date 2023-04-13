import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css'],
})
export class InterpolacionComponent implements OnInit {
  // export class InterpolacionComponent {
  public nombre: string | undefined;
  public apellido: string | undefined;
  // public nombre: string = 'Clase 4 de Interpolación';
  public personas = ['José', 'Juan', 'Julio'];
  public bandera = true;
  public valorSwitch: string | undefined;

  ngOnInit(): void {
    // this.nombre = 'Clase 4 de Interpolación';
    // new Date();
  }

  decirHola(): void {
    alert('Hola Mundo!!!');
  }

  verDatos() {
    console.log('Nombre: ', this.nombre);
    console.log('Apellido: ', this.apellido);
  }

  cargarDatos() {
    this.nombre = 'Leo';
    this.apellido = 'Messi';
  }
}
