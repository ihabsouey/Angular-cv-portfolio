import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnEcucationComponent } from './un-ecucation.component';

describe('UnEcucationComponent', () => {
  let component: UnEcucationComponent;
  let fixture: ComponentFixture<UnEcucationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnEcucationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnEcucationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
