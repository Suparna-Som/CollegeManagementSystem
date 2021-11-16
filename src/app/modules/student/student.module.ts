import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentDailogComponent } from './student-dailog/student-dailog.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [StudentPageComponent, StudentDailogComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
