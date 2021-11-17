import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-library-dailog',
  templateUrl: './library-dailog.component.html',
  styleUrls: ['./library-dailog.component.scss']
})
export class LibraryDailogComponent implements OnInit {
  attendance !: FormGroup;
  constructor(private input: InputService) { }

  ngOnInit(): void {
    this.validator();
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
