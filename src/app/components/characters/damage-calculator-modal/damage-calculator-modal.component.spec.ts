import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageCalculatorModalComponent } from './damage-calculator-modal.component';

describe('DamageCalculatorModalComponent', () => {
  let component: DamageCalculatorModalComponent;
  let fixture: ComponentFixture<DamageCalculatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DamageCalculatorModalComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageCalculatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
