import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from '../../_service/adminservice.service';
import {simpleuser} from '../../_service/Models/User';
import {UserService} from '../../_service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userformtion',
  templateUrl: './userformtion.component.html',
  styleUrls: ['./userformtion.component.css']
})
export class UserformtionComponent implements OnInit {

  monParam: any;
  name: any;
  idformation: any;
  constructor(private userService: UserService , private activateroute: ActivatedRoute ) { }

  ngOnInit(): void {
   this.activateroute.paramMap.subscribe(
     params => {
       this.monParam = params.get('id');
       this.idformation = this.monParam;
       this.userService.getFormationById(this.monParam).then(
         data => {
           this.name = data.name;
         }
       );
     }
   );

  }

}
