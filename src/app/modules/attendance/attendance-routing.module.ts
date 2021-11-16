import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';

const route: Routes = [
  { path: 'attendance', component: AttendancePageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
