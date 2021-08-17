import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../layouts/auth-layout/_service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  constructor(private token: TokenStorageService) {
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return  this.token.getUser2().then(
      data => {
        console.log('user guard was executed ');
        console.log(data);
        return data.roles.map(x => x.name).includes('ROLE_USER');
      }
    );
  }

}
