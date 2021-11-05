import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Encounter } from '../../models/encounter';
import { EncounterGenerator2Service } from '../../../monsters/services/encounter-generator-2.service';

@Component({
  selector: 'app-previous-encounters',
  templateUrl: './previous-encounters.component.html',
  styleUrls: ['./previous-encounters.component.scss']
})
export class PreviousEncountersComponent implements OnInit, OnDestroy {

  private _encounters: Encounter[] = [];
  private previousEncounters$!: Subscription;

  @Output() previousEncounterSelected = new EventEmitter<Encounter>();

  public get encounters(): Encounter[] {
    return this._encounters;
  }

  constructor(
    private encounterGenerator: EncounterGenerator2Service
  ) { }

  ngOnInit(): void {
    const rawr = 'yes';
    this.previousEncounters$ = this.encounterGenerator.previousEncounters$
      .subscribe(encounters => {
        this._encounters = encounters;
      });
  }

  ngOnDestroy(): void {
    this.previousEncounters$?.unsubscribe();
    this.previousEncounterSelected?.complete();
  }

  loadPreviousEncounter($event: MouseEvent, encounter: Encounter) {
    $event.preventDefault();
    this.previousEncounterSelected.emit(encounter);
  }

}
