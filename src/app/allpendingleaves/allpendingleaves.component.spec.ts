import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpendingleavesComponent } from './allpendingleaves.component';

describe('AllpendingleavesComponent', () => {
  let component: AllpendingleavesComponent;
  let fixture: ComponentFixture<AllpendingleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpendingleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpendingleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
