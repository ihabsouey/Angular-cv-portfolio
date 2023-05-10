import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCompetenceComponent } from './one-competence.component';

describe('OneCompetenceComponent', () => {
  let component: OneCompetenceComponent;
  let fixture: ComponentFixture<OneCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCompetenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
