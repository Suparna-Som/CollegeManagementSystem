import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  attendance !: FormGroup;
  editData = {
    studentId: '',
    studentName: '',
    departmentName: '',
    studentMobileNo: '',
    studentAdmissionDate: ''
  }
  @Output() child = new EventEmitter()
  @Input() data;
  constructor(public input: InputService) { }

  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data

      this.validatorForData();
    } else {
      this.validator();
    }
  }
  send() {

    console.log(this.attendance.value);

    if (this.attendance.valid) {
      this.child.emit(this.attendance.value)
    }
  }
  validatorForData() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'departmentName': new FormControl('', [Validators.required]),
      'studentMobileNo': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'studentAdmissionDate': new FormControl('', [Validators.required]),
    })
  }
  validator() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'departmentName': new FormControl('', [Validators.required]),
      'studentMobileNo': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'studentAdmissionDate': new FormControl('', [Validators.required]),
    })
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }

}
