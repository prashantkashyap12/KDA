import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhurjaMasterComponent } from './khurja-master.component';

describe('KhurjaMasterComponent', () => {
  let component: KhurjaMasterComponent;
  let fixture: ComponentFixture<KhurjaMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhurjaMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhurjaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
