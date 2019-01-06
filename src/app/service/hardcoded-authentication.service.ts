import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    return username === 'jrivera' && password === 'dummy';
  }
}
