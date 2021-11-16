import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibraryPageComponent } from './library-page/library-page.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'library', canActivate: [AuthGuard], component: LibraryPageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
