import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiActsComponent } from './rti-acts.component';

describe('RtiActsComponent', () => {
  let component: RtiActsComponent;
  let fixture: ComponentFixture<RtiActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtiActsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtiActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
