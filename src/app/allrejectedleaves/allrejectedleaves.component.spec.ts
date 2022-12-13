import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrejectedleavesComponent } from './allrejectedleaves.component';

describe('AllrejectedleavesComponent', () => {
  let component: AllrejectedleavesComponent;
  let fixture: ComponentFixture<AllrejectedleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrejectedleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrejectedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
