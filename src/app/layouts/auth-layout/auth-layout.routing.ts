import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomePageComponent} from '../../pages/home-page/home-page.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'auth/login',          component: LoginComponent },
    { path: 'auth/register',       component: RegisterComponent },
    {path : 'auth/homePage', component : HomePageComponent}
];
