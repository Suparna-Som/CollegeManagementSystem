import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance.service';
import { DataService } from 'src/app/services/data.service';
import { AttendanceDailogComponent } from '../attendance-dailog/attendance-dailog.component';

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html',
  styleUrls: ['./attendance-page.component.scss']
})
export class AttendancePageComponent implements OnInit {
  dataCol = ['delete', 'srNo', 'studentId', 'studentName', 'department', 'loginTime', 'logoutTime', 'attendencePercentage', 'edit'];
  dataSource;
  allComplete: boolean = false;
  @ViewChild(MatSort) sort: MatSort;
  val = []
  deletedSrNo = [];
  constructor(public dailog: MatDialog, private attendannce: AttendanceService, private data: DataService) {
    this.dailog.afterAllClosed
    data.login = true
  }
  ngAfterViewInit(): void {
    //this.call()
  }
  setAll(completed: boolean) {
    this.allComplete = completed;
    if (completed == true) {
      this.deletedSrNo = []
      this.dataSource.filteredData.forEach(element => {
        this.deletedSrNo.push(element.srNo);
      });
      console.log(this.deletedSrNo);
    }
  }
  deleteSelected(completed: boolean, id) {
    if (completed) {
      this.deletedSrNo.push(id);
      console.log(this.deletedSrNo);
    } else {
      let index = this.deletedSrNo.indexOf(id);
      this.deletedSrNo.splice(index, 1);
      console.log(this.deletedSrNo);
    }
  }
  deleteBatch() {
    this.attendannce.deleteBatchData(this.deletedSrNo).subscribe({
      next: data => {
        console.log(data);
        this.getData()
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
  call() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.dataSource = ""
    this.attendannce.getMethod().subscribe(res => {
      this.val.push(res)
      this.dataSource = new MatTableDataSource(this.val[0]);
      this.val = []
      console.log(this.dataSource);
      this.call()
    });
  }
  deleteData(id) {
    this.attendannce.deleteData(id).subscribe({
      next: data => {
        console.log(data);
        this.getData()
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
  editData(id, editData) {

    console.log("editddta", editData);
    const dailogDef = this.dailog.open(AttendanceDailogComponent, {
      data: editData
    })
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);
      if (res != undefined) {
        if (res[0] != undefined) {
          console.log("res", res[0]);
          this.attendannce.updateData(id, res[0]).subscribe({
            next: data => {
              console.log(data);
              this.getData()
            },
            error: error => {
              console.error('There was an error!', error);
            }
          })
        }
      }
    })

  }
  openDailog() {
    const dailogDef = this.dailog.open(AttendanceDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      let a = []
      if (res != undefined) {
        if (res[0] != undefined) {
          this.attendannce.createData(res).subscribe({
            next: data => {
              console.log(data);
              this.getData()
            },
            error: error => {
              console.error('There was an error!', error);
            }
          })
        }
      }


    })
  }
}
