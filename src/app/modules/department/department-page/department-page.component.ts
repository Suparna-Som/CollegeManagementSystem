import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

import { DiagnosticReporter } from 'typescript';
import { DepartmentDailogComponent } from '../department-dailog/department-dailog.component';


@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.scss']
})
export class DepartmentPageComponent implements OnInit {
  dataCol = ['id', 'name', 'head', 'teacher'];
  dataSource = [

  ];
  constructor(public dailog: MatDialog) {
    this.dailog.afterAllClosed
  }

  ngOnInit(): void {
  }
  openDailog() {
    const dailogDef = this.dailog.open(DepartmentDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);
      this.dataSource.push(res)
      console.log(this.dataSource);

    })
  }
}
