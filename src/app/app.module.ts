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

const routes = [
  { path: "register", component: RegistrationComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent
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
