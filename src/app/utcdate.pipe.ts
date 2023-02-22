import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uTCDate'
})
export class UTCDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
