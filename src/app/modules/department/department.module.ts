import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentDailogComponent } from './department-dailog/department-dailog.component';
import { DepartmentFormComponent } from './department-form/department-form.component';




@NgModule({
  declarations: [DepartmentPageComponent, DepartmentDailogComponent, DepartmentFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DepartmentRoutingModule,

  ]
})
export class DepartmentModule { }
