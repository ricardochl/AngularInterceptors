import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(){
    console.log("Logout")
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
