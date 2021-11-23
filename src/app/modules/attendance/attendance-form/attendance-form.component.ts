import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';


@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {
  attendance !: FormGroup;
  @Output() child = new EventEmitter()
  @Input() data;
  editData = {
    studentId: "",
    studentName: "",
    department: "",
    loginTime: "",
    logoutTime: "",
  };
  constructor(public input: InputService) {

  }

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
    console.log("send");

    if (this.attendance.valid) {
      this.child.emit(this.attendance.value)
    }
  }
  validator() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'department': new FormControl('', [Validators.required]),
      'loginTime': new FormControl('', [Validators.required]),
      'logoutTime': new FormControl('',),
    })
  }
  validatorForData() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'department': new FormControl('', [Validators.required]),
      'loginTime': new FormControl('', [Validators.required]),
      'logoutTime': new FormControl('', [Validators.required]),
      'srNo': new FormControl(this.data.srNo)
    })
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
