import { Component } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'app-damage-calculator-modal',
    templateUrl: './damage-calculator-modal.component.html',
    styleUrls: ['./damage-calculator-modal.component.scss'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, FlexModule, MatFormField, MatInput, MatDivider, MatButton]
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
