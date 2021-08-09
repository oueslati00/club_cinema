import { Component, OnInit } from '@angular/core';
import {Cours, FormationDisplay, UserService} from '../../_service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-displayformation',
  templateUrl: './displayformation.component.html',
  styleUrls: ['./displayformation.component.css']
})
export class DisplayformationComponent implements OnInit {
  id: number;
  formation: FormationDisplay;
  error = '';
  idcour = 1;
  cours: Cours;
constructor(private userService: UserService, private route: ActivatedRoute ) {

}


  ngOnInit() {
  this.id = this.route.snapshot.params['id'];
 this.userService.getFormationById(this.id).subscribe(
    data => {
      this.formation = data;
      this.userService.setFormation(this.formation);
      console.log(this.formation);
      this.cours =  this.formation.chapter[0].cour[0];
      this.idcour = this.cours.id;
      }, error => {
     this.error = error;
     console.log(error);
    }
  );


  }

  ReciveEvent($event: Cours) {
    console.log('recive event was executed');
    console.log($event);
    this.cours = $event;
    this.idcour = this.cours.id;
  }


}
