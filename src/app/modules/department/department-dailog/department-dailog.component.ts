import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-dailog',
  templateUrl: './department-dailog.component.html',
  styleUrls: ['./department-dailog.component.scss']
})
export class DepartmentDailogComponent implements OnInit {
  departmentForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.validator();
  }
  validator() {
    this.departmentForm = new FormGroup({
      'id': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'head': new FormControl('', [Validators.required]),
      'teacher': new FormArray([new FormControl('', [Validators.required])])
    })
  }
  get addteacher() {
    return (<FormArray>this.departmentForm.get('teacher')).controls;
  }
  deleteRow(index: number) {
    (<FormArray>this.departmentForm.get('teacher')).removeAt(index);
  }
  add() {
    (<FormArray>this.departmentForm.get('teacher')).push(new FormControl('', Validators.required));
  }
}
