import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionsListComponent } from './potions-list.component';

describe('PotionsListComponent', () => {
  let component: PotionsListComponent;
  let fixture: ComponentFixture<PotionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
