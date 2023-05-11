import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEducationComponent } from './one-education.component';

describe('OneEducationComponent', () => {
  let component: OneEducationComponent;
  let fixture: ComponentFixture<OneEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
