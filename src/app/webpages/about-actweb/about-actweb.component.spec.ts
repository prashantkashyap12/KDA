import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutActwebComponent } from './about-actweb.component';

describe('AboutActwebComponent', () => {
  let component: AboutActwebComponent;
  let fixture: ComponentFixture<AboutActwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutActwebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutActwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
