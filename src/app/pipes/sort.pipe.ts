import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], order: 'asc' | 'dsc'): string[] {

    if (order === "asc") {
      value.sort((a, b) => a.localeCompare(b));
    }
    else {
      value.sort((a, b) => b.localeCompare(a));
    }
    return value;

  }
}
