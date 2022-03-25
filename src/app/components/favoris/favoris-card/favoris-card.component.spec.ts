import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisCardComponent } from './favoris-card.component';

describe('FavorisCardComponent', () => {
  let component: FavorisCardComponent;
  let fixture: ComponentFixture<FavorisCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorisCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
