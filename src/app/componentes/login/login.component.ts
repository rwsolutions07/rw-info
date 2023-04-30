import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/auth/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  error: boolean = false;
  message: string = '';

  @ViewChild('usernameInput') userameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(private router: Router,
              private loginService:  LoginService,
              private elementRef: ElementRef,
              private formBuilder: FormBuilder) {}


  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/img/backgroundLogo.png')";
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  login(){
    this.loginService.authenticate(this.form.value)
                    .subscribe((res) =>{
                      this.error = false;
                      this.router.navigate(['home'])
                    },
                    err =>{
                      this.error = true;
                      this.message = 'Erro no login.';
                      console.log(err);
                    })

   
  }
}
