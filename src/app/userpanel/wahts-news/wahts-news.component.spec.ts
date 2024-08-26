import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahtsNewsComponent } from './wahts-news.component';

describe('WahtsNewsComponent', () => {
  let component: WahtsNewsComponent;
  let fixture: ComponentFixture<WahtsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WahtsNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WahtsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
