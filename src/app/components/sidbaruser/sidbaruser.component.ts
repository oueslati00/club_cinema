import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: 'userInfo', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: 'formation_display', title: 'Formation Display',  icon: 'ni-key-25 text-info', class: '' },
  { path: 'listvideo', title: 'video dkika',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: 'logout' , title: 'Logout', icon: 'ni ni-user-run', class: '' }
];
@Component({
  selector: 'app-sidbaruser',
  templateUrl: './sidbaruser.component.html',
  styleUrls: ['./sidbaruser.component.css']
})
export class SidbaruserComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}
