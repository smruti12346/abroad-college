import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbbsInGeorgiaComponent } from './mbbs-in-georgia.component';

describe('MbbsInGeorgiaComponent', () => {
  let component: MbbsInGeorgiaComponent;
  let fixture: ComponentFixture<MbbsInGeorgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbbsInGeorgiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbbsInGeorgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
