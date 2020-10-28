import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premiereLettreMaj'
})
export class PremiereLettreMajPipe implements PipeTransform {

  transform(value: String): String {
    if (value.length > 0) {
      return value.charAt(0).toLocaleUpperCase() + value.slice(1);
    }
    return value;
  }

}
