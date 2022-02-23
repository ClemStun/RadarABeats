import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBtnComponent } from './test-btn.component';

describe('TestBtnComponent', () => {
  let component: TestBtnComponent;
  let fixture: ComponentFixture<TestBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
