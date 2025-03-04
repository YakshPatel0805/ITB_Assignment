import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgetPasswordComponent } from './auth-user/forget-password/forget-password.component';
import { UserComponent } from './auth-user/user/user.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'forget-password',
        component : ForgetPasswordComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];
