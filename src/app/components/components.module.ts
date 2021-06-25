import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {AddcourComponent, NgbdModal1Content, NgbdModal2Content} from './addcour/addcour.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ModalBasicComponent,
    AddcourComponent,
    NgbdModal1Content,
    NgbdModal2Content
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ModalBasicComponent,
    NgbdModal1Content,
    NgbdModal2Content,
    AddcourComponent
  ]
})
export class ComponentsModule { }
