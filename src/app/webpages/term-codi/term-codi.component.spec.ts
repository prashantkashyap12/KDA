import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCodiComponent } from './term-codi.component';

describe('TermCodiComponent', () => {
  let component: TermCodiComponent;
  let fixture: ComponentFixture<TermCodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermCodiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermCodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
