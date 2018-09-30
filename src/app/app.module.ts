import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,MatTableModule} from "@angular/material";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Register2Component } from './components/register2/register2.component';
import { NetworthIndexComponent } from './components/networth/networth-index/networth-index.component';
import { NetWorthService } from './services/networth.service';
import { ExpenseService } from './services/expense.service';
import { ExpenseIndexComponent } from './components/expense/expense-index/expense-index.component';
import { ExpenseCreateComponent } from './components/expense/expense-create/expense-create.component';
import { ExpenseEditComponent } from './components/expense/expense-edit/expense-edit.component';
import { ExpenseDeleteComponent } from './components/expense/expense-delete/expense-delete.component';

import { NetworthDetailComponent } from './components/networth/networth-detail/networth-detail.component';
import { NetworthCreateComponent } from './components/networth/networth-create/networth-create.component';
import { NetworthEditComponent } from './components/networth/networth-edit/networth-edit.component';
import { BudgetService } from './services/budget.service';
import { BudgetIndexComponent } from './components/budget/budget-index/budget-index.component';
import { BudgetCreateComponent } from './components/budget/budget-create/budget-create.component';
import { BudgetUpdateComponent } from './components/budget/budget-update/budget-update.component';



const routes = [
  { path: "register", component: RegistrationComponent},
  { path: "register2", component: Register2Component},
  { path: 'login', component: LoginComponent },
  { path: 'home', component:HomeComponent},
  { path: 'netWorth', children:[
    { path: '',component: NetworthIndexComponent },
    { path: 'details/:id', component: NetworthDetailComponent},
    { path: 'create',component: NetworthCreateComponent},
   ]
  },

  { path: 'expense', children:[
    { path: '',component: ExpenseIndexComponent },
    { path: 'create', component: ExpenseCreateComponent },
    { path: 'edit/:id', component: ExpenseEditComponent},
    { path: 'delete/:id', component: ExpenseDeleteComponent}
   ]
  },
  { path: 'budget', children:[
    { path: '',component: BudgetIndexComponent },
    { path: 'create', component: BudgetCreateComponent },
    //{ path: 'edit/:id', component: BudgetEditComponent},
    //{ path: 'delete/:id', component: ExpenseEditComponent}
   ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    Register2Component,
    NetworthIndexComponent,
    ExpenseIndexComponent,
    ExpenseCreateComponent,
    ExpenseEditComponent,
    ExpenseDeleteComponent,
    NetworthDetailComponent,
    NetworthCreateComponent,
    NetworthEditComponent,
    BudgetIndexComponent,
    BudgetCreateComponent,
    BudgetUpdateComponent,
  
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
    MatTableModule,
    MatCardModule,
    MatStepperModule
  ],
  providers: [
    AuthService,
    NetWorthService,
    ExpenseService,
    BudgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
