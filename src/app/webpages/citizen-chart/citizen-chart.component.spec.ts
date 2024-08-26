import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenChartComponent } from './citizen-chart.component';

describe('CitizenChartComponent', () => {
  let component: CitizenChartComponent;
  let fixture: ComponentFixture<CitizenChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
