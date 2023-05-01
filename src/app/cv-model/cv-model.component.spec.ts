import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModelComponent } from './cv-model.component';

describe('CvModelComponent', () => {
  let component: CvModelComponent;
  let fixture: ComponentFixture<CvModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
