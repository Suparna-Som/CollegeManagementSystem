import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:8080/api/showStudentDetails';
  editUrl = 'http://localhost:8080/api/updateStudentDetails';

  deleteUrl = 'http://localhost:8080/api/deleteStudentDetails?studentId=';
  insertUrl = 'http://localhost:8080/api/inserstudentDetails';

  insertBatch = "http://localhost:8080/api/InsertBatch"
  deleteBatch = "http://localhost:8080/api/DeleteMultiplerecordes";
  data;
  constructor(private http: HttpClient) { }
  getMethod() {
    return this.http.get(this.url);
  }
  createData(data) {
    return this.http.post(this.insertBatch, data)
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
