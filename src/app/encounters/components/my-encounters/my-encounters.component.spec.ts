import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEncountersComponent } from './my-encounters.component';

describe('MyEncountersComponent', () => {
  let component: MyEncountersComponent;
  let fixture: ComponentFixture<MyEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyEncountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
