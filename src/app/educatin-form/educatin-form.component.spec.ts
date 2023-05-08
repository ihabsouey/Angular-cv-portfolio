import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatinFormComponent } from './educatin-form.component';

describe('EducatinFormComponent', () => {
  let component: EducatinFormComponent;
  let fixture: ComponentFixture<EducatinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatinFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducatinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
