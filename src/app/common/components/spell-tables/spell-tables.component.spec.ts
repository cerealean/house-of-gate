import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellTablesComponent } from './spell-tables.component';


describe('SpellTablesComponent', () => {
  let component: SpellTablesComponent;
  let fixture: ComponentFixture<SpellTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SpellTablesComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
