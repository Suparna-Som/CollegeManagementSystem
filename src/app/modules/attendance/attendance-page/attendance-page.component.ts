
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  val = []
  deletedSrNo = [];
  constructor(public dailog: MatDialog, private snack: MatSnackBar, private attendannce: AttendanceService, private data: DataService) {
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

    }
  }

  pageChanged(event) {
    console.log(event);

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
    this.attendannce.deleteBatchData(this.deletedSrNo).subscribe({
      next: data => {

        this.snack.open("Deleted Successfully", 'Done', {
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
  call() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

      this.call()
    });
  }
  deleteData(id) {
    this.attendannce.deleteData(id).subscribe({
      next: data => {

        this.snack.open("Deleted Successfully", 'Done', {
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

    const dailogDef = this.dailog.open(AttendanceDailogComponent, {
      data: editData
    })
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);

      if (res != undefined) {
        if (res[0] != undefined) {

          this.attendannce.updateData(id, res[0]).subscribe({
            next: data => {

              this.snack.open("Edited Successfully", 'Done', {
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
    const dailogDef = this.dailog.open(AttendanceDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      let a = []
      if (res != undefined) {
        if (res[0] != undefined) {
          this.attendannce.createData(res).subscribe({
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
