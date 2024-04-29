import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicItemTablesComponent } from './magic-item-tables.component';

describe('MagicItemTablesComponent', () => {
  let component: MagicItemTablesComponent;
  let fixture: ComponentFixture<MagicItemTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicItemTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicItemTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
