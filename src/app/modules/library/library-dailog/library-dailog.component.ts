import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-library-dailog',
  templateUrl: './library-dailog.component.html',
  styleUrls: ['./library-dailog.component.scss']
})
export class LibraryDailogComponent implements OnInit {

  constructor(private input: InputService, private snack: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }
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

    }
  }
  arr = [];
  close() {
    let x = this.arr.length
    this.addedData.push(this.arr[x - 1]);

    if (this.addedData[0] == undefined) {
      this.snack.open("Please enter data then save", 'Done', {
        duration: 3000
      });
    }
  }
  getChildData(event) {

    this.arr.push(event)

  }
  deleteRow(i) {

    this.arrCounts.splice(i, 1);

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
