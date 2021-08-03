import { Component, OnInit } from '@angular/core';
import {UpdateInformationService} from '../../layouts/admin-layout/_service/update-information.service';
import {UserResponse} from '../../_service/Models/UserInformation';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: any = {};
   user: UserResponse;
  errorMessage = '';
  constructor(private updateUser: UpdateInformationService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.updateUser.getUserInformation().subscribe(
      (p) => {
        this.user = p ;
      }
    );
    console.log(this.user);
  }
  onSubmit(f): void {
    console.log(this.form);
  }
  reloadPage(): void {
    window.location.reload();
  }


}
