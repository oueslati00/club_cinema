import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AddformationComponent} from '../../pages/addformation/addformation.component';
import {AddvideoComponent} from '../../pages/addvideo/addvideo.component';

import {UserformtionComponent} from '../../pages/userformtion/userformtion.component';
import {UserInfoComponent} from '../../pages/user-info/user-info.component';
import {FormationListComponent} from '../../pages/displayformation/formation-list/formation-list.component';
import {FormationListAdminComponent} from '../../pages/formation-list/formation-list.component';
import {DisplayformationComponent} from '../../pages/displayformation/displayformation.component';
import {DisplaylistvideoComponent} from '../../pages/displaylistvideo/displaylistvideo.component';

export const AdminLayoutRoutes: Routes = [
  {path: '' ,  redirectTo : 'listdesformations', pathMatch: 'full' },
  { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserInfoComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'members',           component: MapsComponent },
    {path: 'addforamtion', component: AddformationComponent},
    {path : 'videoDkika', component: AddvideoComponent},
    {path: 'userformation/:id' , component: UserformtionComponent},
  {path: 'listdesformations' , component : FormationListComponent},
  {path : 'formationlist' , component : FormationListAdminComponent},
  { path: 'formation_display/:id',       component: DisplayformationComponent },
  {path : 'listvideo', component: DisplaylistvideoComponent},
];
