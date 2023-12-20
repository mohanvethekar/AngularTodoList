import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import path from 'path';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { RouteGuardService } from './route-guard.service';

export const routes: Routes = [
    {path: '' , component:LoginComponent},
    {path:'welcome/:name' , component:WelcomeComponent,canActivate:[RouteGuardService]},
    {path:"todos" , component:ListTodosComponent , canActivate:[RouteGuardService]},
    {path:"error" , component:ErrorComponent,},
    {path:"login" , component:LoginComponent},
    {path:"logout" , component:LogoutComponent,canActivate:[RouteGuardService]},
    {path:"menu" , component:MenuComponent},

];
