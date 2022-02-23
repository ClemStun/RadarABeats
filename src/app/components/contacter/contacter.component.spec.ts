import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterComponent } from './contacter.component';

describe('ContacterComponent', () => {
  let component: ContacterComponent;
  let fixture: ComponentFixture<ContacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
