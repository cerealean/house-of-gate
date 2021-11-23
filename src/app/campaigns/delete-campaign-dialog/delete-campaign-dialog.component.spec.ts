import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampaignDialogComponent } from './delete-campaign-dialog.component';

describe('DeleteCampaignDialogComponent', () => {
  let component: DeleteCampaignDialogComponent;
  let fixture: ComponentFixture<DeleteCampaignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCampaignDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCampaignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
