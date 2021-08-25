import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Encounter } from '../models/encounter';
import { EncounterGeneratorService } from '../services/encounter-generator.service';

@Component({
  selector: 'app-previous-encounters',
  templateUrl: './previous-encounters.component.html',
  styleUrls: ['./previous-encounters.component.scss']
})
export class PreviousEncountersComponent implements OnInit, OnDestroy {

  private _encounters: Encounter[] = [];
  private previousEncounters$!: Subscription;

  public get encounters(): Encounter[] {
    return this._encounters;
  }

  constructor(
    private encounterGenerator: EncounterGeneratorService
  ) { }

  ngOnInit(): void {
    this.previousEncounters$ = this.encounterGenerator.previousEncounters$
      .subscribe(encounters => {
        this._encounters = encounters;
      });
  }

  ngOnDestroy(): void {
    this.previousEncounters$?.unsubscribe();
  }

  loadPreviousEncounter($event: MouseEvent, encounter: Encounter) {
    $event.preventDefault();
  }

}
