import { Injectable } from '@angular/core';
import {UserService} from '../../../_service/user.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  user: any;
  constructor(private userService: UserService) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log('save token method was executed');
    console.log(token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {

    /*window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));*/
  }

  public getUser(): any {
    this.userService.getUserByToken().subscribe(
      data => {
        console.log(data);
        this.user = data;
        return this.user;
      }
    );
   // return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  async getUser2 () {
    const resulat = await this.userService.getUserByToken().toPromise();
    console.log('get user Method was ececuted ');
    return  resulat;
  }
}
