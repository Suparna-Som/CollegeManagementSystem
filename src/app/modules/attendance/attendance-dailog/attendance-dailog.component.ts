import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(private input: InputService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data
      console.log(this.editData);
    }
  }
  arr = [];
  getChildData(event) {
    console.log(event);
    this.arr.push(event)

    //  this.addedData.push(event)
  }
  close() {
    let x = this.arr.length
    this.addedData.push(this.arr[x - 1]);
    console.log(this.addedData);

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
