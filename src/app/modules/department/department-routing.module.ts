import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'department', canActivate: [AuthGuard], component: DepartmentPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
