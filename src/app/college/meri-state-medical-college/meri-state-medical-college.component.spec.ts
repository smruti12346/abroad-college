import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeriStateMedicalCollegeComponent } from './meri-state-medical-college.component';

describe('MeriStateMedicalCollegeComponent', () => {
  let component: MeriStateMedicalCollegeComponent;
  let fixture: ComponentFixture<MeriStateMedicalCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeriStateMedicalCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeriStateMedicalCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
