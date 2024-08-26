import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerdataComponent } from './officerdata.component';

describe('OfficerdataComponent', () => {
  let component: OfficerdataComponent;
  let fixture: ComponentFixture<OfficerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
