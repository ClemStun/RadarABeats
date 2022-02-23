import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkerComponent } from './darker.component';

describe('DarkerComponent', () => {
  let component: DarkerComponent;
  let fixture: ComponentFixture<DarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
