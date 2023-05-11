import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEducationCvComponent } from './one-education-cv.component';

describe('OneEducationCvComponent', () => {
  let component: OneEducationCvComponent;
  let fixture: ComponentFixture<OneEducationCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneEducationCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneEducationCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
