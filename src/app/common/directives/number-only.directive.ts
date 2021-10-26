import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {
  @HostListener("keydown", ["$event"])
  onKeyDown(_event: KeyboardEvent) {
    if(!this.isValidInput(_event.key)) {
      _event.preventDefault();
      _event.stopPropagation();
    }
  }

  private isValidInput(key: string) {
    switch (key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case 'Backspace':
      case 'Delete':
      case 'Tab':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        return true;
      default:
        return false;
    }
  }
}
