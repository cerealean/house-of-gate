import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellFilterBarComponent } from './spell-filter-bar.component';


describe('SpellFilterBarComponent', () => {
  let component: SpellFilterBarComponent;
  let fixture: ComponentFixture<SpellFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SpellFilterBarComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
