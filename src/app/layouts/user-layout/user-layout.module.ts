import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserLayoutRoutes} from './user-layout.routing';
import {authInterceptorProviders} from '../auth-layout/_helpers/auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
  ],
  providers: [authInterceptorProviders],
})
export class UserLayoutModule { }
