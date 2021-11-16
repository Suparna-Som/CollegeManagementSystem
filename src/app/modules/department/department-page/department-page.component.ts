import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  dataCol = ['departmentId', 'departmentName', 'departmentHead', 'teachersAll', 'edit', 'delete'];
  dataSource = [
    {
      "departmentId": 1,
      "departmentName": "Computer",
      "departmentHead": "dharmishtha",
      "teachersAll": "dharmishtha"
    },
    {
      "departmentId": 2,
      "departmentName": "computer",
      "departmentHead": "parthvi",
      "teachersAll": "teachers"
    },
    {
      "departmentId": 3,
      "departmentName": "chemical",
      "departmentHead": "roshan",
      "teachersAll": "roshan"
    }
  ];
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dailog: MatDialog, private deptService: DepartmentService) {
    this.dailog.afterAllClosed
  }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    // this.deptService.getMethod().subscribe(res => {
    //   console.log(res);
    //   this.dataSource = res;
    // });
  }
  openDailog() {
    const dailogDef = this.dailog.open(DepartmentDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);
      //this.dataSource.push(res)
      console.log(this.deptService);
    })
  }
}
