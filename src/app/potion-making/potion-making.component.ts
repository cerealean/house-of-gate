import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { type Ingredient } from '../data/static/obojima/ingredients';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { IngredientAutocompleteInputComponent } from "./ingredient-autocomplete-input/ingredient-autocomplete-input.component";
import { IngredientsListComponent } from "./ingredients-list/ingredients-list.component";
import { PotionsListComponent } from "./potions-list/potions-list.component";
import { PotionsMakingUtilitiesService } from './potions-making-utilities.service';

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
    IngredientAutocompleteInputComponent,
    IngredientsListComponent,
    PotionsListComponent
  ],
  templateUrl: './potion-making.component.html',
  styleUrl: './potion-making.component.scss'
})
export class PotionMakingComponent {
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
