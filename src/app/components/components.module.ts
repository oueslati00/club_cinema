import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {AddcourComponent} from './addcour/addcour.component';

import {NgxFileDropModule} from 'ngx-file-drop';
import { SidbaruserComponent } from './sidbaruser/sidbaruser.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidebarFormateurComponent } from './sidebar-formateur/sidebar-formateur.component';
import { ModalUserInfoComponent } from './modal-user-info/modal-user-info.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgxFileDropModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ModalBasicComponent,
    AddcourComponent,
    SidbaruserComponent,
    ErrorPageComponent,
    SidebarFormateurComponent,
    ModalUserInfoComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ModalBasicComponent,
        AddcourComponent,
        SidbaruserComponent,
        SidebarFormateurComponent,
        ModalUserInfoComponent
    ]
})
export class ComponentsModule { }
