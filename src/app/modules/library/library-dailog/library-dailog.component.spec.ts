import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDailogComponent } from './library-dailog.component';

describe('LibraryDailogComponent', () => {
  let component: LibraryDailogComponent;
  let fixture: ComponentFixture<LibraryDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
