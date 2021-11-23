import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-student-dailog',
  templateUrl: './student-dailog.component.html',
  styleUrls: ['./student-dailog.component.scss']
})
export class StudentDailogComponent implements OnInit {
  editData = {
    studentId: "",
    studentName: "",
    department: "",
    loginTime: "",
    logoutTime: "",
  };
  counts = 0;
  arrCounts: number[] = [1];
  addedData = [];
  constructor(private input: InputService, private snack: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data

    }
  }

  getChildData(event) {
    console.log(event);

    this.addedData.push(event)
  }
  deleteRow(i) {

    this.arrCounts.splice(i, 1);

  }
  close() {

    console.log(this.addedData);
    console.log("Please enter data then save");

    if (this.addedData === []) {
      this.snack.open("Please enter data then save", 'Done', {
        duration: 3000
      });
    }
  }
  addForm() {
    this.arrCounts.push(this.counts);
    this.counts += 1;
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
