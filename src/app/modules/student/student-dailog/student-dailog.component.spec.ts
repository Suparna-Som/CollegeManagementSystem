import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDailogComponent } from './student-dailog.component';

describe('StudentDailogComponent', () => {
  let component: StudentDailogComponent;
  let fixture: ComponentFixture<StudentDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
