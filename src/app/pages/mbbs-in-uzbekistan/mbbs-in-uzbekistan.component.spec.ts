import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbbsInUzbekistanComponent } from './mbbs-in-uzbekistan.component';

describe('MbbsInUzbekistanComponent', () => {
  let component: MbbsInUzbekistanComponent;
  let fixture: ComponentFixture<MbbsInUzbekistanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbbsInUzbekistanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbbsInUzbekistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
