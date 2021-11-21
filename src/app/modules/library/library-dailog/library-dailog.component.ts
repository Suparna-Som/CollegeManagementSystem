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

  constructor(private input: InputService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  editData = {
    studentId: '',
    studentName: '',
    bookName: '',
    issueDate: '',
    returnDate: '',
    numberOfBook: '',
    librarian: '',
  }
  counts = 0;
  arrCounts: number[] = [1];
  addedData = [];
  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data
      console.log(this.editData);
    }
  }
  arr = [];
  close() {
    let x = this.arr.length
    this.addedData.push(this.arr[x - 1]);
    console.log(this.addedData);
  }
  getChildData(event) {
    console.log(event);
    this.arr.push(event)

  }
  deleteRow(i) {
    console.log(i);
    this.arrCounts.splice(i, 1);
    console.log(this.arrCounts);
  }
  addForm() {
    this.arrCounts.push(this.counts);
    this.counts += 1;
    let x = this.arr.length
    this.addedData.push(this.arr[x - 1]);
    this.arr = []
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
