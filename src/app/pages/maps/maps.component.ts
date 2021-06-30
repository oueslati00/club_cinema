import { Component, OnInit } from '@angular/core';
import {SimpleuserService} from '../../layouts/admin-layout/_service/simpleuser.service';
import {simpleuser} from '../../Models/User';
import {ok} from 'assert';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  errormessage: string;
  listofuser: simpleuser[];
  button_color = 'btn btn-light';
  validate_value = 'valide';
  constructor(private simpleuserservice: SimpleuserService) { }

  ngOnInit() {
    this.simpleuserservice.userList().subscribe(
      (p) => {
        this.listofuser = p;
      },
      error => {
        this.errormessage = error.error.message;
      }
    );
  }

  verified(Id: number) {
    this.simpleuserservice.VerifiedById(Id).subscribe(
      (p) => {
         if ( p === 'valide' ) {
           this.button_color = 'btn btn-danger';
           this.validate_value = 'disable';
         }
         if (p === 'nonvalide') {
           this.button_color = 'btn btn-light';
           this.validate_value = 'enable';
         }
      },
      error => {
        this.errormessage = error.error.message;
      }
    );
  }
}
