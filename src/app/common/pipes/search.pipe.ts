import { Pipe, PipeTransform } from '@angular/core';
import { Jedis } from '../interfaces/jedis';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: Jedis[], searchInput: string) {
    searchInput = searchInput ? searchInput.toLowerCase() : '';
    return searchInput ? value.filter(jedi => jedi.name.toLowerCase().includes(searchInput)) : value;
  }

}
