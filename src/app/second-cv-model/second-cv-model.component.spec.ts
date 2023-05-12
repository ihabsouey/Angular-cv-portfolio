import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCvModelComponent } from './second-cv-model.component';

describe('SecondCvModelComponent', () => {
  let component: SecondCvModelComponent;
  let fixture: ComponentFixture<SecondCvModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCvModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCvModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
