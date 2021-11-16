import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './student-page/student-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'student', canActivate: [AuthGuard], component: StudentPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
