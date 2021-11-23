import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterDifficultyDialogComponent } from './encounter-difficulty-dialog.component';

describe('EncounterDifficultyDialogComponent', () => {
  let component: EncounterDifficultyDialogComponent;
  let fixture: ComponentFixture<EncounterDifficultyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterDifficultyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterDifficultyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
