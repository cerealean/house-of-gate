import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DisplayCardComponent } from "../display-card/display-card.component";
import { ingredients } from 'src/app/data/static/obojima/ingredients';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'potion-making-ingredients-list',
  imports: [MatFormFieldModule, FormsModule, DisplayCardComponent, MatInputModule, FlexLayoutModule, MatIconModule],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent {
  private readonly ingredients = signal(ingredients).asReadonly();

  readonly ingredientFilter = signal('');
  readonly filteredIngredients = computed(() => this.ingredients().filter(ingredient => ingredient.Name.toLowerCase().includes(this.ingredientFilter().toLowerCase()) || ingredient.Description.toLowerCase().includes(this.ingredientFilter().toLowerCase())));
}
