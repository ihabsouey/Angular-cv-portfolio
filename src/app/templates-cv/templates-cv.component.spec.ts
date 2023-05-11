import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesCVComponent } from './templates-cv.component';

describe('TemplatesCVComponent', () => {
  let component: TemplatesCVComponent;
  let fixture: ComponentFixture<TemplatesCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
