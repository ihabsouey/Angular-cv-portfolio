import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCvModelComponent } from './first-cv-model.component';

describe('FirstCvModelComponent', () => {
  let component: FirstCvModelComponent;
  let fixture: ComponentFixture<FirstCvModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCvModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCvModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
