import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSidebarComponent } from './btn-sidebar.component';

describe('BtnSidebarComponent', () => {
  let component: BtnSidebarComponent;
  let fixture: ComponentFixture<BtnSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
