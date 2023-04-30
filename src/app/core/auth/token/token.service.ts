import { Injectable } from '@angular/core';

const KEY = 'authToken';
const KEYCustomer = 'authCustomer';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken() {
    return !!this.getToken();
  }

  setTokenCustomer(token: string) {
      window.localStorage.setItem(KEY, token);
  }

  getToken() {
      return window.localStorage.getItem(KEY);
  }

  removeTokenCustomer() {
      window.localStorage.removeItem(KEY);
      window.localStorage.removeItem(KEYCustomer);
  }

  getCustomer() {
    return window.localStorage.getItem(KEYCustomer);
  }
}
