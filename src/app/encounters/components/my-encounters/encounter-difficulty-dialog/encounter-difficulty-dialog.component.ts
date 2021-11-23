import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encounter-difficulty-dialog',
  templateUrl: './encounter-difficulty-dialog.component.html',
  styleUrls: ['./encounter-difficulty-dialog.component.scss']
})
export class EncounterDifficultyDialogComponent implements OnInit {
  public playerLevel = 5;
  public numberOfPlayers = 4;

  constructor() { }

  ngOnInit(): void {
  }

  updateFilters(): void {

  }

}
