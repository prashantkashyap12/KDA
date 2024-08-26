import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshnewsComponent } from './fleshnews.component';

describe('FleshnewsComponent', () => {
  let component: FleshnewsComponent;
  let fixture: ComponentFixture<FleshnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleshnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleshnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
