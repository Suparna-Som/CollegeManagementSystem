import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-department-dailog',
  templateUrl: './department-dailog.component.html',
  styleUrls: ['./department-dailog.component.scss']
})
export class DepartmentDailogComponent implements OnInit {
  departmentForm !: FormGroup;
  constructor(private input: InputService) { }

  ngOnInit(): void {
    this.validator();
  }
  validator() {
    this.departmentForm = new FormGroup({
      'departmentName': new FormControl('', [Validators.required]),
      'departmentHead': new FormControl('', [Validators.required]),
      'teachersAll':  new FormArray([new FormControl('', [Validators.required])])
    })
  }
  get addteacher() {
    return (<FormArray>this.departmentForm.get('teachersAll')).controls;
  }
  deleteRow(index: number) {
    (<FormArray>this.departmentForm.get('teachersAll')).removeAt(index);
  }
  add() {
    (<FormArray>this.departmentForm.get('teachersAll')).push(new FormControl('', Validators.required));
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
}
