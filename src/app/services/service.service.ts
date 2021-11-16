import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'jdbc:mysql://localhost:3306/phpmyadmin';
  data;
  constructor(private http: HttpClient) { }
  getMethod() {
    return this.http.get(this.url);
  }
  createData(data) {
    return this.http.post(this.url, data)
  }
  updateData(id, data) {
    return this.http.put(this.url + id, data)
  }
  deleteData(id) {
    return this.http.delete(this.url + id)
  }
}
