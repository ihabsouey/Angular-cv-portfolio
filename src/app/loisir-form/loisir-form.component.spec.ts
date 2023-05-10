import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisirFormComponent } from './loisir-form.component';

describe('LoisirFormComponent', () => {
  let component: LoisirFormComponent;
  let fixture: ComponentFixture<LoisirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoisirFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoisirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
