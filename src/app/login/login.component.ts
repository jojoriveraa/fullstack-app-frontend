import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'jrivera';
  password = '';
  errorMessage = 'Invalid credentials';
  _invalidLogin = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogin() {
    if (this.username === 'jrivera' && this.password === 'dummy') {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  public get invalidLogin(): boolean {
    return this._invalidLogin;
  }

  public set invalidLogin(v: boolean) {
    this._invalidLogin = v;
  }
}
