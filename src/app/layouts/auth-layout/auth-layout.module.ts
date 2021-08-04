import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomePageComponent} from '../../pages/home-page/home-page.component';
import {RfxParallaxModule} from 'rfx-parallax';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {ForgetpasswordComponent} from '../../pages/forgetpassword/forgetpassword.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    RfxParallaxModule,
    ReactiveFormsModule,
    MdbCarouselModule,
    VgCoreModule,
    NgbModule


    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent
  ]
})
export class AuthLayoutModule { }
