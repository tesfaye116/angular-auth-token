import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminGuard} from './admin.guard'

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {ProductComponent} from './product/product.component';


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    //gurd product component
    {path: 'product', component: ProductComponent, canActivate: [AdminGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
