import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRuleComponent } from './about-rule.component';

describe('AboutRuleComponent', () => {
  let component: AboutRuleComponent;
  let fixture: ComponentFixture<AboutRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
