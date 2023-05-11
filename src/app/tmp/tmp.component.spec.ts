import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMPComponent } from './tmp.component';

describe('TMPComponent', () => {
  let component: TMPComponent;
  let fixture: ComponentFixture<TMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TMPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
