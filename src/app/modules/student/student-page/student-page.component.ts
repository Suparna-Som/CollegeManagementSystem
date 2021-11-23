import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance.service';
import { DataService } from 'src/app/services/data.service';
import { ServiceService } from 'src/app/services/service.service';
import { AttendanceDailogComponent } from '../../attendance/attendance-dailog/attendance-dailog.component';
import { StudentDailogComponent } from '../student-dailog/student-dailog.component';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  dataCol = ["delete", 'studentId', 'studentName', 'departmentName', 'studentMobileNo', 'studentAdmissionDate', 'edit'];
  //dataSource = new MatTableDataSource([{ "studentId": 1, "studentName": "tiya", "departmentName": "Sci", "studentMobileNo": "23568709", "studentAddmissionDate": "2020-02-09" }, { "studentId": 2, "studentName": "trisha", "departmentName": "cse", "studentMobileNo": "342654562", "studentAddmissionDate": "2019-08-07" }, { "studentId": 3, "studentName": "dhf", "departmentName": "bsd", "studentMobileNo": "4365246", "studentAddmissionDate": "2010-08-06" }, { "studentId": 4, "studentName": "fdgf", "departmentName": "dhfj", "studentMobileNo": "543656", "studentAddmissionDate": "2019-09-08" }]);
  dataSource;
  allComplete: boolean = false;
  deletedSrNo = [];
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  val = []
  constructor(public dailog: MatDialog, private snack: MatSnackBar, private student: ServiceService, private data: DataService) {
    this.dailog.afterAllClosed
    data.login = true
  }
  ngAfterViewInit(): void {
  }
  setAll(completed: boolean) {
    this.allComplete = completed;

    if (completed == true) {
      this.deletedSrNo = []
      this.dataSource.filteredData.forEach(element => {
        this.deletedSrNo.push(element.studentId);
      });


    }
  }
  deleteSelected(completed: boolean, id) {
    if (completed) {
      this.deletedSrNo.push(id);

    } else {
      let index = this.deletedSrNo.indexOf(id);
      this.deletedSrNo.splice(index, 1);

    }
  }
  deleteBatch() {
    this.student.deleteBatchData(this.deletedSrNo).subscribe({
      next: data => {

        this.snack.open("Deleted Successfully", 'Done', {
          duration: 3000
        });
        this.getData()
      },
      error: error => {
        this.snack.open("Something went wrong", 'Done', {
          duration: 3000
        });

      }
    })
  }
  call() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  pageChanged(event) {
    console.log(event);
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.dataSource = ""
    this.student.getMethod().subscribe(res => {
      this.val.push(res)
      this.dataSource = new MatTableDataSource(this.val[0]);
      this.val = []

      this.call()
    });
  }
  deleteData(id) {
    this.student.deleteData(id).subscribe({
      next: data => {

        this.snack.open("Deleted Successfully", 'Done', {
          duration: 3000
        });
        this.getData()
      },
      error: error => {
        this.snack.open("Something went wrong", 'Done', {
          duration: 3000
        });

      }
    });
  }
  editData(id, editData) {

    const dailogDef = this.dailog.open(StudentDailogComponent, {
      data: editData
    })
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);

      this.student.updateData(id, res[0]).subscribe({
        next: data => {

          this.snack.open("Updated Successfully", 'Done', {
            duration: 3000
          });
          this.getData()
        },
        error: error => {
          this.snack.open("Something went wrong", 'Done', {
            duration: 3000
          });
          console.log(error);

        }
      })
    })

  }
  openDailog() {
    const dailogDef = this.dailog.open(StudentDailogComponent)
    dailogDef.afterClosed().subscribe(res => {
      console.log(res);

      if (res[0] == undefined) {
        this.snack.open("Please enter data then save", 'Done', {
          duration: 3000
        });
      } else {
        this.student.createData(res).subscribe({
          next: data => {

            this.snack.open("Inserted Successfully", 'Done', {
              duration: 3000
            });
            console.log(data);

            this.getData()
          },
          error: error => {
            // this.snack.open("Something went wrong", 'Done', {
            //   duration: 3000
            // });
            // console.log(error);
            // this.getData()
          }
        })
      }

    })
  }
}
