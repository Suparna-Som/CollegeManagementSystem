import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url = 'http://localhost:8080/api/showLibraryDetails';
  editUrl = 'http://localhost:8080/api/updateLibraryDetails';
  deleteUrl='http://localhost:8080/api/deleteLibraryDetails?srNo=';
  insertUrl ='http://localhost:8080/api/storeLibraryDetails';
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
}
