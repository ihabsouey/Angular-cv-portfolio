import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProjetComponent } from './one-projet.component';

describe('OneProjetComponent', () => {
  let component: OneProjetComponent;
  let fixture: ComponentFixture<OneProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
