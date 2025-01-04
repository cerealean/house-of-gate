import { Component, computed, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, type MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { type Ingredient, ingredients } from 'src/app/data/static/obojima/ingredients';

@Component({
  selector: 'potion-making-ingredient-autocomplete-input',
  imports: [MatFormFieldModule, FlexLayoutModule, MatAutocompleteModule, MatInputModule, FormsModule],
  templateUrl: './ingredient-autocomplete-input.component.html',
  styleUrl: './ingredient-autocomplete-input.component.scss'
})
export class IngredientAutocompleteInputComponent implements OnInit {
  private readonly ingredients = signal(ingredients).asReadonly();

  readonly label = input.required<string>();
  readonly initialSelectedIngredient = input<Ingredient>();
  readonly optionSelected = output<Ingredient>();
  readonly matchingIngredients = output<Ingredient[]>();

  readonly inputValue = signal<string | Ingredient>('');

  readonly filteredIngredients = computed<Ingredient[]>(() => {
    let retVal = this.ingredients();
    if (typeof this.inputValue() === 'string') {
      retVal = this.ingredients().filter(ingredient => this.doStringsMatchCaseInsensitive((this.inputValue() as string), ingredient.Name));
    } else if (this.isIngredient(this.inputValue())) {
      retVal = [this.ingredients().find(ingredient => ingredient.Name === (this.inputValue() as Ingredient).Name)] as Ingredient[];
    }

    this.matchingIngredients.emit(retVal);
    return retVal;
  });

  ngOnInit(): void {
    if(this.initialSelectedIngredient()) {
      this.inputValue.set(this.initialSelectedIngredient()!);
    }
  }

  ingredientDisplay(ingredient?: Ingredient) {
    return ingredient?.Name ?? '';
  }

  ingredientSelected(event: MatAutocompleteSelectedEvent) {
    const selectedIngredient = event.option.value as Ingredient;
    this.inputValue.set(selectedIngredient);
    this.optionSelected.emit(selectedIngredient);
  }

  private isIngredient(val?: Ingredient | string | null): val is Ingredient {
    return (val as Ingredient)?.Whimsy !== undefined;
  }

  private doStringsMatchCaseInsensitive(strToSearchFor: string, strToSearchIn: string) {
    return strToSearchIn.toLowerCase().indexOf(strToSearchFor.toLowerCase()) !== -1;
  }
}
