import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private snack: MatSnackBar, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('loginAuth') === 'true') {
      this.router.navigateByUrl('home');
    }
    this.valid();
  }
  valid() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
    })
  }
  open() {
    this.router.navigateByUrl('register');
  }
  submit() {

    if (this.loginForm.invalid) {
      this.snack.open("Enter email and password First", 'Done', {
        duration: 3000
      });
    } else {

      let userData = JSON.parse(localStorage.getItem('user'));
      console.log(userData);
      if (this.loginForm.value.email === userData.email && this.loginForm.value.password === userData.password) {
        localStorage.setItem("loginAuth", "true");
        this.router.navigateByUrl('/home');
        this.snack.open("Login successfully", 'Done', {
          duration: 3000
        });
        location.reload();
      } else {
        this.snack.open("Enter email and password properly or Register First", 'Done', {
          duration: 3000
        });
      }

    }

  }
}