import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AddformationComponent} from '../../pages/addformation/addformation.component';
import {HomePageComponent} from '../../pages/home-page/home-page.component';
import {AddvideoComponent} from '../../pages/addvideo/addvideo.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'members',           component: MapsComponent },
    {path: 'addforamtion', component: AddformationComponent},
  {path : 'videoDkika', component: AddvideoComponent}
];
