import { Component, OnInit } from '@angular/core';
interface User {
  name: String;
  email: String ;
  status: String;
  validation: String;
  progressFormation: String;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  listofuser: User[] = [
    {name : 'brahim', email: 'brahim' , progressFormation: 'aaa', status: 'aaa', validation: 'aaa'},
    {name : 'brahim', email: 'brahim' , progressFormation: 'aaa', status: 'aaa', validation: 'aaa'},
    {name : 'brahim', email: 'brahim' , progressFormation: 'aaa', status: 'aaa', validation: 'aaa'},
    {name : 'brahim', email: 'brahim' , progressFormation: 'aaa', status: 'aaa', validation: 'aaa'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
