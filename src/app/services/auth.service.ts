import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  regUrl = 'http://localhost:8080/api/login/insertLogin';
  login = "http://localhost:8080/api/login/findregisteredUser"

  data;
  constructor(private http: HttpClient) { }
  loginData(data) {
    return this.http.post(this.login, data);
  }
  createData(data) {
    return this.http.post(this.regUrl, data);
  }


}
