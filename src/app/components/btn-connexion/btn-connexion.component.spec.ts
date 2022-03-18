import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnConnexionComponent } from './btn-connexion.component';

describe('BtnConnexionComponent', () => {
  let component: BtnConnexionComponent;
  let fixture: ComponentFixture<BtnConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnConnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
