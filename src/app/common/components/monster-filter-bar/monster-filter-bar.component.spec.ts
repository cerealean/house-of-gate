import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFilterBarComponent } from './monster-filter-bar.component';

describe('MonsterFilterBarComponent', () => {
  let component: MonsterFilterBarComponent;
  let fixture: ComponentFixture<MonsterFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MonsterFilterBarComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
