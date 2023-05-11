import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExperienceCvComponent } from './one-experience-cv.component';

describe('OneExperienceCvComponent', () => {
  let component: OneExperienceCvComponent;
  let fixture: ComponentFixture<OneExperienceCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneExperienceCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneExperienceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
