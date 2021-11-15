import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDailogComponent } from './department-dailog.component';

describe('DepartmentDailogComponent', () => {
  let component: DepartmentDailogComponent;
  let fixture: ComponentFixture<DepartmentDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
