import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersComponent } from './monsters.component';

describe('MonstersComponent', () => {
  let component: MonstersComponent;
  let fixture: ComponentFixture<MonstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MonstersComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
