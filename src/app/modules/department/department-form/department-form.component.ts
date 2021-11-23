import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { InputService } from 'src/app/services/input.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {
  departmentForm !: FormGroup;
  @Output() child = new EventEmitter()
  @Input() data;
  editData = {
    departmentId: '',
    departmentName: '',
    departmentHead: '',
    teachersAll: ''
  };
  constructor(private input: InputService) { }

  ngOnInit(): void {
    if (this.data != null) {
      this.editData = this.data

      this.validatorForData();
    } else {
      this.validator();
    }
  }
  send() {

    if (this.departmentForm.valid) {
      this.child.emit(this.departmentForm.value)
    }
  }
  validatorForData() {
    this.departmentForm = new FormGroup({
      'departmentId': new FormControl('', [Validators.required]),
      'departmentName': new FormControl('', [Validators.required]),
      'departmentHead': new FormControl('', [Validators.required]),
      'teachersAll': new FormArray([new FormControl('', [Validators.required])])
    })
  }
  validator() {
    this.departmentForm = new FormGroup({
      'departmentName': new FormControl('', [Validators.required]),
      'departmentHead': new FormControl('', [Validators.required]),
      'teachersAll': new FormArray([new FormControl('', [Validators.required])])
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
