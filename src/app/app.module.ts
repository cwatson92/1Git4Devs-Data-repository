import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Register2Component } from './components/register2/register2.component';

const routes = [
  { path: "register", component: RegistrationComponent},
  { path: "register2", component: Register2Component},
  { path: 'login', component: LoginComponent },
  { path: 'home', component:HomeComponent},
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    Register2Component,
   // HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatInputModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
