import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { DisplayformationComponent } from './pages/displayformation/displayformation.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { DisplaylistvideoComponent } from './pages/displaylistvideo/displaylistvideo.component';
import { AddvideoComponent } from './pages/addvideo/addvideo.component';
import {NgxFileDropModule} from 'ngx-file-drop';
import {RfxParallaxModule} from 'rfx-parallax';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {authInterceptorProviders} from './layouts/auth-layout/_helpers/auth.interceptor';
import { SendmailComponent } from './pages/forgetpassword/sendmail/sendmail.component';
import { SendcodeComponent } from './pages/forgetpassword/sendcode/sendcode.component';
import { UpdatepasswordComponent } from './pages/forgetpassword/updatepassword/updatepassword.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {HomePageComponent} from './pages/home-page/home-page.component';
import { ChapterListComponent } from './pages/displayformation/chapter-list/chapter-list.component';
import { FormationDetailComponent } from './pages/displayformation/formation-detail/formation-detail.component';
import { CommentListComponent } from './pages/displayformation/comment-list/comment-list.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxFileDropModule,
    RfxParallaxModule,
    VgCoreModule,
    IvyCarouselModule


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    DisplayformationComponent,
    UserInfoComponent,
    DisplaylistvideoComponent,
    AddvideoComponent,
    SendmailComponent,
    SendcodeComponent,
    UpdatepasswordComponent,
    HomePageComponent,
    ChapterListComponent,
    FormationDetailComponent,
    CommentListComponent

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
