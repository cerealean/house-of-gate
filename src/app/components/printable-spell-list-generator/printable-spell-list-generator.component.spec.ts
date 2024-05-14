import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableSpellListGeneratorComponent } from './printable-spell-list-generator.component';

describe('PrintableSpellListGeneratorComponent', () => {
  let component: PrintableSpellListGeneratorComponent;
  let fixture: ComponentFixture<PrintableSpellListGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintableSpellListGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintableSpellListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
