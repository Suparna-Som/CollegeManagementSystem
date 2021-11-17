import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-student-dailog',
  templateUrl: './student-dailog.component.html',
  styleUrls: ['./student-dailog.component.scss']
})
export class StudentDailogComponent implements OnInit {
  attendance !: FormGroup;
  constructor(private input: InputService) { }

  ngOnInit(): void {
    this.validator();
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
