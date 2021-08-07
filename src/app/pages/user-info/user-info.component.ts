import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../layouts/auth-layout/_service/token-storage.service';
import {UserService} from '../../_service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  id: any;
  user: any = {};
  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.token.getUser().id;
    console.log(this.id);
    this.userService.getUserInformation(this.id).subscribe(
      data => {
        this.user = data;
      }, error => {
    console.log(error);
  },
    );
  }

}
