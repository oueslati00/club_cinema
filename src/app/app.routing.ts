import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FormateurLayoutComponent} from './layouts/formateur-layout/formateur-layout.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {UserGuard} from './_service/user.guard';
import {AdminGuard} from './_service/admin.guard';
import {FormateurGuard} from './_service/formateur.guard';
import {LogoutGuard} from './_service/logout.guard';

const routes: Routes = [
   {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ],
     canActivateChild : [AdminGuard]
  }, {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ],
    canActivateChild : [LogoutGuard]
  },
  {
    path: 'user',
    component:  UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
      },
    ],
    canActivateChild : [UserGuard]
  },
  {
    path: 'formateur',
    component:  FormateurLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/formateur-layout/formateur-layout.module#FormateurLayoutModule'
      }
    ],
    canActivateChild : [FormateurGuard]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path : 'homePage',
    component : HomePageComponent
  },
  {
  path : '**' , component : ErrorPageComponent
  }
] ;

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
