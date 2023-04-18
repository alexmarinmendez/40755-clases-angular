import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/clase05/alumno';

@Pipe({
  name: 'alumnoPipe',
})
export class AlumnoPipe implements PipeTransform {
  transform(value: Alumno, ...args: string[]): string {
    return args[0] === 'long'
      ? value.nombre + ' obtuvo la califación de ' + value.calificacion
      : value.nombre + ' - ' + value.calificacion;
  }
}
