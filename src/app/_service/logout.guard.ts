import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../layouts/auth-layout/_service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivateChild {

  constructor(private token: TokenStorageService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.token.getToken());
    return  this.token.getToken() === null;
  }


}
