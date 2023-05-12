import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCvModelComponent } from './third-cv-model.component';

describe('ThirdCvModelComponent', () => {
  let component: ThirdCvModelComponent;
  let fixture: ComponentFixture<ThirdCvModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdCvModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdCvModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
