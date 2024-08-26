import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutByruleComponent } from './about-byrule.component';

describe('AboutByruleComponent', () => {
  let component: AboutByruleComponent;
  let fixture: ComponentFixture<AboutByruleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutByruleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutByruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
