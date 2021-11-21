import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
}
