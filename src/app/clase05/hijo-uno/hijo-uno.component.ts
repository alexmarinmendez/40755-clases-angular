import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.css'],
})
export class HijoUnoComponent {
  @Input() alumno: Alumno;
  @Output() seleccionado = new EventEmitter<Alumno>();

  selec(): void {
    // alert(this.alumno.nombre);
    this.seleccionado.emit(this.alumno);
  }
}
