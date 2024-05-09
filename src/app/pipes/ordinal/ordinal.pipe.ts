import { Pipe, PipeTransform } from '@angular/core';

const ordinals = ['th', 'st', 'nd', 'rd'] as const;

/**
 * @see https://gist.github.com/JonCatmull/da9c8bb7367f1f55a4080bbc525c09ac <-- taken from here
 */
@Pipe({ name: 'ordinal', standalone: true })
export class OrdinalPipe implements PipeTransform {
  transform(n: number, keepNumber: boolean = true) {
    let v = n % 100;
    return (
      (keepNumber ? n : '') +
      (ordinals[(v - 20) % 10] || ordinals[v] || ordinals[0])
    );
  }
}
