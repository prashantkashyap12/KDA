import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcrPlaningComponent } from './ncr-planing.component';

describe('NcrPlaningComponent', () => {
  let component: NcrPlaningComponent;
  let fixture: ComponentFixture<NcrPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcrPlaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcrPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
