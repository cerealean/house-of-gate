import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionMakingComponent } from './potion-making.component';

describe('PotionMakingComponent', () => {
  let component: PotionMakingComponent;
  let fixture: ComponentFixture<PotionMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionMakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
