import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textSlicePipe'
})
export class TextSlicePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(value, (match: string) => {
      return match.slice(0, 160) + "..."
    })
  }
}

// ^(.+?\s+){7}

