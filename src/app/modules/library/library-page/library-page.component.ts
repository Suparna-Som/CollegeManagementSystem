import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance.service';
import { DataService } from 'src/app/services/data.service';
import { LibraryDailogComponent } from '../library-dailog/library-dailog.component';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
  dataCol = ['srNo', 'studentId', 'studentName', 'bookName', 'issueDate', 'returnDate', 'numberOfBook', 'librarian', 'edit'];
  dataSource = new MatTableDataSource([{ "studentId": 1, "numberOfBook": 2, "studentName": "Vicky", "bookName": "Annie ", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Supriya" }, { "studentId": 3, "numberOfBook": 1, "studentName": "Divya", "bookName": "R module", "issueDate": "2002-03-11", "returnDate": "2002-05-12", "librarian": "Jaya" }, { "studentId": 4, "numberOfBook": 0, "studentName": "Jhon", "bookName": "Java Coders", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Dyan" }, { "studentId": 5, "numberOfBook": 2, "studentName": "Akash", "bookName": "JAVA", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Supriya" }, { "studentId": 6, "numberOfBook": 2, "studentName": "Akshata", "bookName": "Heavy Coders", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Priya" }, { "studentId": 7, "numberOfBook": 1, "studentName": "Shruti", "bookName": "C++", "issueDate": "2002-04-12", "returnDate": "2002-04-12", "librarian": "jiya" }]);
  val = []

  @ViewChild(MatSort) sort: MatSort;
  constructor(public dailog: MatDialog, private attendannce: AttendanceService, private data: DataService) {
    this.dailog.afterAllClosed;
    data.login = true;
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
    const dailogDef = this.dailog.open(LibraryDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      this.attendannce.createData(res)
    })
  }
}


