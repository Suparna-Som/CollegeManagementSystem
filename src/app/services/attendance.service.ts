import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  url = 'http://localhost:8080/attendence';
  editUrl = 'http://localhost:8080/attendence/update';
  deleteUrl = 'http://localhost:8080/attendence/delete?srNo=';
  insertUrl = 'http://localhost:8080/attendence/insert';
  batchUrl = "http://localhost:8080/attendence/insertBatch";
  data;
  constructor(private http: HttpClient) { }
  getMethod() {
    return this.http.get(this.url);
  }
  createData(data) {
    return this.http.post(this.batchUrl, data)
  }
  updateData(id, data) {
    return this.http.put(this.editUrl, data)
  }
  deleteData(id) {
    return this.http.delete(this.deleteUrl + id)
  }
}
