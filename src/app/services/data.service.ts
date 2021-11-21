import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {


  login;
  depGet = "http://localhost:8080/getDepartmentCount";
  libGet = "http://localhost:8080/api/totalLibraryDetails";
  stuGet = "http://localhost:8080/api/totalStudentDetails"
  attGet = "http://localhost:8080/attendence/count";
  departmentDataSource = 0;
  libraryDataSource = 0
  studentDataSource = 0
  attDataSource = 0
  constructor(private http: HttpClient) {
    this.get()
  }
  ngOnInit(): void {
    this.login = localStorage.getItem('loginAuth');
  }
  get() {
    this.http.get(this.depGet).subscribe(res => {
      this.departmentDataSource = Number(res);
    });
    this.http.get(this.libGet).subscribe(res => {
      this.libraryDataSource = Number(res)
    });
    this.http.get(this.stuGet).subscribe(res => {
      this.studentDataSource = Number(res)
    })
    this.http.get(this.attGet).subscribe(res => {
      this.attDataSource = Number(res)
    })
  }
}
