import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanIHitComponent } from './can-i-hit.component';

describe('CanIHitComponent', () => {
  let component: CanIHitComponent;
  let fixture: ComponentFixture<CanIHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanIHitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanIHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
