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
  { path: 'listvideo', title: 'Rebrique VideoDkika',  icon: 'ni ni-tv-2 text-red', class: '' },
  { path: 'mesformations', title: ' compte Rendu ',  icon: 'ni ni-archive-2 text-pink', class: '' },
  { path: 'addformation', title: 'ajouter une formation',  icon: 'ni ni-book-bookmark text-pink', class: '' },
  { path: 'userInformation', title: 'mes Informations',  icon: 'ni-single-02 text-yellow', class: '' },
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
    this.token.signOut();
    this.router.navigate(['auth/homePage']);

  }

}
