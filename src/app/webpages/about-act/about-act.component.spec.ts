import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutActComponent } from './about-act.component';

describe('AboutActComponent', () => {
  let component: AboutActComponent;
  let fixture: ComponentFixture<AboutActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
