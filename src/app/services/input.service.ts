import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  today: any;
  logout: any;
  date: any;
  return: any;
  logoutMax: any;
  constructor() {
    var dt = new Date();
    this.today = dt.getFullYear().toString().padStart(4, '0') + '-' +
      (dt.getMonth() + 1).toString().padStart(2, '0') + '-' +
      dt.getDate().toString().padStart(2, '0') + 'T' +
      dt.getHours().toString().padStart(2, '0') + ':' +
      dt.getMinutes().toString().padStart(2, '0');

    this.date = dt.getFullYear().toString().padStart(4, '0') + '-' +
      (dt.getMonth() + 1).toString().padStart(2, '0') + '-' +
      dt.getDate().toString().padStart(2, '0');

    this.return = dt.getFullYear().toString().padStart(4, '0') + '-' +
      (dt.getMonth() + 1).toString().padStart(2, '0') + '-' +
      (dt.getDate() + 7).toString().padStart(2, '0');

    this.logout = dt.getFullYear().toString().padStart(4, '0') + '-' +
      (dt.getMonth() + 1).toString().padStart(2, '0') + '-' +
      dt.getDate().toString().padStart(2, '0') + 'T' +
      (dt.getHours() + 1).toString().padStart(2, '0') + ':' +
      dt.getMinutes().toString().padStart(2, '0');
    this.logoutMax = dt.getFullYear().toString().padStart(4, '0') + '-' +
      (dt.getMonth() + 1).toString().padStart(2, '0') + '-' +
      dt.getDate().toString().padStart(2, '0') + 'T' +
      (dt.getHours() + 7).toString().padStart(2, '0') + ':' +
      dt.getMinutes().toString().padStart(2, '0');
    console.log("today : ", this.logout);

  }
  characters(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  bookName(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  number(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
