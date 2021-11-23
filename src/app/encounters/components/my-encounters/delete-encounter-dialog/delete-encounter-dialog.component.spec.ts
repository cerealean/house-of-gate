import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEncounterDialogComponent } from './delete-encounter-dialog.component';

describe('DeleteEncounterDialogComponent', () => {
  let component: DeleteEncounterDialogComponent;
  let fixture: ComponentFixture<DeleteEncounterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEncounterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEncounterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
