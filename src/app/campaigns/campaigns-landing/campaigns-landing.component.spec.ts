import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsLandingComponent } from './campaigns-landing.component';

describe('CampaignsLandingComponent', () => {
  let component: CampaignsLandingComponent;
  let fixture: ComponentFixture<CampaignsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
