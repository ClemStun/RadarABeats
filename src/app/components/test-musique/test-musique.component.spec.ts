import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMusiqueComponent } from './test-musique.component';

describe('TestMusiqueComponent', () => {
  let component: TestMusiqueComponent;
  let fixture: ComponentFixture<TestMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMusiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
