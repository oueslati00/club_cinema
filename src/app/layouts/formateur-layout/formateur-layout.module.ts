import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormateurLayoutRoutes} from './formateur-layout.routing';
import {authInterceptorProviders} from '../auth-layout/_helpers/auth.interceptor';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FormateurLayoutRoutes),
    FormsModule
  ],
  providers: [authInterceptorProviders],
})
export class FormateurLayoutModule { }
