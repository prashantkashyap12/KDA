import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTanderComponent } from './cancel-tander.component';

describe('CancelTanderComponent', () => {
  let component: CancelTanderComponent;
  let fixture: ComponentFixture<CancelTanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelTanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelTanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
