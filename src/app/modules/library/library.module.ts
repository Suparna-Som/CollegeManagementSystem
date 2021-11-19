import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryDailogComponent } from './library-dailog/library-dailog.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { LibraryRoutingModule } from './library-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibraryFormComponent } from './library-form/library-form.component';



@NgModule({
  declarations: [LibraryDailogComponent, LibraryPageComponent, LibraryFormComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LibraryModule { }
