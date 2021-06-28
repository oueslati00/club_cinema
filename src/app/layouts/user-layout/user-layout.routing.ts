import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const UserLayoutRoutes: Routes = [
  { path: 'userInfo',          component: LoginComponent },
  { path: 'formation_display',       component: RegisterComponent },
  { path : 'HomePage' , component: LoginComponent}
];
