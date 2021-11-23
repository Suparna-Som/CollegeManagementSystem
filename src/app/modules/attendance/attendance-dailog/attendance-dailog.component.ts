import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-attendance-dailog',
  templateUrl: './attendance-dailog.component.html',
  styleUrls: ['./attendance-dailog.component.scss']
})
export class AttendanceDailogComponent implements OnInit {
  // attendance !: FormGroup;
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
      console.log(this.data);

    }
  }
  arr = [];
  getChildData(event) {
    this.arr.push(event)
    console.log(event);

    //this.addedData.push(event)
  }
  close() {
    let x = this.arr.length
    this.addedData.push(this.arr[x - 1]);
    console.log(this.addedData);
    if (this.addedData[0] == undefined) {
      this.snack.open("Please enter data then save", 'Done', {
        duration: 3000
      });
    }
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
