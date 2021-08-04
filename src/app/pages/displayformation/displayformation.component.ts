import { Component, OnInit } from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import Chart from 'chart.js';
import {FormationDisplay, UserService} from '../../_service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-displayformation',
  templateUrl: './displayformation.component.html',
  styleUrls: ['./displayformation.component.css']
})
export class DisplayformationComponent implements OnInit {

constructor(private userService: UserService, private route: ActivatedRoute ) {
}
 id: number;
formation: FormationDisplay;


  ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.formation = this.userService.getFormationById(this.id);
  }

}
