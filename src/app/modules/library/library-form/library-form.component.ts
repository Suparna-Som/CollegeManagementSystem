import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {
  attendance !: FormGroup;
  @Output() child = new EventEmitter()
  @Input() data;
  constructor(public input: InputService) { }
  editData = {
    studentId: '',
    studentName: '',
    bookName: '',
    issueDate: '',
    Status: '',
    returnDate: '',
    numberOfBook: '',
    librarian: '',
  }
  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data
      console.log(this.editData);
      this.validatorForData();
    } else {
      this.validator();
    }
  }
  send() {
    console.log("Send Call");
    console.log(this.attendance.value);
    
    if (this.attendance.valid) {
      this.child.emit(this.attendance.value)
    }
  }
  validatorForData() {
    this.attendance = new FormGroup({
      // 'studentId': new FormControl('', [Validators.required]),
      // 'studentName': new FormControl('', [Validators.required]),
      'bookName': new FormControl('', [Validators.required]),
      'issueDate': new FormControl('', [Validators.required]),
      'Status': new FormControl('', [Validators.required]),
      'returnDate': new FormControl('', [Validators.required]),
      'numberOfBook': new FormControl('', [Validators.required,Validators.minLength(1)]),
      'librarian': new FormControl('', [Validators.required]),
      'srNo': new FormControl(this.data.srNo)
    })
  }
  validator() {
    this.attendance = new FormGroup({
      'studentId': new FormControl('', [Validators.required]),
      'studentName': new FormControl('', [Validators.required]),
      'bookName': new FormControl('', [Validators.required]),
      'issueDate': new FormControl('', [Validators.required]),
      'returnDate': new FormControl('',),
      'numberOfBook': new FormControl('', [Validators.required,Validators.minLength(1)]),
      'librarian': new FormControl('', [Validators.required]),
    })
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
