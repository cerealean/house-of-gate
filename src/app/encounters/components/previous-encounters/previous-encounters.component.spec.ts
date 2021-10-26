import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEncountersComponent } from './previous-encounters.component';

describe('PreviousEncountersComponent', () => {
  let component: PreviousEncountersComponent;
  let fixture: ComponentFixture<PreviousEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousEncountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
