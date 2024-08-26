import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiApioComponent } from './poi-apio.component';

describe('PoiApioComponent', () => {
  let component: PoiApioComponent;
  let fixture: ComponentFixture<PoiApioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoiApioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoiApioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
