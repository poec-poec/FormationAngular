import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): Item[] {
    // console.log(args);
    const filtre = args.toLowerCase();
    return filtre ? value.filter( (item) => item.name.toLowerCase().indexOf(filtre) !== -1 ) : value;
  }
}
