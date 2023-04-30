import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user';
import jtw_decode from 'jwt-decode'
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);
  private userName: string | undefined;

  constructor(private tokenService: TokenService, private http:  HttpClient) { 

      this.tokenService.hasToken() && 
          this.decodeAndNotify();
  }

  setTokenCustomer(token: string) {
      this.tokenService.setTokenCustomer(token);
      this.decodeAndNotify();
  }

  getUser() {
      return this.userSubject.asObservable();
  }


  private decodeAndNotify() {
      const token = this.tokenService.getToken();
      const user = jtw_decode(null == token ? '' : token) as User;
      this.userName = user.iss;
      console.log("JSON: ",JSON.stringify(user));
      this.userSubject.next(user);
  }

  logout() {
      this.tokenService.removeTokenCustomer();
      this.userSubject.next(null);
  }

  isLogged() {
      return this.tokenService.hasToken();
  }

  getUserName() {
      return this.userName;
  }
}
