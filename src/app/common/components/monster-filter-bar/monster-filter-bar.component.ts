
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatCard } from "@angular/material/card";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatOption } from "@angular/material/core";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatSelect, MatSelectChange } from "@angular/material/select";
import { FlexModule } from "@ngbracket/ngx-layout/flex";
import { MonsterFilters } from "src/app/components/monsters/models/monster-filters";
import { environments } from "src/app/data/static/environments";
import { monsterTypes } from "src/app/data/static/monster-types";
import { sources } from "src/app/data/static/sources";

@Component({
  selector: "app-monster-filter-bar",
  templateUrl: "./monster-filter-bar.component.html",
  styleUrls: ["./monster-filter-bar.component.scss"],
  standalone: true,
  imports: [
    MatCard,
    FlexModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatButton
],
})
export class MonsterFilterBarComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  public readonly monsterTypes = monsterTypes;
  public readonly environments = environments;
  public readonly sources = sources;

  @Input() filters!: MonsterFilters;
  @Output() public readonly filterChanges = new EventEmitter<MonsterFilters>();

  ngOnInit(): void {
    if (!this.filters) {
      this.setInitialFilters();
      this.filter();
    }
  }

  ngOnDestroy(): void {
    this.filterChanges?.complete();
  }

  ngAfterViewInit(): void {
    this.filterChanges.emit(this.filters);
  }

  filter(event?: MatSelectChange) {
    const newFilters = Object.assign({}, this.filters);
    this.filterChanges.emit(newFilters);
  }

  fill(start: number, end: number): number[] {
    return Array(end - start + 1)
      .fill(0)
      .map((_, index) => start + index);
  }

  changeCheckboxState(_$event: MouseEvent, filterKey: string) {
    const currentValue = (this.filters as any)[filterKey];
    if (currentValue === true) {
      (this.filters as any)[filterKey] = false;
    } else if (currentValue === false) {
      (this.filters as any)[filterKey] = undefined;
    } else {
      (this.filters as any)[filterKey] = true;
    }
    this.filter();
  }

  setInitialFilters(): void {
    this.filters = {
      name: "",
      minCr: 0,
      maxCr: 30,
      type: this.monsterTypes.slice(),
      environment: this.environments.concat("None"),
      legendary: undefined,
      unique: undefined,
      sources: this.sources.slice(),
    };
    this.filter();
  }
}
