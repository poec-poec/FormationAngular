import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Item[], args?: string): Item[] {
    const chaine = args.toLowerCase();
    return chaine ? value.filter( (item) => item.name.toLowerCase().indexOf(chaine) !== -1) : value;
  }
}
