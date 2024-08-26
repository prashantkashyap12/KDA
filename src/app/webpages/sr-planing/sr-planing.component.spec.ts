import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrPlaningComponent } from './sr-planing.component';

describe('SrPlaningComponent', () => {
  let component: SrPlaningComponent;
  let fixture: ComponentFixture<SrPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrPlaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
