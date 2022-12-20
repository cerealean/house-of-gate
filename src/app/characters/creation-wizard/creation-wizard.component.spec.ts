import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationWizardComponent } from './creation-wizard.component';

describe('CreationWizardComponent', () => {
  let component: CreationWizardComponent;
  let fixture: ComponentFixture<CreationWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
