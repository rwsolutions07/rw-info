import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { DadosLogin } from './model/dadosLogin';
import { environment } from 'src/environments/environment';
import { userAuth } from './model/userAuth';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:  HttpClient, private userService: UserService) { }

  authenticate(usuario: DadosLogin) {
    return this.http.post(environment.apiURL + '/autenticacao/login',  usuario , {observe: 'body'})
          .pipe(
            tap((response: userAuth | any) =>{
              console.log("JSon: "+JSON.stringify(response));
              this.userService.setTokenCustomer(response.token);
            })
          );
  }
}
