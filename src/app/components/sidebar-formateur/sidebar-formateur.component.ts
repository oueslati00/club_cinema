import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';
import {LOGOUT, ROUTES} from '../sidbaruser/sidbaruser.component';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTE_FORMATEUR: RouteInfo[] = [


  { path: 'listdesformations', title: 'List des formations',  icon: 'ni-key-25 text-info', class: '' },
  { path: 'listvideo', title: 'video dkika',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: 'mesformations', title: ' mes formations',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: 'addformation', title: 'ajouter une foramtion',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: 'ajouterVideoDkika', title: 'ajouter Video Dkika',  icon: 'ni-circle-08 text-pink', class: '' },
  { path: 'userInformation', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
];
@Component({
  selector: 'app-sidebar-formateur',
  templateUrl: './sidebar-formateur.component.html',
  styleUrls: ['./sidebar-formateur.component.css']
})
export class SidebarFormateurComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public logout: RouteInfo;
  constructor(private router: Router, private token: TokenStorageService ) { }

  ngOnInit() {
    this.menuItems = ROUTE_FORMATEUR.filter(menuItem => menuItem);
    this.logout = LOGOUT;
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logoutfunction() {
    this.router.navigate(['homePage']);
    this.token.signOut();
  }

}
