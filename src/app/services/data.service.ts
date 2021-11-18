import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  login;
  attendanceDataSource = [{ "studentId": 2, "studentName": "Satish", "departmentName": "Mechnical", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:09", "attendencePercentage": 10 }, { "studentId": 3, "studentName": "Dhiraj", "departmentName": "IT", "loginTime": "1970-01-01 00:00:01", "logoutTime": "1970-01-01 00:00:05", "attendencePercentage": 30 }, { "studentId": 6, "studentName": "Vrushang", "departmentName": "IT", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 50 }, { "studentId": 5, "studentName": "Vinod", "departmentName": "IT", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 52 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 45 }, { "studentId": 9, "studentName": "Ratan", "departmentName": "CIVIL", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 48 }, { "studentId": 10, "studentName": "Dhiraj", "departmentName": "IT", "loginTime": "2038-01-19 03:14:07", "logoutTime": "2038-01-19 03:14:07", "attendencePercentage": 0 }];
  libraryDataSource = [{ "studentId": 1, "numberOfBook": 2, "studentName": "Vicky", "bookName": "Annie ", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Supriya" }, { "studentId": 3, "numberOfBook": 1, "studentName": "Divya", "bookName": "R module", "issueDate": "2002-03-11", "returnDate": "2002-05-12", "librarian": "Jaya" }, { "studentId": 4, "numberOfBook": 0, "studentName": "Jhon", "bookName": "Java Coders", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Dyan" }, { "studentId": 5, "numberOfBook": 2, "studentName": "Akash", "bookName": "JAVA", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Supriya" }, { "studentId": 6, "numberOfBook": 2, "studentName": "Akshata", "bookName": "Heavy Coders", "issueDate": "2002-04-14", "returnDate": "2002-04-20", "librarian": "Priya" }, { "studentId": 7, "numberOfBook": 1, "studentName": "Shruti", "bookName": "C++", "issueDate": "2002-04-12", "returnDate": "2002-04-12", "librarian": "jiya" }];
  studentDataSource = [{ "studentId": 1, "studentName": "tiya", "departmentName": "Sci", "studentMobileNo": "23568709", "studentAddmissionDate": "2020-02-09" }, { "studentId": 2, "studentName": "trisha", "departmentName": "cse", "studentMobileNo": "342654562", "studentAddmissionDate": "2019-08-07" }, { "studentId": 3, "studentName": "dhf", "departmentName": "bsd", "studentMobileNo": "4365246", "studentAddmissionDate": "2010-08-06" }, { "studentId": 4, "studentName": "fdgf", "departmentName": "dhfj", "studentMobileNo": "543656", "studentAddmissionDate": "2019-09-08" }];
  departmentDataSource = [
    {
      "departmentId": 1,
      "departmentName": "Computer",
      "departmentHead": "dharmishtha",
      "teachersAll": "dharmishtha"
    },
    {
      "departmentId": 2,
      "departmentName": "computer",
      "departmentHead": "parthvi",
      "teachersAll": "teachers"
    },
    {
      "departmentId": 3,
      "departmentName": "chemical",
      "departmentHead": "roshan",
      "teachersAll": "roshan"
    }
  ];
  constructor() {

  }
  ngOnInit(): void {
    this.login = localStorage.getItem('loginAuth');

  }
}
