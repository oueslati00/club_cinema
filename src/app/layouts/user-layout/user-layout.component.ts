import { Component, OnInit } from '@angular/core';
import {FormationInformation, UserService} from '../../_service/user.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
   list: FormationInformation[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.list = this.userService.getformationList();
  }

}
