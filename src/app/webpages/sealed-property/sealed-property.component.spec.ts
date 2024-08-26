import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SealedPropertyComponent } from './sealed-property.component';

describe('SealedPropertyComponent', () => {
  let component: SealedPropertyComponent;
  let fixture: ComponentFixture<SealedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SealedPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SealedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
