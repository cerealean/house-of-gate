import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterTablesComponent } from './monster-tables.component';

describe('MonsterTablesComponent', () => {
  let component: MonsterTablesComponent;
  let fixture: ComponentFixture<MonsterTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MonsterTablesComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
