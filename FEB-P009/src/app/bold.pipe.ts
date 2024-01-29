import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {
  transform(text: string, search: string): string {
    return text.replace(new RegExp(search, 'gi'), `<b>${search}</b>`);
  }
}
