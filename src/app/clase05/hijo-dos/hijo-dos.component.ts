import { Component, Input } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css'],
})
export class HijoDosComponent {
  @Input() estado: boolean;

  alumno: Alumno = {
    nombre: 'Spiderman',
    calificacion: 100,
  };
}
