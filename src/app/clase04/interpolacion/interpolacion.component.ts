import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css'],
})
export class InterpolacionComponent implements OnInit {
  // export class InterpolacionComponent {
  public nombre: string | undefined;
  // public nombre: string = 'Clase 4 de Interpolación';
  public personas = ['José', 'Juan', 'Julio'];
  public bandera = true;

  ngOnInit(): void {
    // this.nombre = 'Clase 4 de Interpolación';
    // new Date();
  }
}
