import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomePageComponent} from '../../pages/home-page/home-page.component';
import {ForgetpasswordComponent} from '../../pages/forgetpassword/forgetpassword.component';
import {SendcodeComponent} from '../../pages/forgetpassword/sendcode/sendcode.component';
import {SendmailComponent} from '../../pages/forgetpassword/sendmail/sendmail.component';
import {UpdatepasswordComponent} from '../../pages/forgetpassword/updatepassword/updatepassword.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    {path : 'homePage', component : HomePageComponent},
    {path : 'forgetPassword' , component : ForgetpasswordComponent,
      children: [
        {path : 'sendcode' , component: SendcodeComponent},
        {path : 'sendMail' , component : SendmailComponent},
        {path : 'updatePassword' , component: UpdatepasswordComponent}
      ]}
];
