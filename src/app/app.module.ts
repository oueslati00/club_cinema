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



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxFileDropModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    DisplayformationComponent,
    UserInfoComponent,
    DisplaylistvideoComponent,
    AddvideoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
