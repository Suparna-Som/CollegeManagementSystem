import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-attendance-dailog',
  templateUrl: './attendance-dailog.component.html',
  styleUrls: ['./attendance-dailog.component.scss']
})
export class AttendanceDailogComponent implements OnInit {
  attendance !: FormGroup;
  editData = {
    studentId: "",
    studentName: "",
    department: "",
    loginTime: "",
    logoutTime: "",
  };
  constructor(private input: InputService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    if (this.data != null) {
      this.editData = this.data
      console.log(this.editData);
      this.validatorForData();
    } else {
      this.validator();
    }

  }
  validatorForData() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'department': new FormControl('', [Validators.required]),
      'loginTime': new FormControl('', [Validators.required]),
      'logoutTime': new FormControl('',),
      'srNo': new FormControl(this.data.srNo)
    })
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
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
