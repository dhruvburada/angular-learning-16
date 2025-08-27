import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchTerm: string): string[] {
    let result: string[] = [];
    for (let item of value) {
      if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
        result.push(item)
      }
    }
    return result
  }

}
