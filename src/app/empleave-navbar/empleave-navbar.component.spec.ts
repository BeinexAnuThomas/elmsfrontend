import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveNavbarComponent } from './empleave-navbar.component';

describe('EmpleaveNavbarComponent', () => {
  let component: EmpleaveNavbarComponent;
  let fixture: ComponentFixture<EmpleaveNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleaveNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleaveNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
