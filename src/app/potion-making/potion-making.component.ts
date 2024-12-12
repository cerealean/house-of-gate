import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Ingredient, ingredients } from '../data/static/obojima/ingredients';
import { potions } from '../data/static/obojima/potions';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-potion-making',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule
  ],
  templateUrl: './potion-making.component.html',
  styleUrl: './potion-making.component.scss'
})
export class PotionMakingComponent {
  readonly ingredients = signal(ingredients).asReadonly();
  readonly potions = signal(potions).asReadonly();

  readonly selectedIngredient1 = signal<Ingredient | undefined>(undefined);
  readonly selectedIngredient2 = signal<Ingredient | undefined>(undefined);
  readonly selectedIngredient3 = signal<Ingredient | undefined>(undefined);

  readonly potion = computed(() => {
    let utilityTotal = 0;
    let combatTotal = 0;
    let whimsyTotal = 0;

    [this.selectedIngredient1, this.selectedIngredient2, this.selectedIngredient3].forEach(ingredient => {
      utilityTotal += ingredient()?.Utility ?? 0;
      combatTotal += ingredient()?.Combat ?? 0;
      whimsyTotal += ingredient()?.Whimsy ?? 0;
    });
    
    const highestKey = this.getHighestPotionType(utilityTotal, combatTotal, whimsyTotal) as 'combat' | 'utility' | 'whimsical';

    return this.potions()[highestKey].find(potion => potion.Number === (utilityTotal + combatTotal + whimsyTotal))
  });

  ingredientDisplay(ingredient: Ingredient) {
    return ingredient.Name;
  }

  private getHighestPotionType(utility: number, combat: number, whimsical: number) {
    const tempObj = {
      utility,
      combat,
      whimsical
    };

    // @ts-ignore
    return Object.keys(tempObj).reduce((keyA, keyB) => tempObj[keyA] > tempObj[keyB] ? keyA : keyB);
  }
}
