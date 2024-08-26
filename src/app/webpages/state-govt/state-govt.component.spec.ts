import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateGovtComponent } from './state-govt.component';

describe('StateGovtComponent', () => {
  let component: StateGovtComponent;
  let fixture: ComponentFixture<StateGovtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateGovtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateGovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
