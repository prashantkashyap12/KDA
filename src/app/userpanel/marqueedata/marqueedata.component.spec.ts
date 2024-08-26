import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueedataComponent } from './marqueedata.component';

describe('MarqueedataComponent', () => {
  let component: MarqueedataComponent;
  let fixture: ComponentFixture<MarqueedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
