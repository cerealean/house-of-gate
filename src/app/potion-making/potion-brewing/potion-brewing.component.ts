import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { IngredientAutocompleteInputComponent } from '../ingredient-autocomplete-input/ingredient-autocomplete-input.component';
import type { Ingredient } from 'src/app/data/static/obojima/ingredients';
import { PotionsMakingUtilitiesService } from '../potions-making-utilities.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'potion-making-potion-brewing',
  imports: [FlexLayoutModule, MatCardModule, IngredientAutocompleteInputComponent, MatIconModule],
  templateUrl: './potion-brewing.component.html',
  styleUrl: './potion-brewing.component.scss'
})
export class PotionBrewingComponent {
  readonly selectedIngredient1 = signal<Ingredient | undefined>(this.potionUtilitiesService.getRandomIngredient());
  readonly selectedIngredient2 = signal<Ingredient | undefined>(this.potionUtilitiesService.getRandomIngredient());
  readonly selectedIngredient3 = signal<Ingredient | undefined>(this.potionUtilitiesService.getRandomIngredient());

  readonly resultingPotions = computed(() => this.potionUtilitiesService.brewPotionsFromIngredients(this.selectedIngredient1()!, this.selectedIngredient2()!, this.selectedIngredient3()!));

  readonly isCombatHighestScore = computed(() => this.resultingPotions()?.typesWithMaxValue?.indexOf('combat') !== -1);
  readonly isUtilityHighestScore = computed(() => this.resultingPotions()?.typesWithMaxValue?.indexOf('utility') !== -1);
  readonly isWhimsyHighestScore = computed(() => this.resultingPotions()?.typesWithMaxValue?.indexOf('whimsical') !== -1);

  readonly combatScore = computed(() => this.resultingPotions()?.scores.combat ?? 0);
  readonly utilityScore = computed(() => this.resultingPotions()?.scores.utility ?? 0);
  readonly whimsyScore = computed(() => this.resultingPotions()?.scores.whimsical ?? 0);

  constructor(private readonly potionUtilitiesService: PotionsMakingUtilitiesService) { }
}
