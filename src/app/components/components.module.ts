import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {AddcourComponent} from './addcour/addcour.component';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {NgxFileDropModule} from 'ngx-file-drop';
import { SidbaruserComponent } from './sidbaruser/sidbaruser.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    VgCoreModule,
    NgxFileDropModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ModalBasicComponent,
    AddcourComponent,
    SidbaruserComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ModalBasicComponent,
        AddcourComponent,
        SidbaruserComponent
    ]
})
export class ComponentsModule { }
