import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberStractureComponent } from './member-stracture.component';

describe('MemberStractureComponent', () => {
  let component: MemberStractureComponent;
  let fixture: ComponentFixture<MemberStractureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberStractureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberStractureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
