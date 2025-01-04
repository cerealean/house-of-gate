import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientAutocompleteInputComponent } from './ingredient-autocomplete-input.component';

describe('IngredientAutocompleteInputComponent', () => {
  let component: IngredientAutocompleteInputComponent;
  let fixture: ComponentFixture<IngredientAutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientAutocompleteInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
