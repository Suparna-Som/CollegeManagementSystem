import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
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
  dataCol = ['departmentId', 'departmentName', 'departmentHead', 'teachersAll', 'edit'];
  dataSource ;
  val = []
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dailog: MatDialog, private deptService: DepartmentService, private data: DataService) {
    this.dailog.afterAllClosed
    data.login = true
  }
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getData();
  }
  call() {
    this.dataSource.sort = this.sort;
  }
  getData(){
    this.dataSource=""
    this.deptService.getMethod().subscribe(res => {
      this.val.push(res)
      this.dataSource = new MatTableDataSource(this.val[0]);
      this.val=[]
      console.log(this.dataSource);
      this.call()
    });
  }
  deleteData(id) {
    this.deptService.deleteData(id).subscribe({
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
    console.log("editddta",editData);
    const dailogDef = this.dailog.open(DepartmentDailogComponent, {
      data: editData
    })
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);
      this.deptService.updateData(id, res).subscribe({
        next: data => {
          console.log(data);
          this.getData()
        },
        error: error => {
            console.error('There was an error!', error);
        }
      })
    })

  }
  data1;
    openDailog() {
      const dailogDef = this.dailog.open(DepartmentDailogComponent)
      dailogDef.afterClosed().subscribe(res => {
       let res1={departmentName: 'dasd', departmentHead: 'Dhiraj', teachersAll: 'ratan'}
        console.log(JSON.stringify(res));
        
        this.deptService.createData(res).subscribe({
          next: data => {
            console.log(data);
            this.getData()
          },
          error: error => {
              console.error('There was an error!', error);
          }
      })
      })
    }
}
