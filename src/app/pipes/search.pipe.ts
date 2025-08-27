import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchTerm: string): string[] {
    let result: string[] = [];
    for (let item of value) {
      if (item.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
        result.push(item) ///Angular will not detect changes automatically when you push item into array we have to reassign variable
      }
    }
    return result
  }

}
