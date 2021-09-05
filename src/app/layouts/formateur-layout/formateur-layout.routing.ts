import { Routes } from '@angular/router';
import {UserInfoComponent} from '../../pages/user-info/user-info.component';
import {DisplayformationComponent} from '../../pages/displayformation/displayformation.component';
import {DisplaylistvideoComponent} from '../../pages/displaylistvideo/displaylistvideo.component';
import {FormationListComponent} from '../../pages/displayformation/formation-list/formation-list.component';
import {ErrorPageComponent} from '../../components/error-page/error-page.component';
import {AddformationComponent} from '../../pages/addformation/addformation.component';
import {DisplayMyformationComponent} from '../../pages/display-myformation/display-myformation.component';
import {AddvideoComponent} from '../../pages/addvideo/addvideo.component';

export const FormateurLayoutRoutes: Routes = [
  {path : ''  , redirectTo : 'listdesformations', pathMatch: 'full'},
  { path: 'userInformation',          component: UserInfoComponent },
  { path: 'formation_display/:id',       component: DisplayformationComponent },
  {path : 'listvideo', component: DisplaylistvideoComponent},
  {path : 'listdesformations'  , component: FormationListComponent},
  {path : 'addformation'  , component: AddformationComponent},
  {path: 'mesformations' , component : DisplayMyformationComponent},
  {path : '**' , component : ErrorPageComponent}
];
