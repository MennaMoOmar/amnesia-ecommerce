
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable()
export class AuthService {

  private _registerUrl = "https://amnesia-skincare.herokuapp.com/api/users/register"
  private _loginUrl = "https://amnesia-skincare.herokuapp.com/api/users/login"

  constructor(private http: HttpClient, private _router: Router) { }


  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     // Authorization: this.getToken()
    //   })
    // }
    console.log(user)
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}