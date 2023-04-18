import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miCustomPipe',
})
export class MiCustomPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    // if (args[0] === '?' || args[0] === '¿') return '¿' + value + '?';
    // if (args[0] === '!' || args[0] === '¡') return '¡' + value + '!';
    // return value;
    switch (args[0]) {
      case '?':
      case '¿':
        value = '¿' + value + '?';
        break;
      case '!':
      case '¡':
        value = '¡' + value + '!';
        break;
    }
    switch (args[1]) {
      case 'upper':
        value = value.toUpperCase();
    }
    return value;
  }
}
