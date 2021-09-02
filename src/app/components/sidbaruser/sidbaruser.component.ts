import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: 'userInfo', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: 'listdesformations', title: 'Formation Display',  icon: 'ni ni-books text-red', class: '' },
  { path: 'listvideo', title: 'video dkika',  icon: 'ni ni-tv-2 text-red', class: '' },
];

export const LOGOUT: RouteInfo = { path: 'auth/login' , title: 'Logout', icon: 'ni ni-user-run', class: '' };
@Component({
  selector: 'app-sidbaruser',
  templateUrl: './sidbaruser.component.html',
  styleUrls: ['./sidbaruser.component.css']
})
export class SidbaruserComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  public logout: RouteInfo;
  constructor(private router: Router, private token: TokenStorageService ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.logout = LOGOUT;
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logoutfunction() {
    this.token.signOut();
    this.router.navigate(['auth/homePage']);

  }
}
