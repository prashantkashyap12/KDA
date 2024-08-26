import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsliderOneComponent } from './topslider-one.component';

describe('TopsliderOneComponent', () => {
  let component: TopsliderOneComponent;
  let fixture: ComponentFixture<TopsliderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsliderOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopsliderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
