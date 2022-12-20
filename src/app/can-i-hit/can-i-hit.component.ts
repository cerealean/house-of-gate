import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-can-i-hit',
  templateUrl: './can-i-hit.component.html',
  styleUrls: ['./can-i-hit.component.scss']
})
export class CanIHitComponent implements OnInit, OnDestroy {

  public readonly elevationDifferenceCtrl = new UntypedFormControl(5, [Validators.min(0), Validators.required, Validators.pattern(/^[0-9]*$/)]);
  public readonly horizontalDifferenceCtrl = new UntypedFormControl(10, [Validators.min(0), Validators.required, Validators.pattern(/^[0-9]*$/)]);

  public distance = Math.hypot(this.elevationDifferenceCtrl.value, this.horizontalDifferenceCtrl.value);

  private readonly subscriptions = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.add(this.elevationDifferenceCtrl.valueChanges.subscribe(() => this.recalculate()));
    this.subscriptions.add(this.horizontalDifferenceCtrl.valueChanges.subscribe(() => this.recalculate()));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private recalculate() {
    const elevationDiff = this.elevationDifferenceCtrl.value;
    const horizontalDiff = this.horizontalDifferenceCtrl.value;

    this.distance = Math.hypot(elevationDiff, horizontalDiff);
  }

}
