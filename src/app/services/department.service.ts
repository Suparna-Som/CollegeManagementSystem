import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = 'http://localhost:8080/getDepartment';
  editUrl = 'http://localhost:8080/updateDepartment';
  deleteUrl = 'http://localhost:8080/deleteDepartment?deptId=';
  insertUrl = 'http://localhost:8080/insertDepartment';
  deleteBatch = "http://localhost:8080/DeleteMultiplDepartment";

  constructor(private http: HttpClient) { }
  getMethod() {
    return this.http.get(this.url);
  }
  createData(data) {
    return this.http.post(this.insertUrl, data)
  }
  updateData(id, data) {
    return this.http.put(this.editUrl, data)
  }
  deleteData(id) {
    return this.http.delete(this.deleteUrl + id)
  }
  deleteBatchData(id) {
    return this.http.put(this.deleteBatch, id)
  }
}
