import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  loginInvalid = false;

  constructor(
    private router: Router,
    private loginservice: AuthentificationService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  checkLogin() {
    console.log(this.email.value);
    this.loginservice
      .authentificate(this.email.value, this.password.value)
      .subscribe( 
        (data) => {
          this.loginInvalid = false;
          this.router.navigate(['/client']);
          sessionStorage.setItem('password', btoa(this.password.value));
          sessionStorage.setItem('id', data.id.toString());
          console.log('data login : ' + JSON.stringify(data));

        },
        (error) => {
          this.loginInvalid = true;
        }
      );
  }
}
