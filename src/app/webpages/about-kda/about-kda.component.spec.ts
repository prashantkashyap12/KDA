import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKdaComponent } from './about-kda.component';

describe('AboutKdaComponent', () => {
  let component: AboutKdaComponent;
  let fixture: ComponentFixture<AboutKdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutKdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
