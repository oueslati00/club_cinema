import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/members', title: 'Member Information',  icon:'ni ni-badge text-orange', class: '' },
    { path: '/user-profile', title: 'My profile',  icon:'ni-single-02 text-yellow', class: '' },
    {path:'/addforamtion',title:'add formation', icon:'ni ni-book-bookmark text-red', class:''},
    { path: '/videoDkika', title: ' Video Dkika',  icon:'ni-key-25 text-info', class: '' },
    {path: '/logout' , title: 'Logout', icon:'ni ni-user-run', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
