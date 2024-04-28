import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEncounterDialogComponent } from './save-encounter-dialog.component';

describe('SaveEncounterDialogComponent', () => {
  let component: SaveEncounterDialogComponent;
  let fixture: ComponentFixture<SaveEncounterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SaveEncounterDialogComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEncounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
