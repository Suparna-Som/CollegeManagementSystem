import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceDailogComponent } from './attendance-dailog.component';

describe('AttendanceDailogComponent', () => {
  let component: AttendanceDailogComponent;
  let fixture: ComponentFixture<AttendanceDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
