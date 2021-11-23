import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  dataCol = ['delete', 'srNo', 'studentId', 'studentName', 'bookName', 'issueDate', "Status", 'returnDate', 'Penalty', 'studentReturnDate', 'librarian', 'edit'];
  val = []
  allComplete: boolean = false;
  dataSource;
  deletedSrNo = [];
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dailog: MatDialog, private snack: MatSnackBar, private library: LibraryService, private data: DataService) {
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


    }
  }
  deleteSelected(completed: boolean, id) {
    if (completed) {
      this.deletedSrNo.push(id);

    } else {
      let index = this.deletedSrNo.indexOf(id);
      this.deletedSrNo.splice(index, 1);


    }
  }
  deleteBatch() {
    this.library.deleteBatchData(this.deletedSrNo).subscribe({
      next: data => {

        this.snack.open("Deleted successfully", 'Done', {
          duration: 3000
        });
        this.getData()
      },
      error: error => {
        this.snack.open("Something went wrong", 'Done', {
          duration: 3000
        });

      }
    })
  }
  pageChanged(event) {
    console.log(event);
  }
  call() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

        this.snack.open("Deleted successfully", 'Done', {
          duration: 3000
        });
        this.getData()
      },
      error: error => {
        this.snack.open("Something went wrong", 'Done', {
          duration: 3000
        });

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
          this.library.updateData(id, res[0]).subscribe({
            next: data => {

              this.snack.open("Updated successfully", 'Done', {
                duration: 3000
              });
              this.getData()
            },
            error: error => {
              this.snack.open("Something went wrong", 'Done', {
                duration: 3000
              });

            }
          })
        }
      }
    })
  }
  openDailog() {
    const dailogDef = this.dailog.open(LibraryDailogComponent)
    dailogDef.afterClosed().subscribe(res1 => {
      let a = []


      if (res1 != undefined) {
        if (res1[0] != undefined) {
          this.library.createData(res1).subscribe({
            next: data => {

              this.snack.open("Inserted successfully", 'Done', {
                duration: 3000
              });
              this.getData()
            },
            error: error => {
              this.snack.open("Something went wrong", 'Done', {
                duration: 3000
              });

            }
          })
        }
      }
    })
  }
}


