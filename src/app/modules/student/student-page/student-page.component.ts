import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance.service';
import { AttendanceDailogComponent } from '../../attendance/attendance-dailog/attendance-dailog.component';
import { StudentDailogComponent } from '../student-dailog/student-dailog.component';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  dataCol = ['studentId', 'studentName', 'departmentName', 'studentMobileNo', 'studentAddmissionDate', 'edit'];
  dataSource = new MatTableDataSource([{ "studentId": 1, "studentName": "tiya", "departmentName": "Sci", "studentMobileNo": "23568709", "studentAddmissionDate": "2020-02-09" }, { "studentId": 2, "studentName": "trisha", "departmentName": "cse", "studentMobileNo": "342654562", "studentAddmissionDate": "2019-08-07" }, { "studentId": 3, "studentName": "dhf", "departmentName": "bsd", "studentMobileNo": "4365246", "studentAddmissionDate": "2010-08-06" }, { "studentId": 4, "studentName": "fdgf", "departmentName": "dhfj", "studentMobileNo": "543656", "studentAddmissionDate": "2019-09-08" }]);

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
    const dailogDef = this.dailog.open(StudentDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      this.attendannce.createData(res)
    })
  }
}
