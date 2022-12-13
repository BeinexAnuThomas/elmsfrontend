import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllapprovedleavesComponent } from './allapprovedleaves.component';

describe('AllapprovedleavesComponent', () => {
  let component: AllapprovedleavesComponent;
  let fixture: ComponentFixture<AllapprovedleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllapprovedleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllapprovedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
