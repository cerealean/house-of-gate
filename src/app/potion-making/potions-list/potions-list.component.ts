import { Component, computed, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { potions } from 'src/app/data/static/obojima/potions';
import { DisplayCardComponent } from '../display-card/display-card.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'potion-making-potions-list',
  imports: [MatFormFieldModule, MatInputModule, FlexLayoutModule, DisplayCardComponent, FormsModule, MatIconModule],
  templateUrl: './potions-list.component.html',
  styleUrl: './potions-list.component.scss'
})
export class PotionsListComponent {
  readonly potions = signal(potions).asReadonly();
  readonly flatPotions = computed(() => this.potions().combat.concat(this.potions().utility).concat(this.potions().whimsical).concat(this.potions().custom));

  readonly potionFilter = signal('');
  readonly filteredPotions = computed(() => this.flatPotions().filter(potion => potion.Name.toLowerCase().includes(this.potionFilter().toLowerCase()) || potion.Description.toLowerCase().includes(this.potionFilter().toLowerCase())));
}
