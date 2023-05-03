import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, start: number, end: number): unknown {
    if (value.length > 7) {
      return value.substr(start, end) + '...';
    }
    return value.substr(start, end);
  }

}
