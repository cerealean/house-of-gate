import { AsyncPipe, TitleCasePipe } from "@angular/common";
import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  computed,
  effect,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatPaginator, PageEvent } from "@angular/material/paginator";

import { sort } from "fast-sort";
import { SpellDataService } from "src/app/data/services/spells/spell-data.service";
import {
  SpellsClasses,
  classesAndSubclassesForSpells,
} from "src/app/data/static/classes";
import { OrdinalPipe } from "src/app/pipes/ordinal/ordinal.pipe";
import { Spell } from "src/app/spells/models/spell";

import { FlexLayoutModule } from "@ngbracket/ngx-layout";

import { MatButton } from "@angular/material/button";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatDivider } from "@angular/material/divider";
import { MatOption, MatSelect } from "@angular/material/select";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltip } from "@angular/material/tooltip";
import { StorageKeys, StorageService } from "src/app/services/storage.service";
import { SpellCardComponent } from "./spell-card/spell-card.component";

interface Config {
  filterName: string;
  filterLevel: number[];
  onlySelected: boolean;
  selectedSpells: Spell[];
  paginatorPageIndex: number;
  paginatorPageSize: number;
}

@Component({
  selector: "app-printable-spell-list-generator",
  standalone: true,
  templateUrl: "./printable-spell-list-generator.component.html",
  styleUrl: "./printable-spell-list-generator.component.scss",
  imports: [
    AsyncPipe,
    OrdinalPipe,
    TitleCasePipe,
    FlexLayoutModule,
    SpellCardComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatPaginator,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatDivider,
    MatTooltip,
    MatButton,
    MatSnackBarModule,
    FormsModule,
  ],
})
export class PrintableSpellListGeneratorComponent implements OnInit, OnDestroy {
  private allSpells = signal<Spell[]>([]);

  public readonly spellClasses = classesAndSubclassesForSpells;

  public readonly isLoaded = signal(false);
  public readonly selectedSpells = signal<Spell[]>([]);
  public readonly filterName = signal("");
  public readonly filterLevel = signal<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  public readonly onlySelected = signal(false);
  public readonly previewMode = signal(false);
  public readonly paginatorPageSize = signal(10);
  public readonly paginatorPageSizeOptions = signal([5, 10, 25, 50, 100]);
  public readonly paginatorPageIndex = signal(0);
  public readonly paginatorLength = computed(
    () => this.filteredSpells().length
  );
  public readonly hasSelectedSpells = computed(
    () => this.selectedSpells().length > 0
  );
  public readonly previewModeTooltip = computed(() =>
    this.hasSelectedSpells()
      ? "Preview printable page"
      : "Select spells to preview printable page"
  );

  public filteredSpells = computed(() => {
    const allSpells = this.allSpells();
    if (!allSpells || allSpells.length === 0) {
      return [];
    }

    if (this.onlySelected() || this.previewMode()) {
      return this.selectedSpells();
    }

    let filtered = allSpells;

    const name = this.filterName();
    if (name) {
      filtered = filtered.filter(
        spell => spell.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
    }

    const levels = this.filterLevel();
    if (levels !== undefined) {
      filtered = filtered.filter(spell => levels.includes(spell.level));
    }

    return filtered;
  });

  private readonly configurationEffect = effect(() => {
    if (!this.isLoaded()) {
      return;
    }

    const config: Config = {
      filterName: this.filterName(),
      filterLevel: this.filterLevel(),
      onlySelected: this.onlySelected(),
      selectedSpells: this.selectedSpells(),
      paginatorPageIndex: this.paginatorPageIndex(),
      paginatorPageSize: this.paginatorPageSize(),
    };

    this.storageService.setData(
      StorageKeys.SpellListGeneratorConfiguration,
      config
    );
  });

  @HostListener("window:keydown.escape", ["$event"])
  closePreview(event: KeyboardEvent) {
    if (this.previewMode()) {
      this.previewMode.set(false);
      event.preventDefault();
      event.stopPropagation();
      this.matSnackBar.dismiss();
    }
  }

  @HostListener("window:beforeprint")
  beforePrint() {
    if (!this.previewMode()) {
      this.printPreview();
    }
  }

  constructor(
    private readonly spellDataService: SpellDataService,
    private readonly matSnackBar: MatSnackBar,
    private readonly storageService: StorageService
  ) {}

  ngOnInit() {
    this.spellDataService
      .getAllSpells()
      .then(spells => {
        const sortedSpells = this.filterSpellsByLevelThenName(spells);
        this.allSpells.set(sortedSpells);
      })
      .then(() => {
        const config = this.storageService.getData<Config>(
          StorageKeys.SpellListGeneratorConfiguration
        );
        if (config) {
          this.filterName.set(config.filterName);
          this.filterLevel.set(config.filterLevel);
          this.onlySelected.set(config.onlySelected);
          this.paginatorPageIndex.set(config.paginatorPageIndex);
          this.paginatorPageSize.set(config.paginatorPageSize);

          const selectedSpells = this.allSpells().filter(spell => {
            return config.selectedSpells.some(
              selectedSpell => selectedSpell.id === spell.id
            );
          });
          this.selectedSpells.set(selectedSpells);
        }
      })
      .finally(() => {
        this.isLoaded.set(true);
      });
  }

  ngOnDestroy(): void {
    this.configurationEffect.destroy();
  }

  getPaginatedSpells(start: number, end: number): Spell[] {
    return this.filteredSpells().slice(start, end);
  }

  toggleSpell(spell: Spell): void {
    if (this.previewMode()) {
      return;
    }
    const selectedSpells = this.selectedSpells();
    const spellIndex = selectedSpells.indexOf(spell);
    if (spellIndex !== -1) {
      this.selectedSpells.update(spells => {
        spells.splice(spellIndex, 1);
        return spells;
      });
    } else {
      this.selectedSpells.update(spells => spells.concat(spell));
    }
  }

  clearSelectedSpells(): void {
    this.selectedSpells.set([]);
    this.paginatorPageIndex.set(0);
  }

  printPreview(): void {
    this.paginatorPageIndex.set(0);
    this.paginatorPageSize.set(this.paginatorLength());
    this.previewMode.set(true);
    this.matSnackBar.open("Press 'ESC' to close preview", undefined, {
      panelClass: "no-print",
    });
  }

  quickAddSpellsForClass(spellClass: SpellsClasses): void {
    const spells = this.allSpells().filter(
      spell => spell.classes.indexOf(spellClass) !== -1
    );
    const sortedSpells = this.filterSpellsByLevelThenName(spells);
    this.selectedSpells.update(selectedSpells =>
      selectedSpells.concat(sortedSpells)
    );
  }

  updatePaginator(event: PageEvent): void {
    this.paginatorPageSize.set(event.pageSize);
    this.paginatorPageIndex.set(event.pageIndex);
  }

  private filterSpellsByLevelThenName(spells: Spell[]) {
    return sort(spells).asc([s => s.level, s => s.name]);
  }
}
