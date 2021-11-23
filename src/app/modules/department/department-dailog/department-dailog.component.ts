import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-department-dailog',
  templateUrl: './department-dailog.component.html',
  styleUrls: ['./department-dailog.component.scss']
})
export class DepartmentDailogComponent implements OnInit {

  counts = 0;
  arrCounts: number[] = [1];
  addedData = [];
  editData = {
    departmentId: '',
    departmentName: '',
    departmentHead: '',
    teachersAll: ''
  };
  constructor(private input: InputService, private snack: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data

    }
  }
  arr = [];
  getChildData(event) {

    this.arr.push(event)

    //  this.addedData.push(event)
  }
  close() {
    let x = this.arr.length
    this.addedData.push(this.arr[x - 1]);

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
}
