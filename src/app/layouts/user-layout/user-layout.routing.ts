import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {DisplayformationComponent} from '../../pages/displayformation/displayformation.component';
import {DisplaylistvideoComponent} from '../../pages/displaylistvideo/displaylistvideo.component';
import {HomePageComponent} from '../../pages/home-page/home-page.component';
import {UserInfoComponent} from '../../pages/user-info/user-info.component';

export const UserLayoutRoutes: Routes = [
  { path: 'userInfo',          component: UserInfoComponent },
  { path: 'formation_display',       component: DisplayformationComponent },
  {path : 'listvideo', component: DisplaylistvideoComponent}
]

