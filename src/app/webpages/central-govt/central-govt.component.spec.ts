import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralGovtComponent } from './central-govt.component';

describe('CentralGovtComponent', () => {
  let component: CentralGovtComponent;
  let fixture: ComponentFixture<CentralGovtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralGovtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralGovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
