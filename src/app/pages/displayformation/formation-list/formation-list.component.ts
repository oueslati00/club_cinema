import { Component, OnInit } from '@angular/core';
import {FormationInformation, UserService} from '../../../_service/user.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  list: FormationInformation[];
  error = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getformationList().subscribe(
      data => {
        this.list = data;
        this.list = this.userService.AddImageToAllFormation(this.list);
        console.log(this.list);
      }, error => {
        console.log(error);
        this.error = error;
      }
    );
  }

}
