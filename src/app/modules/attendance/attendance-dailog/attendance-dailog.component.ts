import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-attendance-dailog',
  templateUrl: './attendance-dailog.component.html',
  styleUrls: ['./attendance-dailog.component.scss']
})
export class AttendanceDailogComponent implements OnInit {
  attendance !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.validator();
  }
  validator() {
    this.attendance = new FormGroup({
      'id': new FormControl('', [Validators.required]),
      'sname': new FormControl('', [Validators.required]),
      'dname': new FormControl('', [Validators.required]),
      'loginTime': new FormControl('', [Validators.required]),
      'logoutTime': new FormControl('', [Validators.required]),
    })
  }
  get addteacher() {
    return (<FormArray>this.attendance.get('teacher')).controls;
  }
  deleteRow(index: number) {
    (<FormArray>this.attendance.get('teacher')).removeAt(index);
  }
  add() {
    (<FormArray>this.attendance.get('teacher')).push(new FormControl('', Validators.required));
  }
}
