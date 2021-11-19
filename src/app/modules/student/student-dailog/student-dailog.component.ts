import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-student-dailog',
  templateUrl: './student-dailog.component.html',
  styleUrls: ['./student-dailog.component.scss']
})
export class StudentDailogComponent implements OnInit {
  attendance !: FormGroup;
  constructor(private input: InputService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  editData={
    studentId: '',
      studentName: '',
      departmentName: '',
      studentMobileNo: '',
      studentAddmissionDate: ''
  }
  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data
      console.log(this.editData);
      this.validatorForData();
    }else{
      this.validator();
    }
  }
  validatorForData() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'departmentName': new FormControl('', [Validators.required]),
      'studentMobileNo': new FormControl('', [Validators.required]),
      'studentAddmissionDate': new FormControl('', [Validators.required]),
    })
  }
  validator() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'departmentName': new FormControl('', [Validators.required]),
      'studentMobileNo': new FormControl('', [Validators.required]),
      'studentAddmissionDate': new FormControl('', [Validators.required]),
    })
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
