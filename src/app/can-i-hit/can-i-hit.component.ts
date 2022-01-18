import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-can-i-hit',
  templateUrl: './can-i-hit.component.html',
  styleUrls: ['./can-i-hit.component.scss']
})
export class CanIHitComponent implements OnInit {

  public readonly elevationDifferenceCtrl = new FormControl(5, [Validators.min(0), Validators.required]);
  public readonly horizontalDifferenceCtrl = new FormControl(10, [Validators.min(0), Validators.required]);

  public distance = Math.hypot(this.elevationDifferenceCtrl.value, this.horizontalDifferenceCtrl.value);

  constructor() { }

  ngOnInit(): void {
    this.elevationDifferenceCtrl.valueChanges.subscribe(() => this.recalculate());
    this.horizontalDifferenceCtrl.valueChanges.subscribe(() => this.recalculate());
  }

  private recalculate() {
    const elevationDiff = this.elevationDifferenceCtrl.value;
    const horizontalDiff = this.horizontalDifferenceCtrl.value;

    this.distance = Math.hypot(elevationDiff, horizontalDiff);
  }

}
