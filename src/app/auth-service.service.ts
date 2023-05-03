import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.LoggedIn)
        }, 50);
      }
    )
    return promise
  }
LoggedIn: boolean = false;
login() {
  this.LoggedIn = true
}
logout() {
  this.LoggedIn = false
}
  constructor() { }
}
