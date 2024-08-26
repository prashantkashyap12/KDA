import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EioComponent } from './eio.component';

describe('EioComponent', () => {
  let component: EioComponent;
  let fixture: ComponentFixture<EioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
