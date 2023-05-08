import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExperienceComponent } from './one-experience.component';

describe('OneExperienceComponent', () => {
  let component: OneExperienceComponent;
  let fixture: ComponentFixture<OneExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
