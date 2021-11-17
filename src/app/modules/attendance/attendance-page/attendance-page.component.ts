import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance.service';
import { AttendanceDailogComponent } from '../attendance-dailog/attendance-dailog.component';

@Component({
  selector: 'app-attendance-page',
  templateUrl: './attendance-page.component.html',
  styleUrls: ['./attendance-page.component.scss']
})
export class AttendancePageComponent implements OnInit {
  dataCol = ['studentId', 'studentName', 'departmentName', 'loginTime', 'logoutTime', 'attendencePercentage', 'edit'];
  dataSource = new MatTableDataSource([{ "studentId": 2, "studentName": "Satish", "departmentName": "Mechnical", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:09", "attendencePercentage": 10 }, { "studentId": 3, "studentName": "Dhiraj", "departmentName": "IT", "loginTime": "1970-01-01 00:00:01", "logoutTime": "1970-01-01 00:00:05", "attendencePercentage": 30 }, { "studentId": 6, "studentName": "Vrushang", "departmentName": "IT", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 50 }, { "studentId": 5, "studentName": "Vinod", "departmentName": "IT", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 52 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 45 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 48 }, { "studentId": 10, "studentName": "Dhiraj", "departmentName": "IT", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }]);

  @ViewChild(MatSort) sort: MatSort;
  val = []
  constructor(public dailog: MatDialog, private attendannce: AttendanceService) {
    this.dailog.afterAllClosed
  }
  ngAfterViewInit(): void {
    this.call()
  }
  call() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    // this.deptService.getMethod().subscribe(res => {
    //   this.val.push(res)
    //   this.dataSource = new MatTableDataSource(this.val[0]);
    //   this.call()
    // });
  }
  deleteData(id) {
    this.attendannce.deleteData(id);
  }
  editData(id) {
    let a;
    this.attendannce.updateData(id, a)
  }
  openDailog() {
    const dailogDef = this.dailog.open(AttendanceDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      this.attendannce.createData(res)
    })
  }
}
