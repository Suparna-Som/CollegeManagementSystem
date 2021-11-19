import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance.service';
import { DataService } from 'src/app/services/data.service';
import { LibraryService } from 'src/app/services/library.service';
import { LibraryDailogComponent } from '../library-dailog/library-dailog.component';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
  dataCol = ['delete', 'srNo', 'studentId', 'studentName', 'bookName', 'issueDate', 'returnDate', 'numberOfBook', 'librarian', 'edit'];
  val = []
  allComplete: boolean = false;
  dataSource;
  deletedSrNo = [];
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dailog: MatDialog, private library: LibraryService, private data: DataService) {
    this.dailog.afterAllClosed;
    data.login = true;
  }
  ngAfterViewInit(): void {
  }
  setAll(completed: boolean) {
    this.allComplete = completed;

    if (completed == true) {
      this.deletedSrNo = []
      this.dataSource.filteredData.forEach(element => {
        this.deletedSrNo.push(element.srNo);
      });
      console.log(this.deletedSrNo);
      this.deletedSrNo = []
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
  call() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.dataSource = ""
    this.library.getMethod().subscribe(res => {
      this.val.push(res)
      this.dataSource = new MatTableDataSource(this.val[0]);
      this.val = []
      this.call()
    });
  }
  deleteData(id) {
    this.library.deleteData(id).subscribe({
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
    const dailogDef = this.dailog.open(LibraryDailogComponent, {
      data: editData
    })
    dailogDef.afterClosed().subscribe(res => {
      let a = []
      if (res != undefined) {
        if (res[0] != undefined) {
          this.library.updateData(id, res).subscribe({
            next: data => {
              console.log("successfull", data);
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
    const dailogDef = this.dailog.open(LibraryDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      let a = []
      if (res != undefined) {
        if (res[0] != undefined) {
          this.library.createData(res).subscribe({
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


