import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLoisirComponent } from './one-loisir.component';

describe('OneLoisirComponent', () => {
  let component: OneLoisirComponent;
  let fixture: ComponentFixture<OneLoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLoisirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneLoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
