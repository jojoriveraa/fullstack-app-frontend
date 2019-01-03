import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'jrivera' && this.password === 'dummy') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  public get invalidLogin(): boolean {
    return this._invalidLogin
  }

  public set invalidLogin(v: boolean) {
    this._invalidLogin = v;
  }

}
