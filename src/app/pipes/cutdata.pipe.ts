import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutdata'
})
export class CutdataPipe implements PipeTransform {

  transform(value: string, wordCount: number): string {
    return value.split(" ").splice(0, wordCount).join(" ") + " More..."
  }

}
