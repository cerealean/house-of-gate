import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-damage-calculator-modal',
  templateUrl: './damage-calculator-modal.component.html',
  styleUrls: ['./damage-calculator-modal.component.scss']
})
export class DamageCalculatorModalComponent {

  public valueAsString = '';
  public get valueAsNumber(): number {
    return +this.valueAsString || 0;
  }

  constructor(private readonly dialogRef: MatDialogRef<DamageCalculatorModalComponent>) { }

  numberClicked(num: number) {
    this.valueAsString += num;
  }

  clear(): void {
    this.valueAsString = '';
  }

  heal() {
    this.finish('heal');
  }

  damage() {
    this.finish('damage');
  }

  temp() {
    this.finish('temp');
  }

  private finish(type: DamageCalcTypes): void {
    this.dialogRef.close({
      amount: this.valueAsNumber,
      type
    } as DamageCalculatorResult);
  }

}

export interface DamageCalculatorResult {
  amount: number;
  type: DamageCalcTypes;
}

type DamageCalcTypes = 'heal' | 'temp' | 'damage';
