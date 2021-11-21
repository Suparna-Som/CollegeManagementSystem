import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentDailogComponent } from './student-dailog/student-dailog.component';
import { StudentRoutingModule } from './student-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';



@NgModule({
  declarations: [StudentPageComponent, StudentDailogComponent, StudentFormComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
