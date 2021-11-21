import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm !: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private snack: MatSnackBar, private auth: AuthService, private route: Router) { }

  ngOnInit() {
    this.valid();
  }
  valid() {
    this.registrationForm = new FormGroup({

      'userName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      // 'department': new FormControl('', [Validators.required]),
      // 'semester': new FormControl('', [Validators.required]),
    })
  }

  submit() {
    console.log(this.registrationForm);
    if (this.registrationForm.invalid) {
      this.snack.open("Fill the form", 'Done', {
        duration: 3000
      });
    } else {
      console.log(this.registrationForm.value);
      this.auth.createData(this.registrationForm.value).subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      //localStorage.setItem("user", JSON.stringify(this.registrationForm.value));
      this.route.navigateByUrl('login');
      this.snack.open("User has been register!! Now login", 'Done', {
        duration: 3000
      });
    }

  }
}
