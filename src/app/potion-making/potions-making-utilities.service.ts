import { Injectable } from '@angular/core';
import { type Ingredient, ingredients } from '../data/static/obojima/ingredients';
import { potions } from '../data/static/obojima/potions';

@Injectable({
  providedIn: 'root'
})
export class PotionsMakingUtilitiesService {
  private readonly ingredients = ingredients;
  private readonly potions = potions;

  getRandomIngredient() {
    return this.getRandomItemFromArray(this.ingredients);
  }

  brewPotionsFromIngredients(ingredient1: Ingredient, ingredient2: Ingredient, ingredient3: Ingredient) {
    const scores = this.calculateScoresFromIngredients(ingredient1, ingredient2, ingredient3);
    const maxValue = Math.max(...Object.values(scores));
    const keysWithMaxValue = Object
      .keys(scores)
      .filter(key => (scores[key as 'combat' | 'utility' | 'whimsical']) === maxValue) as ('combat' | 'utility' | 'whimsical')[];
    const potionsMatchingMaxValue = keysWithMaxValue.flatMap(key => this.potions[key].filter(potion => potion.Number === maxValue))

    return {
      scores,
      maxValue,
      typesWithMaxValue: keysWithMaxValue,
      potions: potionsMatchingMaxValue
    };
  }

  private calculateScoresFromIngredients(...ingredients: Ingredient[]) {
    return {
      whimsical: this.sum(ingredients.map(ingredient => ingredient?.Whimsy ?? 0)),
      utility: this.sum(ingredients.map(ingredient => ingredient?.Utility ?? 0)),
      combat: this.sum(ingredients.map(ingredient => ingredient?.Combat ?? 0))
    };
  }

  private sum(nums: number[]) {
    return nums.reduce((sum, num) => sum + num, 0);
  }

  private getRandomItemFromArray<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
