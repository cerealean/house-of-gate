import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Ingredient, ingredients } from '../data/static/obojima/ingredients';
import { potions } from '../data/static/obojima/potions';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DisplayCardComponent } from './display-card/display-card.component';
import { IngredientAutocompleteInputComponent } from "./ingredient-autocomplete-input/ingredient-autocomplete-input.component";

@Component({
  selector: 'app-potion-making',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    DisplayCardComponent,
    IngredientAutocompleteInputComponent
],
  templateUrl: './potion-making.component.html',
  styleUrl: './potion-making.component.scss'
})
export class PotionMakingComponent {
  readonly ingredients = signal(ingredients).asReadonly();
  readonly potions = signal(potions).asReadonly();
  readonly flatPotions = computed(() => this.potions().combat.concat(this.potions().utility).concat(this.potions().whimsical).concat(this.potions().custom));

  readonly ingredientFilter = signal('');
  readonly filteredIngredients = computed(() => this.ingredients().filter(ingredient => ingredient.Name.toLowerCase().includes(this.ingredientFilter().toLowerCase()) || ingredient.Description.toLowerCase().includes(this.ingredientFilter().toLowerCase())));

  readonly potionFilter = signal('');
  readonly filteredPotions = computed(() => this.flatPotions().filter(potion => potion.Name.toLowerCase().includes(this.potionFilter().toLowerCase()) || potion.Description.toLowerCase().includes(this.potionFilter().toLowerCase())));

  readonly selectedIngredient1 = signal<Ingredient | undefined>(this.getRandomItemFromArray(this.ingredients()));
  readonly selectedIngredient2 = signal<Ingredient | undefined>(this.getRandomItemFromArray(this.ingredients()));
  readonly selectedIngredient3 = signal<Ingredient | undefined>(this.getRandomItemFromArray(this.ingredients()));
  readonly allSelectedIngredients = computed(() => ([
    this.selectedIngredient1(),
    this.selectedIngredient2(),
    this.selectedIngredient3()
  ]));

  readonly utilityTotal = computed(() => this.allSelectedIngredients()
    .map(ingredient => ingredient?.Utility ?? 0)
    .reduce((sum, num) => sum + num, 0));
  readonly combatTotal = computed(() => this.allSelectedIngredients()
    .map(ingredient => ingredient?.Combat ?? 0)
    .reduce((sum, num) => sum + num, 0));
  readonly whimsyTotal = computed(() => this.allSelectedIngredients()
    .map(ingredient => ingredient?.Whimsy ?? 0)
    .reduce((sum, num) => sum + num, 0));
  readonly highestValueTypes = computed(() => {
    if (!this.selectedIngredient1() || !this.selectedIngredient2() || !this.selectedIngredient3()) {
      return;
    }

    return this.getKeysWithHighestValue();
  })

  readonly resultingPotions = computed(() => {
    if (!this.selectedIngredient1() || !this.selectedIngredient2() || !this.selectedIngredient3()) {
      return;
    }
    const highestValueResult = this.highestValueTypes();
    const highestKeys = highestValueResult!.keysWithMaxValue;
    const potions = highestKeys.flatMap(key => this.potions()[key].filter(potion => potion.Number === highestValueResult!.maxValue))

    return potions;
  });

  private getKeysWithHighestValue() {
    const keyValuePairs = {
      whimsical: this.whimsyTotal(),
      combat: this.combatTotal(),
      utility: this.utilityTotal()
    } as Record<string, number>;

    // Find the highest value in the object
    const maxValue = Math.max(...Object.values(keyValuePairs));

    // Get all keys that have the highest value
    const keysWithMaxValue = Object
      .keys(keyValuePairs)
      .filter(key => keyValuePairs[key] === maxValue) as ('combat' | 'utility' | 'whimsical')[];

    return {
      keysWithMaxValue,
      maxValue
    };
  }

  private getRandomItemFromArray<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
