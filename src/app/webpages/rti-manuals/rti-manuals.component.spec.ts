import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiManualsComponent } from './rti-manuals.component';

describe('RtiManualsComponent', () => {
  let component: RtiManualsComponent;
  let fixture: ComponentFixture<RtiManualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtiManualsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtiManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
