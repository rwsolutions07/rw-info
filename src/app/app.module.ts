import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './templates/message/message/message.component';
import { ValidatorsMessageComponent } from './templates/message/validators-message/validators-message.component';
import { HomeComponent } from './componentes/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    ValidatorsMessageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
