import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbbsInRussiaComponent } from './mbbs-in-russia.component';

describe('MbbsInRussiaComponent', () => {
  let component: MbbsInRussiaComponent;
  let fixture: ComponentFixture<MbbsInRussiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbbsInRussiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbbsInRussiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
