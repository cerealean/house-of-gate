import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializationNoticeComponent } from './initialization-notice.component';

describe('InitializationNoticeComponent', () => {
  let component: InitializationNoticeComponent;
  let fixture: ComponentFixture<InitializationNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializationNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializationNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
