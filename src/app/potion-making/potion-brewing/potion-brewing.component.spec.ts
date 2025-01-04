import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionBrewingComponent } from './potion-brewing.component';

describe('PotionBrewingComponent', () => {
  let component: PotionBrewingComponent;
  let fixture: ComponentFixture<PotionBrewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionBrewingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionBrewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
