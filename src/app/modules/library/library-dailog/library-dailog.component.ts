import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-library-dailog',
  templateUrl: './library-dailog.component.html',
  styleUrls: ['./library-dailog.component.scss']
})
export class LibraryDailogComponent implements OnInit {
  attendance !: FormGroup;
  constructor(private input: InputService,@Inject(MAT_DIALOG_DATA) public data: any) { }
  editData={
      studentId: '',
      studentName: '',
      bookName: '',
      issueDate: '',
      returnDate: '',
      numberOfBook: '',
      librarian: '',
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
      'bookName': new FormControl('', [Validators.required]),
      'issueDate': new FormControl('', [Validators.required]),
      'returnDate': new FormControl('', [Validators.required]),
      'numberOfBook': new FormControl('', [Validators.required]),
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
      'returnDate': new FormControl('', [Validators.required]),
      'numberOfBook': new FormControl('', [Validators.required]),
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
