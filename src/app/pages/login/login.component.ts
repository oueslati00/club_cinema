import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../layouts/auth-layout/_service/auth.service';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private route: Router) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
     this.tokenStorage.getUser2().then(
       (resultat) => {
         console.log(resultat);
         this.roles = resultat.roles;
       }
      );
    }
  }
  onSubmit(): void {
    console.log('submit method was executed of login ');
    this.authService.login(this.form).subscribe(
      data => {
        console.log(this.form);
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = data.roles;
        if (this.roles.includes('ROLE_ADMIN')) {
          this.route.navigate(['admin/']);
        } else {
          if (this.roles.includes('ROLE_MODERATOR')) {
            this.route.navigate(['formateur/']);
          } else {
            if (this.roles.includes('ROLE_USER')) {
              this.route.navigate(['user/']);
            }
          }
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(this.errorMessage);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
  ngOnDestroy() {
  }

}
