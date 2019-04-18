import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router ) { }

  loginForm: FormGroup;
  email: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);
  ngOnInit() {
    this.loginForm = new FormGroup ({
      email : this.email,
      password : this.password
    });
    console.log('data', this.loginForm.value);
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(data => {
      console.log('data', data);
    });
  }

}
