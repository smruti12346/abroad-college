import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbbsInKazakhstanComponent } from './mbbs-in-kazakhstan.component';

describe('MbbsInKazakhstanComponent', () => {
  let component: MbbsInKazakhstanComponent;
  let fixture: ComponentFixture<MbbsInKazakhstanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbbsInKazakhstanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbbsInKazakhstanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
