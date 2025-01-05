import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { IngredientsListComponent } from "./ingredients-list/ingredients-list.component";
import { PotionsListComponent } from "./potions-list/potions-list.component";
import { PotionBrewingComponent } from "./potion-brewing/potion-brewing.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-potion-making',
  imports: [
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    IngredientsListComponent,
    PotionsListComponent,
    PotionBrewingComponent
],
  templateUrl: './potion-making.component.html',
  styleUrl: './potion-making.component.scss'
})
export class PotionMakingComponent {

}
