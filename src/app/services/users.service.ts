import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

const url = 'http://localhost:1337';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isLogin = false;
  isAdmin = false;
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }

  }
  login(user: IUser) {
    return this.http.post(`${url}/auth/local` , user);
  }


}
