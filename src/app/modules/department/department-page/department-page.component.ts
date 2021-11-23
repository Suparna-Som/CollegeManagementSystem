import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { DepartmentService } from 'src/app/services/department.service';

import { DiagnosticReporter } from 'typescript';
import { DepartmentDailogComponent } from '../department-dailog/department-dailog.component';

export interface abc {
  id: number,
  title: string,
  userId: number,
  body: string
}
@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss']
})
export class DepartmentPageComponent implements OnInit, AfterViewInit {
  dataCol = ['delete', 'departmentId', 'departmentName', 'departmentHead', 'teachersAll', 'edit'];
  dataSource;
  val = []
  deletedSrNo = [];
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  allComplete: boolean = false;

  @ViewChild(MatSort) sort: MatSort;
  constructor(public dailog: MatDialog, private snack: MatSnackBar, private deptService: DepartmentService, private data: DataService) {
    this.dailog.afterAllClosed
    data.login = true
  }
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getData();
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
    this.deptService.deleteBatchData(this.deletedSrNo).subscribe({
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
  pageChanged(event) {

  }
  getData() {
    this.dataSource = ""
    this.deptService.getMethod().subscribe(res => {
      this.val.push(res)
      this.dataSource = new MatTableDataSource(this.val[0]);
      this.val = []

      this.call()
    });
  }
  deleteData(id) {
    this.deptService.deleteData(id).subscribe({
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

    const dailogDef = this.dailog.open(DepartmentDailogComponent, {
      data: editData
    })
    dailogDef.afterClosed().subscribe(res => {

      let a = []
      if (res != undefined) {
        if (res[0] != undefined) {
          this.deptService.updateData(id, res).subscribe({
            next: data => {

              this.snack.open("Upadted Successfully", 'Done', {
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
  data1;
  openDailog() {
    const dailogDef = this.dailog.open(DepartmentDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      let res1 = { departmentName: 'dasd', departmentHead: 'Dhiraj', teachersAll: 'ratan' }

      let a = []
      if (res != undefined) {
        if (res[0] != undefined) {
          this.deptService.createData(res).subscribe({
            next: data => {

              this.snack.open("Inserted Successfully", 'Done', {
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
