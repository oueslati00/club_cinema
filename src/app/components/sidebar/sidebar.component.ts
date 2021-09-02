import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LOGOUT} from '../sidbaruser/sidbaruser.component';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  /*  { path: 'dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: 'icons', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },*/
    { path: 'members', title: 'Member Information',  icon: 'ni ni-badge text-orange', class: '' },
    { path: 'user-profile', title: 'My profile',  icon: 'ni-single-02 text-yellow', class: '' },
    {path: 'addforamtion' , title : 'add formation' , icon: 'ni ni-book-bookmark text-red', class: ''},
    { path: 'videoDkika', title: ' Video Dkika',  icon: 'ni ni-button-play text-pink', class: '' },
  {path : 'formationlist', title: 'compte Rendu List' , icon : 'ni ni-archive-2 text-red', class: ''},
  {path : 'listdesformations' , title: 'display formation List', icon : 'ni ni-books text-red', class: ''},
  {path : 'listvideo' , title: 'display video List', icon : 'ni ni-tv-2 text-red', class: ''}

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
