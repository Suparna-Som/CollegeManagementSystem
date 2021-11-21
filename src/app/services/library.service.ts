import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  url = 'http://localhost:8080/api/showLibraryDetails';
  editUrl = 'http://localhost:8080/api/updateLibraryDetails';
  deleteUrl = 'http://localhost:8080/api/deleteLibraryDetails?srNo=';
  insertUrl = 'http://localhost:8080/api/storeLibraryDetails';
  batchInsertUrl = "http://localhost:8080/api/insertMultipleLibraryDetail";
  deleteBatch = "http://localhost:8080/api/deleteLibraryDetailsBatch"
  constructor(private http: HttpClient) { }
  getMethod() {
    return this.http.get(this.url);
  }
  createData(data) {
    return this.http.post(this.batchInsertUrl, data)
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
