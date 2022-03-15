import { Pipe, PipeTransform } from '@angular/core';
import { enumerators } from '../dictionaries/enum.pt-br';


@Pipe({
  name: 'dictionary'
})
export class DictionaryPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!enumerators[args[0]]) { return 'Enumerador Inválido'; }
    if (!enumerators[args[0]][value]) { return (args[0] + ' Inválido'); }

    return enumerators[args[0]][value];
  }

}