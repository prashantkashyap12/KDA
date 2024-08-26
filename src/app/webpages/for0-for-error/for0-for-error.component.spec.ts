import { ComponentFixture, TestBed } from '@angular/core/testing';

import { For0ForErrorComponent } from './for0-for-error.component';

describe('For0ForErrorComponent', () => {
  let component: For0ForErrorComponent;
  let fixture: ComponentFixture<For0ForErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ For0ForErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(For0ForErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
