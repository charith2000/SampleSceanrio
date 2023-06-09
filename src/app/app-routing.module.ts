import {isDevMode, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

import {TransactionComponent} from "./transaction/transaction.component";

import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "register" , component : RegisterComponent},

  {path : "customer", component: CustomerComponent},
  {path : "admin" , component : AdminComponent},
  {path : "transaction", component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
