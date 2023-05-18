import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbbsInKyrgyzstanComponent } from './mbbs-in-kyrgyzstan.component';

describe('MbbsInKyrgyzstanComponent', () => {
  let component: MbbsInKyrgyzstanComponent;
  let fixture: ComponentFixture<MbbsInKyrgyzstanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbbsInKyrgyzstanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbbsInKyrgyzstanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
